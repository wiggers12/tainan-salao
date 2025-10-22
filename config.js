const SHEET_ID = "1c_-Uf2WSqVVoO7qpOzDJaMgIEkO17uF5";
const API_KEY = "AIzaSyC4AuWdBjcwRoZnkQjhIPxBQKpvKhyjir0";

const TABS = {
  'funil-precatorio': "FUNIL PRECATÓRIO_INICIO MARÇO25",
  'crm-precatorio': "PRODUÇÃO DIÁRIA_PRECATÓRIOS",
  'funil-geral': "FUNIL TRABALHISTA BANC E PREVI",
  'ranking': "RANKING PRECATÓRIOS",
  'sla': "META MENSAL POR PASTA",
  'controle-processos': "Controle_Processos",
  'distratos': "BASE ASTREA TODOS OS PROCESSOS",
  'pdi': "PDI COLABORADORES"
};

function buildSheetURL(tab) {
  return `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(TABS[tab])}?key=${API_KEY}`;
}