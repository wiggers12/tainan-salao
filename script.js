let mesSelecionado = 'Todos';

function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('pageContainer').innerHTML = html;
      carregarDados(page);
    });
}

function carregarDados(page) {
  fetch(buildSheetURL(page))
    .then(res => res.json())
    .then(data => {
      const rows = data.values;
      if (!rows) return;
      renderizarCards(page, rows);
      renderizarGraficos(page, rows);
    });
}

function atualizarFiltroMes() {
  mesSelecionado = document.getElementById('mesFiltro').value;
  const currentPage = document.querySelector('[data-current-page]');
  if (currentPage) carregarDados(currentPage.dataset.currentPage);
}

function renderizarCards(page, rows) {
  const cardsContainer = document.getElementById('cards');
  if (!cardsContainer) return;

  const total = rows.length - 1; // remove header
  cardsContainer.innerHTML = `
    <div class="card">📄 Total de Registros: <strong>${total}</strong></div>
    <div class="card">📅 Mês atual: <strong>${mesSelecionado}</strong></div>
  `;
}

function renderizarGraficos(page, rows) {
  const canvas = document.getElementById('chart');
  if (!canvas) return;

  const labels = rows.slice(1).map(r => r[0]);
  const valores = rows.slice(1).map(r => Number(r[1]) || 0);

  new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Registros',
        data: valores,
        backgroundColor: '#4B7BEC'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}

// Carregar página inicial
loadPage('funil-precatorio');