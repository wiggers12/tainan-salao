const SHEET_ID = "1baSrMHddB1BeFEjhkBpR0ES4ZIF5EJ9MIWnK83NW9hc";
const API_KEY = "AIzaSyC4AuWdBjcwRoZnkQjhIPxBQKpvKhyjir0";
const RANGE = "FUNIL PRECATÓRIO_INICIO MARÇO25";
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(RANGE)}?key=${API_KEY}`;

async function carregarDados() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const linhas = data.values;
    if (!linhas || linhas.length < 2) return;

    const headers = linhas[1];
    const registros = linhas.slice(2).map(l => {
      const obj = {};
      headers.forEach((h, i) => (obj[h] = l[i] || ""));
      return obj;
    });

    exibirCards(registros);
    exibirTabela(headers, registros);
    exibirGraficos(registros);
  } catch (e) {
    console.error("Erro ao carregar dados:", e);
  }
}

function exibirCards(registros) {
  document.getElementById("totalLeads").innerText = `Total de Leads: ${registros.length}`;
  const prioridade = { Alta: 0, Média: 0, Baixa: 0 };
  const consultores = {};

  registros.forEach(r => {
    const p = (r["PRIORIDADE: ALTA,MÉDIA OU BAIXA"] || "").trim();
    if (p) prioridade[p] = (prioridade[p] || 0) + 1;
    const c = (r["CONSULTOR"] || "").trim();
    if (c) consultores[c] = (consultores[c] || 0) + 1;
  });

  document.getElementById("alta").innerText = `Alta: ${prioridade["Alta"] || 0}`;
  document.getElementById("media").innerText = `Média: ${prioridade["Média"] || 0}`;
  document.getElementById("baixa").innerText = `Baixa: ${prioridade["Baixa"] || 0}`;

  let top = Object.entries(consultores).sort((a, b) => b[1] - a[1])[0];
  document.getElementById("consultorTop").innerText = top ? `Consultor Destaque: ${top[0]} (${top[1]})` : "Consultor Destaque: —";
}

function exibirTabela(headers, registros) {
  const head = document.getElementById("tabelaHead");
  const body = document.getElementById("tabelaBody");
  head.innerHTML = `<tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr>`;
  body.innerHTML = registros.map(r => `<tr>${headers.map(h => `<td>${r[h] || ""}</td>`).join("")}</tr>`).join("");

  document.getElementById("filtro").addEventListener("input", e => {
    const termo = e.target.value.toLowerCase();
    const filtrado = registros.filter(r =>
      (r["NOME"] || "").toLowerCase().includes(termo) ||
      (r["CONSULTOR"] || "").toLowerCase().includes(termo)
    );
    body.innerHTML = filtrado.map(r => `<tr>${headers.map(h => `<td>${r[h] || ""}</td>`).join("")}</tr>`).join("");
  });
}

function exibirGraficos(registros) {
  const prioridade = { Alta: 0, Média: 0, Baixa: 0 };
  const status = {};
  const linha = {};

  registros.forEach(r => {
    const p = (r["PRIORIDADE: ALTA,MÉDIA OU BAIXA"] || "").trim();
    if (p) prioridade[p] = (prioridade[p] || 0) + 1;
    const s = (r["STATUS"] || "").trim();
    if (s) status[s] = (status[s] || 0) + 1;
    const d = (r["DATA DO PRIMEIRO CONTATO COM O CLIENTE"] || "").slice(0,10);
    if (d) linha[d] = (linha[d] || 0) + 1;
  });

  new Chart(document.getElementById("graficoPrioridade"), {
    type: "pie",
    data: { labels: Object.keys(prioridade), datasets: [{ data: Object.values(prioridade), backgroundColor: ["#ff4d4d","#ffaa00","#00cc99"] }] },
  });

  new Chart(document.getElementById("graficoStatus"), {
    type: "bar",
    data: { labels: Object.keys(status), datasets: [{ data: Object.values(status), backgroundColor: "#00bfff" }] },
    options: { plugins: { legend: { display: false } } }
  });

  new Chart(document.getElementById("graficoLinha"), {
    type: "line",
    data: { labels: Object.keys(linha), datasets: [{ data: Object.values(linha), borderColor: "#00bfff", fill: false }] },
    options: { plugins: { legend: { display: false } } }
  });
}

carregarDados();
setInterval(carregarDados, 300000); // 5 minutos
