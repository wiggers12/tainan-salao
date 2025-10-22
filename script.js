function mostrarPagina(pagina) {
  fetch(`pages/${pagina}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("conteudo").innerHTML = html;
      const initFunction = `init_${pagina.replace(/-/g,'_')}`;
      if (typeof window[initFunction] === "function") window[initFunction]();
    });
}

async function carregarDados(tab) {
  const url = buildSheetURL(tab);
  const res = await fetch(url);
  const json = await res.json();
  const valores = json.values;
  const cabecalho = valores[0];
  const linhas = valores.slice(1);
  return { cabecalho, linhas };
}

function criarGrafico(id, labels, data, titulo) {
  new Chart(document.getElementById(id), {
    type: 'bar',
    data: {
      labels,
      datasets: [{ data, label: titulo, backgroundColor: '#2c3e50', borderRadius: 5 }]
    },
    options: {
      plugins: { legend: { display: false } },
      responsive: true
    }
  });
}