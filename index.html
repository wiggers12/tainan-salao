<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Doce Sabor Caseiro - Gestão</title>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    /* Estilos Globais */
    * {
      box-sizing: border-box;
      font-family: 'Quicksand', sans-serif;
    }
    body {
      background: #fdf6f7; /* Um rosa bem clarinho */
      margin: 0;
      color: #333;
      line-height: 1.6;
      display: flex; /* Para layout flexbox com sidebar */
      min-height: 100vh; /* Garante que o corpo ocupa toda a altura */
    }

    /* Splash Screen */
    .splash {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100%; /* Ocupa toda a largura antes de sumir */
      background: linear-gradient(to bottom right, #ffb6c1, #f08080); /* Gradiente rosa-avermelhado */
      color: white;
      text-align: center;
      transition: opacity 1s ease-in-out;
      opacity: 1;
      position: absolute; /* Para que não afete o layout principal ao desaparecer */
      top: 0;
      left: 0;
      z-index: 2000; /* Garante que fique acima de tudo */
    }
    .splash.fade-out {
        opacity: 0;
        visibility: hidden; /* Oculta o elemento para que não seja interativo após o fade-out */
        transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
    }
    .splash h1 {
      font-family: 'Pacifico', cursive; /* Fonte cursiva para o título */
      font-size: 4.5rem; /* Maior e mais impactante */
      margin-bottom: 25px;
      text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    }
    .splash button {
      background: white;
      color: #f08080;
      font-size: 1.4rem;
      border: none;
      padding: 15px 30px;
      border-radius: 50px; /* Botão arredondado */
      cursor: pointer;
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      transition: all 0.3s ease;
      animation: pulse 1.5s infinite; /* Animação de pulso para o botão */
    }
    .splash button:hover {
      background: #eee;
      transform: translateY(-3px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      animation: none; /* Remove a animação ao hover */
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    /* Mensagem de Boas-Vindas */
    .welcome-message {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(to bottom right, #ffb6c1, #f08080);
      color: white;
      font-family: 'Pacifico', cursive;
      font-size: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.8s ease-in-out, visibility 0s linear 0.8s;
      z-index: 2500;
      text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
      animation: fadeInZoom 0.8s ease-out forwards;
    }
    .welcome-message.active {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.8s ease-in-out, visibility 0s linear 0s;
    }
    @keyframes fadeInZoom {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
    }
    .welcome-message.fade-out-welcome {
        opacity: 0;
        transition: opacity 0.8s ease-in-out;
    }


    /* Layout Principal do App (com sidebar) */
    .container {
      display: none; /* Inicia oculto */
      flex-grow: 1; /* Permite que o container ocupe o espaço restante */
      max-width: 1200px; /* Largura máxima para o layout total */
      margin: 0 auto; /* Centraliza o conteúdo geral */
      display: flex; /* Para sidebar e conteúdo principal */
      padding: 0; /* Remove padding do container para gerenciar com sidebar */
    }

    /* Sidebar (Barra Lateral) */
    .sidebar {
      width: 250px; /* Largura padrão da sidebar */
      background: #f08080; /* Cor da sidebar */
      padding: 20px 0;
      box-shadow: 2px 0 10px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      flex-shrink: 0; /* Não encolhe */
      border-radius: 0 15px 15px 0; /* Borda arredondada no lado direito */
      z-index: 1000; /* Garante que fique acima de outros elementos menores */
    }

    .sidebar h2 {
        color: white;
        text-align: center;
        margin-bottom: 30px;
        font-family: 'Pacifico', cursive;
        font-size: 2rem;
        border-bottom: 2px solid rgba(255,255,255,0.3);
        padding-bottom: 15px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .sidebar nav {
      display: flex;
      flex-direction: column;
      gap: 10px; /* Espaçamento entre botões */
      padding: 0 15px; /* Padding interno da navegação */
      background: none; /* Remove background da nav padrão */
      box-shadow: none; /* Remove sombra da nav padrão */
    }
    .sidebar nav button {
      background: none;
      border: none;
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      padding: 15px 20px; /* Maior padding para os botões */
      border-radius: 10px; /* Bordas arredondadas */
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 12px; /* Mais espaço entre ícone e texto */
      text-align: left; /* Alinha texto à esquerda */
    }
    .sidebar nav button:hover, .sidebar nav button.active {
      background: rgba(255,255,255,0.25); /* Fundo mais visível ao hover/ativo */
      transform: translateX(5px); /* Efeito cascata sutil */
      box-shadow: 0 4px 10px rgba(0,0,0,0.1); /* Sombra para o item ativo */
    }
    .sidebar nav button.active {
        background: rgba(255,255,255,0.35); /* Fundo mais forte para o item ativo */
    }

    /* Conteúdo Principal (seções) */
    .main-content {
      flex-grow: 1; /* Ocupa o resto do espaço */
      padding: 20px;
      overflow-y: auto; /* Permite rolagem dentro do conteúdo se for muito alto */
    }

    section {
      display: none;
      background: white;
      padding: 25px;
      margin-bottom: 25px; /* Espaço entre as seções caso haja mais de uma */
      border-radius: 15px; /* Bordas mais arredondadas */
      box-shadow: 0 5px 20px rgba(0,0,0,0.08); /* Sombra mais suave */
    }
    section.active {
      display: block;
    }
    h2 {
      color: #e91e63; /* Rosa mais vibrante para títulos */
      margin-bottom: 20px;
      border-bottom: 2px solid #f8bbd0; /* Linha sutil */
      padding-bottom: 8px;
      font-size: 1.8rem;
      text-align: center;
    }
    h3 {
        color: #f08080;
        margin-top: 25px;
        margin-bottom: 15px;
        border-bottom: 1px dashed #f8bbd0;
        padding-bottom: 5px;
        font-size: 1.4rem;
    }

    /* Formulários e Inputs */
    input, select, button.save, .search-bar input {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px; /* Mais espaço entre campos */
      border: 1px solid #ccc;
      border-radius: 10px; /* Bordas arredondadas */
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    input:focus, select:focus, .search-bar input:focus {
      border-color: #f08080;
      box-shadow: 0 0 0 3px rgba(240, 128, 128, 0.2); /* Sombra ao focar */
      outline: none;
    }
    button.save {
      background: #f08080;
      color: white;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    button.save:hover {
      background: #e91e63;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }

    /* Botões de Ação (Editar, Excluir, Usar, Ver Detalhes, Adicionar/Remover Qtd) */
    button.edit, button.delete, button.use, button.view-details, button.add-qty, button.remove-qty {
        background: #ffc107; /* Amarelo para editar */
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        margin-left: 8px;
        font-size: 0.85em;
        transition: all 0.2s ease;
    }
    button.delete {
        background: #dc3545; /* Vermelho para excluir */
    }
    button.use {
        background: #6c757d; /* Cinza para usar */
    }
    button.view-details {
        background: #2196f3; /* Azul para ver detalhes */
    }
    button.add-qty {
        background: #4CAF50; /* Verde para adicionar quantidade */
    }
    button.remove-qty {
        background: #f44336; /* Vermelho para remover quantidade */
    }

    button.edit:hover { background: #e0a800; transform: translateY(-1px); }
    button.delete:hover { background: #c82333; transform: translateY(-1px); }
    button.use:hover { background: #5a6268; transform: translateY(-1px); }
    button.view-details:hover { background: #1976d2; transform: translateY(-1px); }
    button.add-qty:hover { background: #388E3C; transform: translateY(-1px); }
    button.remove-qty:hover { background: #d32f2f; transform: translateY(-1px); }


    /* Listas de Itens */
    ul {
      list-style: none;
      padding: 0;
      margin-top: 20px;
      max-height: 400px; /* Altura máxima para rolagem */
      overflow-y: auto;
      border-top: 1px solid #eee; /* Separador sutil */
      padding-top: 15px;
    }
    li {
      background: #fff0f5; /* Rosa claro para itens da lista */
      margin-bottom: 12px; /* Mais espaço entre itens */
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Sombra mais pronunciada */
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap; /* Permite quebrar linha em telas pequenas */
      border: 1px solid #ffe6ec; /* Borda suave */
    }
    li .item-details {
        flex-grow: 1;
        font-size: 0.95rem;
        color: #555;
    }
    li .item-actions {
        display: flex;
        gap: 8px; /* Espaçamento entre os botões de ação */
        margin-top: 10px; /* Espaçamento caso quebre linha */
    }
    @media (min-width: 480px) {
        li .item-actions {
            margin-top: 0; /* Remove espaçamento se não quebrar linha */
        }
    }
    li strong {
        color: #e91e63;
    }

    /* Mensagens de Lista Vazia/Sem Resultados */
    .empty-list-message {
        text-align: center;
        color: #888;
        font-style: italic;
        padding: 20px;
        background: #f8f8f8;
        border-radius: 8px;
        margin-top: 20px;
    }

    /* Cores de status para estoque */
    .falta { background: #ffebee; border-color: #ef9a9a; } /* Vermelho bem claro */
    .falta .item-details { color: #d32f2f; font-weight: bold; }
    .baixo { background: #fffde7; border-color: #ffeb3b; } /* Amarelo bem claro */
    .baixo .item-details { color: #fbc02d; }
    .historico { font-size: 0.85rem; color: #777; }
    .historico li { background: #fdf6f7; border: none; box-shadow: none; padding: 8px 10px; }


    /* Estilos do Financeiro e Dashboard */
    .info-card {
        background: #ffe6ec;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        text-align: center;
    }
    .info-card p {
        font-size: 1.2em;
        margin-bottom: 10px;
        color: #555;
    }
    .info-card p strong {
        color: #e91e63;
    }
    .info-card .value {
        font-size: 1.8em;
        font-weight: bold;
        margin-top: 5px;
    }
    #ganhos, .ganhos-value { color: #4caf50; } /* Verde para ganhos */
    #gastos, .gastos-value { color: #f44336; } /* Vermelho para gastos */
    #lucros, .lucros-value { color: #2196f3; } /* Azul para lucros */

    .financeiro-detail-toggle {
        background: #f08080;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100%;
        font-weight: bold;
        transition: background 0.3s ease, transform 0.3s ease;
    }
    .financeiro-detail-toggle:hover {
        background: #e91e63;
        transform: translateY(-2px);
    }
    .financeiro-list-container {
        max-height: 0; /* Inicia oculto com altura 0 */
        overflow: hidden;
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 0 15px; /* Padding vertical 0 para ocultar */
        background: #fefefe;
        transition: max-height 0.5s ease-out, padding 0.5s ease-out; /* Transição suave */
        margin-top: 10px;
    }
    .financeiro-list-container.active {
        max-height: 400px; /* Altura máxima quando ativo (ajuste conforme necessário) */
        padding: 15px; /* Padding total quando ativo */
    }
    .financeiro-list-container h4 {
        color: #f08080;
        margin-top: 0;
        margin-bottom: 15px;
        border-bottom: 1px dashed #f8bbd0; /* Linha pontilhada */
        padding-bottom: 8px;
        font-size: 1.2em;
    }
    .financeiro-list-container ul {
        max-height: none; /* Sobrescreve o max-height para este ul específico */
        overflow-y: visible; /* Sobrescreve para este ul específico */
        padding-left: 0;
        border-top: none; /* Remove a borda superior para não duplicar */
    }
    .financeiro-list-container li {
        background: #ffe6f2; /* Cor mais clara para itens de detalhe */
        font-size: 0.9em;
        padding: 10px;
        margin-bottom: 8px;
        border: 1px solid #fce4ec;
    }
    .financeiro-filters {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }
    .financeiro-filters select {
        flex: 1;
        min-width: 150px;
        margin-bottom: 0;
    }

    /* Adicionado: Campo para adicionar ingredientes em Produtos */
    .ingrediente-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        padding: 8px;
        background: #fdf6f7;
        border: 1px solid #ffe6ec;
        border-radius: 8px;
    }
    .ingrediente-item input[type="text"], .ingrediente-item input[type="number"] {
        margin-bottom: 0; /* Remove margem padrão para esses inputs */
        flex: 1;
    }
    .ingrediente-item button {
        background: #dc3545;
        color: white;
        border: none;
        padding: 6px 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9em;
    }
    .ingrediente-item button:hover {
        background: #c82333;
    }
    #listaIngredientesProduto {
        margin-top: 15px;
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 10px;
        max-height: 200px;
        overflow-y: auto;
        background: #fcfcfc;
    }

    /* Barra de Busca dedicada */
    .search-bar {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 15px;
        background: #fff0f5;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .search-bar label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #e91e63;
    }

    /* Botão para abrir/fechar sidebar em mobile */
    .sidebar-toggle {
        display: none; /* Inicia oculto em desktop */
        background: #f08080;
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 1.5rem;
        cursor: pointer;
        position: fixed;
        top: 15px;
        left: 15px;
        z-index: 1001;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: transform 0.3s ease;
    }
    .sidebar-toggle:hover {
        transform: scale(1.05);
    }

    /* Estilos específicos da Agenda */
    #agenda .client-detail-card {
        background: #fff0f5;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        border: 1px solid #ffe6ec;
    }
    #agenda .client-detail-card h3 {
        color: #e91e63;
        margin-top: 0;
        margin-bottom: 15px;
        border-bottom: 2px solid #f8bbd0;
        padding-bottom: 8px;
        text-align: left; /* Alinha o título do cliente à esquerda */
    }
    #agenda .client-detail-card p {
        margin-bottom: 8px;
        color: #555;
    }
    #agenda .client-detail-card strong {
        color: #f08080;
    }
    #agenda .client-detail-card .back-button {
        background: #6c757d;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 15px;
        font-weight: bold;
        transition: background 0.3s ease;
    }
    #agenda .client-detail-card .back-button:hover {
        background: #5a6268;
    }
    #agenda .pedido-history-list {
        margin-top: 20px;
        border-top: 1px dashed #f8bbd0;
        padding-top: 15px;
    }
    #agenda .pedido-history-list li {
        background: #fef1f2;
        padding: 12px;
        margin-bottom: 10px;
        border-radius: 8px;
        border: 1px solid #fcdcdc;
        font-size: 0.9em;
        line-height: 1.4;
    }
    #agenda .pedido-history-list li strong {
        color: #e91e63;
    }
    #agenda .client-list-view {
        display: block; /* Visível por padrão */
    }
    #agenda .client-details-view {
        display: none; /* Oculto por padrão */
    }

    /* ESTILOS PARA NOTIFICAÇÕES (TOASTS) */
    #notification-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 3000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
    }
    .notification {
        background-color: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0;
        transform: translateY(-20px);
        animation: slideIn 0.3s forwards;
        border-left: 5px solid;
    }
    .notification.success { border-color: #4CAF50; }
    .notification.error { border-color: #f44336; }
    .notification.info { border-color: #2196F3; }
    .notification.warning { border-color: #ff9800; }

    .notification .icon {
        font-size: 1.5rem;
    }
    .notification.success .icon { color: #4CAF50; }
    .notification.error .icon { color: #f44336; }
    .notification.info .icon { color: #2196F3; }
    .notification.warning .icon { color: #ff9800; }

    .notification .message {
        flex-grow: 1;
        font-size: 0.95rem;
        color: #333;
    }
    .notification .close-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #aaa;
        transition: color 0.2s;
    }
    .notification .close-btn:hover {
        color: #555;
    }

    @keyframes slideIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Estilos para o campo de sugestão de cliente */
    .autocomplete-container {
        position: relative;
        width: 100%;
    }
    .autocomplete-suggestions {
        position: absolute;
        top: 100%; /* Abaixo do input */
        left: 0;
        right: 0;
        z-index: 100;
        border: 1px solid #ccc;
        background-color: white;
        max-height: 200px;
        overflow-y: auto;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        border-radius: 0 0 10px 10px;
    }
    .autocomplete-suggestion-item {
        padding: 10px;
        cursor: pointer;
        border-bottom: 1px solid #eee;
        transition: background-color 0.2s;
    }
    .autocomplete-suggestion-item:last-child {
        border-bottom: none;
    }
    .autocomplete-suggestion-item:hover {
        background-color: #f0f0f0;
    }
    .autocomplete-suggestion-item.active {
        background-color: #fdf6f7;
        font-weight: bold;
    }

    /* Estilos do Dashboard */
    .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    .dashboard-card {
        background: #ffe6ec; /* Cor de base dos cards */
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        text-align: center;
        border: 1px solid #ffe6ec;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 150px;
    }
    .dashboard-card h3 {
        color: #e91e63;
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 15px;
        border-bottom: none;
        padding-bottom: 0;
    }
    .dashboard-card .value {
        font-size: 2.5rem;
        font-weight: bold;
        color: #f08080;
        margin-bottom: 15px;
    }
    .dashboard-card p {
        font-size: 1.1rem;
        color: #555;
    }
    .dashboard-card.finance-summary {
        background: #fdf6f7;
        border-color: #f8bbd0;
        text-align: left;
    }
    .dashboard-card.finance-summary .value {
        font-size: 1.5rem;
        display: block;
        margin-bottom: 5px;
    }
    .dashboard-card.finance-summary p {
        font-size: 1rem;
        margin: 5px 0;
    }
    .dashboard-card.finance-summary p strong {
        color: #e91e63;
        min-width: 80px;
        display: inline-block;
    }
    .dashboard-card.finance-summary h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    .dashboard-list-card {
        grid-column: span 2; /* Ocupa duas colunas em telas maiores */
        background: #fff0f5;
        border-color: #fce4ec;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    }
    .dashboard-list-card h3 {
        color: #f08080;
        border-bottom: 1px dashed #f8bbd0;
        padding-bottom: 10px;
        margin-bottom: 15px;
        text-align: left;
    }
    .dashboard-list-card ul {
        max-height: 250px;
        overflow-y: auto;
        padding-top: 0;
        border-top: none;
    }
    .dashboard-list-card li {
        background: white;
        padding: 10px 15px;
        margin-bottom: 8px;
        border-radius: 8px;
        box-shadow: 0 1px 5px rgba(0,0,0,0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9em;
        border: 1px solid #eee;
    }
    .dashboard-list-card li strong {
        color: #e91e63;
    }
    /* Estilos específicos para itens de estoque baixo */
    .dashboard-list-card li.falta-estilo {
        background: #ffebee;
        border-color: #ef9a9a;
        color: #d32f2f;
        font-weight: bold;
    }
    .dashboard-list-card li.falta-estilo strong {
        color: #d32f2f;
    }
    .dashboard-list-card li.baixo-estilo {
        background: #fffde7;
        border-color: #ffeb3b;
        color: #fbc02d;
    }
    .dashboard-list-card li.baixo-estilo strong {
        color: #fbc02d;
    }

    @media (max-width: 768px) {
        .dashboard-grid {
            grid-template-columns: 1fr; /* Uma coluna em telas menores */
        }
        .dashboard-list-card {
            grid-column: span 1; /* Ocupa uma coluna em telas menores */
        }
    }


    /* Responsividade */
    @media (max-width: 768px) {
      body { flex-direction: column; } /* Pilha a sidebar e o conteúdo */
      .splash h1 { font-size: 3.5rem; }
      .splash button { font-size: 1.1rem; padding: 10px 20px; }
      .welcome-message { font-size: 3rem; } /* Ajuste para mobile */


      .sidebar {
        width: 0; /* Começa fechada */
        padding: 0;
        overflow: hidden; /* Esconde conteúdo */
        position: fixed; /* Fixa a sidebar na tela */
        height: 100%;
        left: 0;
        top: 0;
        transition: width 0.3s ease, padding 0.3s ease;
        border-radius: 0; /* Remove borda arredondada em mobile */
      }
      .sidebar.active {
        width: 220px; /* Abre a sidebar */
        padding: 20px 0;
      }
      .sidebar h2 { font-size: 1.8rem; }
      .sidebar nav button { font-size: 1rem; padding: 12px 15px; gap: 8px; }

      .main-content {
        width: 100%; /* Ocupa toda a largura */
        padding: 15px;
        margin-top: 60px; /* Para não ficar atrás do botão de toggle */
      }
      section { padding: 15px; margin-top: 15px; }
      input, select, button.save, .search-bar input { padding: 10px; margin-bottom: 10px; }
      li { padding: 12px; }
      li .item-actions { width: 100%; justify-content: flex-end; }
      .search-bar { padding: 10px; }

      .sidebar-toggle {
          display: block; /* Mostra o botão em mobile */
      }
      #notification-container {
        top: 15px;
        right: 15px;
        left: 15px;
        width: auto;
      }
    }

    @media (max-width: 480px) {
      .splash h1 { font-size: 2.8rem; }
      .welcome-message { font-size: 2.5rem; } /* Ajuste para telas menores ainda */
      .sidebar.active { width: 180px; } /* Sidebar um pouco menor em telas muito pequenas */
      .sidebar nav button { font-size: 0.95rem; }
      h2 { font-size: 1.3rem; }
      .main-content { padding: 10px; }
    }
  </style>
</head>
<body>

  <div class="splash" id="splash">
    <h1>Doce Sabor Caseiro</h1>
    <button onclick="App.entrar()">Entrar</button>
  </div>

  <div class="welcome-message" id="welcomeMessage">
    Seja bem-vindo(a)!
  </div>

  <button class="sidebar-toggle" id="sidebarToggle" onclick="App.toggleSidebar()">
    <i class="fas fa-bars"></i>
  </button>

  <div class="container" id="app">
    <aside class="sidebar" id="sidebar">
      <h2>Menu</h2>
      <nav>
        <button id="navClientes" onclick="App.mostrar('clientes')"><i class="fa-solid fa-users"></i> Clientes</button>
        <button id="navDashboard" onclick="App.mostrar('dashboard')"><i class="fa-solid fa-gauge-high"></i> Dashboard</button>
        <button id="navPedidos" onclick="App.mostrar('pedidos')"><i class="fa-solid fa-cookie-bite"></i> Pedidos</button>
        <button id="navProdutos" onclick="App.mostrar('produtos')"><i class="fa-solid fa-box-open"></i> Produtos</button>
        <button id="navEstoque" onclick="App.mostrar('estoque')"><i class="fa-solid fa-boxes-stacked"></i> Estoque</button>
        <button id="navDespesas" onclick="App.mostrar('despesas')"><i class="fa-solid fa-sack-dollar"></i> Despesas</button>
        <button id="navFinanceiro" onclick="App.mostrar('financeiro')"><i class="fa-solid fa-chart-line"></i> Financeiro</button>
        <button id="navAgenda" onclick="App.mostrar('agenda')"><i class="fa-solid fa-calendar-alt"></i> Agenda</button>
      </nav>
    </aside>

    <main class="main-content">
        <section id="dashboard">
            <h2>Dashboard</h2>
            <div class="dashboard-grid">
                <div class="dashboard-card finance-summary">
                    <h3>Resumo Financeiro (Mês Atual)</h3>
                    <p><strong>Ganhos:</strong> <span class="value ganhos-value" id="dashboardGanhos">R$ 0.00</span></p>
                    <p><strong>Gastos:</strong> <span class="value gastos-value" id="dashboardGastos">R$ 0.00</span></p>
                    <p><strong>Lucro:</strong> <span class="value lucros-value" id="dashboardLucro">R$ 0.00</span></p>
                </div>
                <div class="dashboard-card">
                    <h3>Total Clientes</h3>
                    <div class="value" id="totalClientes">0</div>
                    <p>Clientes cadastrados</p>
                </div>
                <div class="dashboard-card">
                    <h3>Total Produtos Finais</h3>
                    <div class="value" id="totalProdutosFinais">0</div>
                    <p>Produtos no seu catálogo</p>
                </div>
                <div class="dashboard-list-card">
                    <h3><i class="fa-solid fa-boxes-stacked"></i> Estoque Abaixo do Mínimo</h3>
                    <ul id="estoqueBaixoList">
                        </ul>
                </div>
                <div class="dashboard-list-card">
                    <h3><i class="fa-solid fa-calendar-alt"></i> Próximos Pedidos (7 Dias)</h3>
                    <ul id="proximosPedidosList">
                        </ul>
                </div>
            </div>
        </section>

        <section id="clientes" class="active">
          <h2>Cadastro de Clientes</h2>
          <input id="clienteNome" placeholder="Nome Completo" type="text" />
          <input id="clienteTelefone" placeholder="Telefone (ex: 51999998888)" type="tel" pattern="[0-9]{11}" title="Telefone com 11 dígitos (DDD + número)" />
          <input id="clienteEndereco" placeholder="Endereço Completo" type="text" />
          <button class="save" onclick="Clientes.salvarCliente()">Salvar Cliente</button>

          <h3>Clientes Cadastrados</h3>
          <div class="search-bar">
            <label for="buscaCliente">Buscar cliente por nome, telefone ou endereço:</label>
            <input id="buscaCliente" placeholder="Digite para buscar..." type="text" oninput="Clientes.listarClientes()" />
          </div>
          <ul id="listaClientes"></ul>
        </section>

        <section id="pedidos">
          <h2>Registro de Pedidos</h2>
          <div class="autocomplete-container">
            <input id="pedidoCliente" placeholder="Nome do Cliente para o Pedido" type="text" autocomplete="off" />
            <div id="clienteSuggestions" class="autocomplete-suggestions"></div>
          </div>
          <input type="hidden" id="pedidoClienteId" value="" />

          <input id="tipoProduto" placeholder="Tipo de Produto (ex: Bolo, Torta, Doce)" type="text" />
          <input id="valorPedido" type="number" step="0.01" min="0" placeholder="Valor Total (R$)" />
          <input id="dataEntrega" type="date" />
          <select id="formaEntrega">
            <option value="">Selecione a Forma de Entrega</option>
            <option value="Entregar">Entrega (Delivery)</option>
            <option value="Retirar">Retirada no Local</option>
          </select>
          <button class="save" onclick="Pedidos.salvarPedido()">Salvar Pedido</button>

          <h3>Pedidos Salvos</h3>
          <div class="search-bar">
            <label for="buscaPedido">Buscar pedido por cliente ou produto:</label>
            <input id="buscaPedido" placeholder="Digite para buscar..." type="text" oninput="Pedidos.listarPedidos()" />
          </div>
          <ul id="listaPedidos"></ul>
        </section>

        <section id="produtos">
            <h2>Cadastro de Produtos Finais</h2>
            <input id="produtoFinalNome" placeholder="Nome do Produto (ex: Bolo de Cenoura)" type="text" />
            <input id="produtoFinalPrecoVenda" type="number" step="0.01" min="0" placeholder="Preço de Venda (R$)" />
            <input id="produtoFinalCustoProducao" type="number" step="0.01" min="0" placeholder="Custo de Produção (R$) - Preenchido Automaticamente" readonly />

            <div style="background:#fefefe; padding:15px; border-radius:10px; margin-bottom:15px; border:1px solid #eee;">
                <h4>Ingredientes do Produto</h4>
                <div style="display:flex; gap:10px; margin-bottom:10px;">
                    <select id="ingredienteSelect" style="flex:2;">
                        <option value="">Selecione um Ingrediente/Item de Estoque</option>
                        </select>
                    <input type="number" id="ingredienteQuantidade" min="0" placeholder="Qtd. Usada" style="flex:1;" />
                    <button onclick="Produtos.adicionarIngredienteAoProdutoTemp()" style="background:#4CAF50; color:white; border:none; border-radius:8px; padding:10px 15px; cursor:pointer;"><i class="fa-solid fa-plus"></i></button>
                </div>
                <ul id="listaIngredientesProduto">
                    <li class="empty-list-message">Nenhum ingrediente adicionado a este produto ainda.</li>
                </ul>
            </div>

            <button class="save" onclick="Produtos.salvarProdutoFinal()">Salvar Produto</button>

            <h3>Produtos Cadastrados</h3>
            <div class="search-bar">
                <label for="buscaProdutoFinal">Buscar produto final por nome:</label>
                <input id="buscaProdutoFinal" placeholder="Digite para buscar..." type="text" oninput="Produtos.listarProdutosFinais()" />
            </div>
            <ul id="listaProdutosFinais"></ul>
        </section>

        <section id="estoque">
          <h2>Controle de Estoque (Ingredientes e Embalagens)</h2>
          <input id="produtoNome" placeholder="Nome do Ingrediente/Embalagem" type="text" />
          <select id="produtoTipo">
            <option value="">Selecione o Tipo</option>
            <option value="Ingrediente">Ingrediente</option>
            <option value="Embalagem">Embalagem</option>
          </select>
          <input id="produtoQtd" type="number" min="0" placeholder="Quantidade em Estoque" />
          <input id="produtoMin" type="number" min="0" placeholder="Quantidade Mínima Ideal" />
          <input id="produtoCustoUnitario" type="number" step="0.01" min="0" placeholder="Custo Unitário (R$)" />
          <input id="produtoValidade" type="date" />
          <button class="save" onclick="Estoque.adicionarProduto()">Adicionar/Atualizar Item de Estoque</button>

          <h3>Itens em Estoque</h3>
          <div class="search-bar">
            <label for="buscaProdutoEstoque">Buscar item de estoque por nome:</label>
            <input id="buscaProdutoEstoque" placeholder="Digite para buscar..." type="text" oninput="Estoque.listarProdutos()" />
          </div>
          <select id="filtroTipoEstoque" onchange="Estoque.listarProdutos()" style="margin-bottom:20px;">
            <option value="">Filtrar por Tipo (Todos)</option>
            <option value="Ingrediente">Ingrediente</option>
            <option value="Embalagem">Embalagem</option>
          </select>
          <ul id="listaEstoque"></ul>

          <h3>Histórico de Movimentações</h3>
          <ul id="listaHistorico" class="historico"></ul>
        </section>

        <section id="despesas">
          <h2>Registro de Despesas</h2>

          <div style="background:#fff0f5; padding:20px; border-radius:15px; margin-bottom:20px; box-shadow:0 1px 6px rgba(0,0,0,0.05);">
            <label for="categoriaDespesa" style="display:block; margin-bottom:8px; font-weight:600; color:#e91e63;">Categoria:</label>
            <select id="categoriaDespesa" style="margin-bottom:12px;">
              <option value="">Selecione a Categoria</option>
              <option>Mercadorias</option>
              <option>Loja</option>
              <option>Pessoais</option>
              <option>Marketing</option>
              <option>Manutenção</option>
              <option>Outros</option>
            </select>

            <label for="descricaoDespesa" style="display:block; margin-bottom:8px; font-weight:600; color:#e91e63;">Descrição da Despesa:</label>
            <input type="text" id="descricaoDespesa" placeholder="Ex: Farinha de trigo, Aluguel, Propaganda..." />

            <label for="dataDespesa" style="display:block; margin-bottom:8px; font-weight:600; color:#e91e63;">Data da Despesa:</label>
            <input type="date" id="dataDespesa" />

            <label for="valorDespesa" style="display:block; margin-bottom:8px; font-weight:600; color:#e91e63;">Valor (R$):</label>
            <input type="number" step="0.01" min="0" id="valorDespesa" placeholder="0.00" />

            <button class="save" onclick="Despesas.salvarDespesa()">Salvar Despesa</button>
          </div>

          <h3>Despesas Registradas</h3>
          <div class="search-bar">
            <label for="buscaDescricaoDespesa">Buscar despesas por descrição:</label>
            <input
              type="text"
              id="buscaDescricaoDespesa"
              placeholder="Digite para buscar..."
              oninput="Despesas.filtrarDespesas()"
            />
          </div>

          <ul id="listaDespesas"></ul>
        </section>

        <section id="financeiro">
          <h2>Visão Financeira</h2>
          <div class="financeiro-filters">
            <select id="filtroMesFinanceiro" onchange="Financeiro.atualizarFinanceiro()">
              <option value="">Todos os Meses</option>
              <option value="01">Janeiro</option><option value="02">Fevereiro</option>
              <option value="03">Março</option><option value="04">Abril</option>
              <option value="05">Maio</option><option value="06">Junho</option>
              <option value="07">Julho</option><option value="08">Agosto</option>
              <option value="09">Setembro</option><option value="10">Outubro</option>
              <option value="11">Novembro</option><option value="12">Dezembro</option>
            </select>
            <select id="filtroAnoFinanceiro" onchange="Financeiro.atualizarFinanceiro()">
              <option value="">Todos os Anos</option>
              </select>
          </div>

          <div class="info-card">
            <p>
              <strong>Ganhos Totais:</strong> <span class="value ganhos-value" id="ganhos">0.00</span>
            </p>
            <p>
              <strong>Gastos Totais:</strong> <span class="value gastos-value" id="gastos">0.00</span>
            </p>
            <p>
              <strong>Lucro/Prejuízo:</strong> <span class="value lucros-value" id="lucros">0.00</span>
            </p>
          </div>

          <button class="financeiro-detail-toggle" onclick="Financeiro.toggleDetalhesFinanceiros('ganhos')">
            <i class="fa-solid fa-circle-plus"></i> Detalhes dos Ganhos
          </button>
          <div id="detalhesGanhos" class="financeiro-list-container">
            <h4>Ganhos por Pedido</h4>
            <ul id="listaGanhosDetalhes"></ul>
          </div>

          <button class="financeiro-detail-toggle" onclick="Financeiro.toggleDetalhesFinanceiros('gastos')">
            <i class="fa-solid fa-circle-minus"></i> Detalhes dos Gastos
          </button>
          <div id="detalhesGastos" class="financeiro-list-container">
            <h4>Gastos por Despesa</h4>
            <ul id="listaGastosDetalhes"></ul>
          </div>

          <h3>Relatórios Rápidos</h3>
          <div style="background:#fefefe; padding:15px; border-radius:10px; margin-bottom:15px; border:1px solid #eee;">
                <h4>Top Clientes (por valor de pedido)</h4>
                <ul id="topClientesList"></ul>
                <h4>Top Produtos (por quantidade vendida)</h4>
                <ul id="topProdutosList"></ul>
            </div>
        </section>

        <section id="agenda">
            <h2>Agenda de Clientes e Histórico</h2>

            <div class="client-list-view" id="agendaClientListView">
                <h3>Clientes Cadastrados</h3>
                <div class="search-bar">
                    <label for="buscaClienteAgenda">Buscar cliente na agenda:</label>
                    <input id="buscaClienteAgenda" placeholder="Digite para buscar..." type="text" oninput="Agenda.listarClientesNaAgenda()" />
                </div>
                <ul id="listaClientesAgenda">
                    </ul>
            </div>

            <div class="client-details-view" id="agendaClientDetailsView">
                <button class="back-button" onclick="Agenda.voltarParaListaClientes()">
                    <i class="fa-solid fa-arrow-left"></i> Voltar para a lista
                </button>
                <div class="client-detail-card">
                    <h3 id="agendaDetalheClienteNome"></h3>
                    <p><strong>Telefone:</strong> <span id="agendaDetalheClienteTelefone"></span></p>
                    <p><strong>Endereço:</strong> <span id="agendaDetalheClienteEndereco"></span></p>
                </div>

                <h3>Histórico de Pedidos</h3>
                <ul id="listaPedidosCliente" class="pedido-history-list">
                    </ul>
            </div>
        </section>
    </main>
  </div>

  <div id="notification-container"></div>

  <script>
    // --- UTILS: Funções genéricas para LocalStorage, validação, etc. ---
    const Utils = {
        // Obtém dados do localStorage
        getStorage: (key) => {
            try {
                return JSON.parse(localStorage.getItem(key) || '[]');
            } catch (e) {
                console.error(`Erro ao parsear dados do LocalStorage para a chave '${key}':`, e);
                return [];
            }
        },

        // Salva dados no localStorage
        setStorage: (key, data) => {
            try {
                localStorage.setItem(key, JSON.stringify(data));
            } catch (e) {
                console.error(`Erro ao salvar dados no LocalStorage para a chave '${key}':`, e);
            }
        },

        // Limpa campos de formulário
        clearForm: (...inputIds) => {
            inputIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    if (element.tagName === 'SELECT') {
                        element.value = ''; // Reseta selects
                    } else if (element.type === 'number' || element.type === 'text' || element.type === 'tel' || element.type === 'date' || element.type === 'hidden') {
                        element.value = ''; // Limpa inputs
                    }
                }
            });
        },

        // Valida um input de telefone (11 dígitos numéricos)
        validatePhone: (phone) => {
            return /^\d{11}$/.test(phone);
        },

        // Formata data para exibição (DD/MM/YYYY)
        formatDate: (dateString) => {
            if (!dateString) return 'Data Indefinida';
            try {
                // Adiciona 'T00:00:00' para garantir que a data seja interpretada como local e evitar problemas de fuso horário
                return new Date(dateString + 'T00:00:00').toLocaleDateString('pt-BR');
            } catch (e) {
                console.error('Erro ao formatar data:', dateString, e);
                return 'Data Inválida';
            }
        },

        // Cria elemento <li> para listas genéricas
        createListItem: (itemDetailsHtml, actionsHtml) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="item-details">${itemDetailsHtml}</span>
                <div class="item-actions">${actionsHtml}</div>
            `;
            return li;
        },

        // Função genérica para editar um item.
        editItem: async (key, originalId, formFields, listFunction, itemToDisplay, customPrepareEdit = null) => {
            const confirmation = await Notificacao.confirm(`Você está prestes a editar este item:\n\n${itemToDisplay(Utils.getStorage(key)[originalId])}\n\nOs campos de cadastro acima serão preenchidos com os dados atuais. Por favor, faça suas alterações e CLIQUE EM "SALVAR" novamente para confirmar a edição. O item original será removido ao confirmar.`);

            if (confirmation) {
                let items = Utils.getStorage(key);
                const item = items[originalId];

                // Preenche os campos do formulário com os dados do item selecionado
                formFields.forEach(field => {
                    const inputElement = document.getElementById(field.id);
                    if (inputElement) {
                        if (field.type === 'date') {
                            inputElement.value = item[field.name] ? item[field.name].split('T')[0] : '';
                        } else if (field.type === 'number') {
                            inputElement.value = item[field.name] !== undefined ? parseFloat(item[field.name]) : '';
                        } else {
                            inputElement.value = item[field.name] || '';
                        }
                    }
                });

                // Se houver uma função customizada de preparação para edição (ex: para ingredientes do produto)
                if (customPrepareEdit && typeof customPrepareEdit === 'function') {
                    customPrepareEdit(item);
                }

                // Remove o item original da lista, ele será recadastrado com as alterações
                items.splice(originalId, 1);
                Utils.setStorage(key, items);
                listFunction(); // Atualiza a lista para refletir a remoção (temporária) do item original
                Notificacao.show('info', 'Item pronto para edição nos campos acima. Altere o que for necessário e clique em "Salvar" novamente para efetivar a mudança.');
            } else {
                Notificacao.show('info', 'Edição cancelada. O item original não foi alterado.');
                Utils.clearForm(...formFields.map(f => f.id)); // Limpa os campos se cancelar a edição
                if (customPrepareEdit) { // Limpa também estados temporários de edição
                    customPrepareEdit(null); // Passa null para indicar que deve limpar
                }
                listFunction(); // Recarrega a lista para mostrar o item original
            }
        },

        // Função genérica para excluir um item.
        deleteItem: async (key, originalId, listFunction, itemToDisplay, onCompleteCallback = null) => {
            let items = Utils.getStorage(key);
            const item = items[originalId];

            if (!item) {
                Notificacao.show('error', 'Erro: Item não encontrado para exclusão.');
                return;
            }

            const confirmation = await Notificacao.confirm(`Tem certeza que deseja excluir o seguinte item?\n\n${itemToDisplay(item)}`);

            if (confirmation) {
                items.splice(originalId, 1);
                Utils.setStorage(key, items);
                listFunction(); // Atualiza a UI
                if (onCompleteCallback && typeof onCompleteCallback === 'function') {
                    onCompleteCallback(); // Executa callback após exclusão (ex: atualizar financeiro)
                }
                Notificacao.show('success', 'Item excluído com sucesso!');
            } else {
                Notificacao.show('info', 'Exclusão cancelada.');
            }
        },

        // Gera um ID único simples
        generateId: () => {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    };

    // --- NOTIFICAÇÃO: Exibe mensagens personalizadas ---
    const Notificacao = {
        container: document.getElementById('notification-container'),

        show: (type, message, duration = 4000) => {
            const notification = document.createElement('div');
            notification.classList.add('notification', type);

            let iconClass = '';
            switch (type) {
                case 'success': iconClass = 'fa-solid fa-check-circle'; break;
                case 'error': iconClass = 'fa-solid fa-times-circle'; break;
                case 'info': iconClass = 'fa-solid fa-info-circle'; break;
                case 'warning': iconClass = 'fa-solid fa-exclamation-triangle'; break;
            }

            notification.innerHTML = `
                <i class="icon ${iconClass}"></i>
                <span class="message">${message}</span>
                <button class="close-btn" onclick="this.parentNode.remove()"><i class="fa-solid fa-xmark"></i></button>
            `;

            Notificacao.container.appendChild(notification);

            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(-20px)';
                notification.addEventListener('transitionend', () => notification.remove());
            }, duration);
        },

        // Exibe um modal de confirmação personalizado
        confirm: (message) => {
            return new Promise((resolve) => {
                const modalOverlay = document.createElement('div');
                modalOverlay.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;
                    z-index: 4000;
                `;

                const modalContent = document.createElement('div');
                modalContent.style.cssText = `
                    background: white; padding: 25px; border-radius: 12px;
                    box-shadow: 0 5px 25px rgba(0,0,0,0.2); max-width: 400px; text-align: center;
                    font-size: 1.1rem; color: #333;
                `;
                modalContent.innerHTML = `
                    <p style="margin-bottom: 25px; white-space: pre-wrap;">${message}</p>
                    <button id="confirmYes" style="background:#4CAF50; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; margin-right:15px;">Sim</button>
                    <button id="confirmNo" style="background:#f44336; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer;">Não</button>
                `;

                modalOverlay.appendChild(modalContent);
                document.body.appendChild(modalOverlay);

                document.getElementById('confirmYes').onclick = () => {
                    modalOverlay.remove();
                    resolve(true);
                };
                document.getElementById('confirmNo').onclick = () => {
                    modalOverlay.remove();
                    resolve(false);
                };
            });
        }
    };

    // --- APP: Gerencia a interface principal (splash, navegação) ---
    const App = {
        entrar: () => {
            const splash = document.getElementById('splash');
            const welcomeMessage = document.getElementById('welcomeMessage');
            const app = document.getElementById('app');

            splash.classList.add('fade-out'); // Inicia o fade-out da splash screen

            setTimeout(() => {
                splash.style.display = 'none'; // Esconde a splash screen completamente
                welcomeMessage.classList.add('active'); // Mostra a mensagem de boas-vindas
            }, 900); // Tempo para o fade-out da splash

            setTimeout(() => {
                welcomeMessage.classList.add('fade-out-welcome'); // Inicia o fade-out da mensagem de boas-vindas
            }, 2500); // Tempo de exibição da mensagem de boas-vindas

            setTimeout(() => {
                welcomeMessage.style.display = 'none'; // Esconde a mensagem de boas-vindas completamente
                app.style.display = 'flex'; // Mostra o app principal
                Financeiro.preencherFiltrosAno(); // Preenche filtros de ano ao carregar
                App.atualizarTudo(); // Inicia o app no módulo Clientes
            }, 3300); // Tempo total para o fade-out da mensagem de boas-vindas
        },

        toggleSidebar: () => {
            document.getElementById('sidebar').classList.toggle('active');
        },

        mostrar: (secaoId) => {
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('active');
            }

            document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.sidebar nav button').forEach(b => b.classList.remove('active'));

            document.getElementById(secaoId).classList.add('active');
            document.getElementById(`nav${secaoId.charAt(0).toUpperCase() + secaoId.slice(1)}`).classList.add('active');

            // Chama o método de listagem/inicialização do módulo correspondente
            switch (secaoId) {
                case 'dashboard':
                    Dashboard.atualizarDashboard();
                    break;
                case 'clientes':
                    Clientes.listarClientes();
                    break;
                case 'pedidos':
                    Pedidos.resetarCampos(); // Limpa e prepara os campos de pedido
                    Pedidos.listarPedidos();
                    break;
                case 'produtos':
                    Produtos.carregarIngredientesParaSelect();
                    Produtos.listarProdutosFinais();
                    // Garante que a lista temporária esteja limpa ao mudar para Produtos
                    Produtos.ingredientesTemporarios = [];
                    Produtos.renderizarIngredientesTemporarios(); // Renderiza a lista temporária vazia
                    Produtos.atualizarCustoProducaoProdutoFinal(); // Limpa ou atualiza o custo de produção
                    break;
                case 'despesas':
                    Despesas.filtrarDespesas();
                    break;
                case 'estoque':
                    Estoque.listarProdutos();
                    Estoque.listarHistorico();
                    break;
                case 'financeiro':
                    Financeiro.atualizarFinanceiro();
                    document.getElementById('detalhesGanhos').classList.remove('active');
                    document.getElementById('detalhesGastos').classList.remove('active');
                    Financeiro.gerarRelatoriosRapidos(); // Gera os relatórios
                    break;
                case 'agenda':
                    Agenda.listarClientesNaAgenda();
                    Agenda.voltarParaListaClientes(); // Garante que a lista de clientes esteja visível
                    break;
            }
        },

        atualizarTudo: () => {
            // Define a seção inicial ao carregar o app: Clientes
            App.mostrar('clientes');
        }
    };

    // --- MÓDULO DASHBOARD ---
    const Dashboard = {
        dashboardGanhosSpan: document.getElementById('dashboardGanhos'),
        dashboardGastosSpan: document.getElementById('dashboardGastos'),
        dashboardLucroSpan: document.getElementById('dashboardLucro'),
        totalClientesDiv: document.getElementById('totalClientes'),
        totalProdutosFinaisDiv: document.getElementById('totalProdutosFinais'),
        estoqueBaixoList: document.getElementById('estoqueBaixoList'),
        proximosPedidosList: document.getElementById('proximosPedidosList'),

        atualizarDashboard: () => {
            Dashboard.atualizarResumoFinanceiro();
            Dashboard.atualizarContadores();
            Dashboard.listarEstoqueBaixo();
            Dashboard.listarProximosPedidos();
        },

        atualizarResumoFinanceiro: () => {
            const pedidos = Utils.getStorage('pedidos');
            const despesas = Utils.getStorage('despesas');

            const hoje = new Date();
            const mesAtual = (hoje.getMonth() + 1).toString().padStart(2, '0');
            const anoAtual = hoje.getFullYear().toString();

            const pedidosMesAtual = pedidos.filter(p => {
                if (!p.data) return false;
                const pedidoDate = new Date(p.data + 'T00:00:00');
                const pedidoMonth = (pedidoDate.getMonth() + 1).toString().padStart(2, '0');
                const pedidoYear = pedidoDate.getFullYear().toString();
                return pedidoMonth === mesAtual && pedidoYear === anoAtual;
            });

            const despesasMesAtual = despesas.filter(d => {
                if (!d.data) return false;
                const despesaDate = new Date(d.data + 'T00:00:00');
                const despesaMonth = (despesaDate.getMonth() + 1).toString().padStart(2, '0');
                const despesaYear = despesaDate.getFullYear().toString();
                return despesaMonth === mesAtual && despesaYear === anoAtual;
            });

            const ganhos = pedidosMesAtual.reduce((s, p) => s + p.valor, 0);
            const gastos = despesasMesAtual.reduce((s, d) => s + d.valor, 0);
            const lucro = ganhos - gastos;

            Dashboard.dashboardGanhosSpan.textContent = `R$ ${ganhos.toFixed(2)}`;
            Dashboard.dashboardGastosSpan.textContent = `R$ ${gastos.toFixed(2)}`;
            Dashboard.dashboardLucroSpan.textContent = `R$ ${lucro.toFixed(2)}`;
        },

        atualizarContadores: () => {
            const clientes = Utils.getStorage('clientes');
            const produtosFinais = Utils.getStorage('produtosFinais');

            Dashboard.totalClientesDiv.textContent = clientes.length;
            Dashboard.totalProdutosFinaisDiv.textContent = produtosFinais.length;
        },

        listarEstoqueBaixo: () => {
            Dashboard.estoqueBaixoList.innerHTML = '';
            const estoque = Utils.getStorage('estoque');

            const itensBaixo = estoque.filter(item => item.qtd < item.min);

            if (itensBaixo.length === 0) {
                Dashboard.estoqueBaixoList.innerHTML = '<li class="empty-list-message">Nenhum item com estoque abaixo do mínimo.</li>';
                return;
            }

            // Ordena os itens com menor quantidade primeiro
            itensBaixo.sort((a, b) => a.qtd - b.qtd);

            itensBaixo.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>
                        <strong>${item.nome}</strong> (${item.tipo})<br>
                        Qtd: ${item.qtd} (Mínimo: ${item.min})
                    </span>
                `;
                if (item.qtd === 0) li.classList.add('falta-estilo');
                else if (item.qtd < item.min) li.classList.add('baixo-estilo');
                Dashboard.estoqueBaixoList.appendChild(li);
            });
        },

        listarProximosPedidos: () => {
            Dashboard.proximosPedidosList.innerHTML = '';
            const pedidos = Utils.getStorage('pedidos');
            const hoje = new Date();
            // Ajusta 'hoje' para o início do dia para comparação
            hoje.setHours(0, 0, 0, 0);

            const seteDias = new Date();
            seteDias.setDate(hoje.getDate() + 7);
            // Ajusta 'seteDias' para o final do dia para comparação
            seteDias.setHours(23, 59, 59, 999);


            const proximosPedidos = pedidos.filter(p => {
                if (!p.data) return false;
                const dataEntrega = new Date(p.data + 'T00:00:00'); // Garante que a data seja interpretada sem fuso horário
                // Considera pedidos de hoje até os próximos 7 dias
                return dataEntrega >= hoje && dataEntrega <= seteDias;
            });

            if (proximosPedidos.length === 0) {
                Dashboard.proximosPedidosList.innerHTML = '<li class="empty-list-message">Nenhum pedido agendado para os próximos 7 dias.</li>';
                return;
            }

            // Ordena por data de entrega mais próxima
            proximosPedidos.sort((a, b) => new Date(a.data + 'T00:00:00') - new Date(b.data + 'T00:00:00'));

            proximosPedidos.forEach(p => {
                const dataFormatada = Utils.formatDate(p.data);
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>
                        <strong>${p.produto}</strong> para ${p.nomeCliente}<br>
                        Entrega: ${dataFormatada} (${p.entrega})
                    </span>
                `;
                Dashboard.proximosPedidosList.appendChild(li);
            });
        }
    };

    // --- MÓDULO CLIENTES ---
    const Clientes = {
        formFields: [
            {id:'clienteNome', name:'nome', type:'text'},
            {id:'clienteTelefone', name:'telefone', type:'tel'},
            {id:'clienteEndereco', name:'endereco', type:'text'}
        ],
        listElement: document.getElementById('listaClientes'),
        buscaInput: document.getElementById('buscaCliente'),
        nomeInput: document.getElementById('clienteNome'),
        telefoneInput: document.getElementById('clienteTelefone'),
        enderecoInput: document.getElementById('clienteEndereco'),

        salvarCliente: () => {
            const nome = Clientes.nomeInput.value.trim();
            const telefone = Clientes.telefoneInput.value.trim();
            const endereco = Clientes.enderecoInput.value.trim();

            if (!nome || !telefone || !endereco) {
                return Notificacao.show('warning', 'Por favor, preencha todos os campos do cliente (Nome, Telefone, Endereço).');
            }
            if (!Utils.validatePhone(telefone)) {
                return Notificacao.show('warning', 'Telefone inválido! Digite 11 dígitos, incluindo o DDD (ex: 51999998888).');
            }

            const clientes = Utils.getStorage('clientes');
            // Verifica se o cliente já existe para evitar duplicatas exatas ao salvar
            const clienteExistente = clientes.find(c => c.nome.toLowerCase() === nome.toLowerCase() && c.telefone === telefone);
            if (clienteExistente) {
                // Se o cliente já existe e os dados são exatamente os mesmos, notifica e não salva novamente.
                // Se for uma edição, o item original já foi removido por `Utils.editItem`, então o novo será salvo.
                // Esta verificação é para prevenir duplicação acidental ao CLICAR SALVAR sem ter usado "Editar"
                // ou ao salvar um cliente idêntico que já está na lista.
                if (confirm('Este cliente parece já existir. Deseja realmente salvar um novo com os mesmos dados?')) {
                     // Continua e adiciona
                } else {
                    Notificacao.show('info', 'Operação cancelada.');
                    Utils.clearForm('clienteNome', 'clienteTelefone', 'clienteEndereco');
                    return;
                }
            }


            clientes.push({ id: Utils.generateId(), nome, telefone, endereco }); // Adiciona um ID único
            Utils.setStorage('clientes', clientes);

            Utils.clearForm('clienteNome', 'clienteTelefone', 'clienteEndereco');
            Clientes.listarClientes();
            Dashboard.atualizarContadores(); // Atualiza o contador de clientes no dashboard
            Notificacao.show('success', 'Cliente salvo com sucesso!');
        },

        listarClientes: () => {
            const termoBusca = Clientes.buscaInput.value.toLowerCase();
            Clientes.listElement.innerHTML = '';
            const clientes = Utils.getStorage('clientes');

            // Filtra os clientes
            const clientesFiltrados = clientes.filter(c =>
                c.nome.toLowerCase().includes(termoBusca) ||
                c.telefone.toLowerCase().includes(termoBusca) ||
                c.endereco.toLowerCase().includes(termoBusca)
            );

            if (clientes.length === 0) { // Se não há NENHUM cliente cadastrado
                Clientes.listElement.innerHTML = '<li class="empty-list-message">Nenhum cliente cadastrado ainda.</li>';
                return;
            }

            if (clientesFiltrados.length === 0 && termoBusca !== '') { // Se há clientes, mas NENHUM corresponde à busca
                Clientes.listElement.innerHTML = `<li class="empty-list-message">Nenhum cliente encontrado com "${termoBusca}".</li>`;
                return;
            }
            // A condição abaixo é redundante com a primeira, mas mantida para clareza
            if (clientesFiltrados.length === 0 && termoBusca === '') {
                 Clientes.listElement.innerHTML = '<li class="empty-list-message">Nenhum cliente cadastrado ainda.</li>';
                 return;
            }


            clientesFiltrados.forEach((cliente, index) => { // Use o index para o Utils.editItem/deleteItem
                const itemText = `<strong>${cliente.nome}</strong><br>Tel: ${cliente.telefone}<br>End: ${cliente.endereco}`;
                const actionsHtml = `
                    <button class="edit" onclick="Utils.editItem('clientes', ${index}, Clientes.formFields, Clientes.listarClientes, (item) => \`Nome: ${item.nome}, Tel: ${item.telefone}\`)">
                        <i class="fa-solid fa-pen"></i> Editar
                    </button>
                    <button class="delete" onclick="Utils.deleteItem('clientes', ${index}, Clientes.listarClientes, (item) => \`Nome: ${item.nome}\`, Dashboard.atualizarContadores)">
                        <i class="fa-solid fa-trash"></i> Excluir
                    </button>
                `;
                Clientes.listElement.appendChild(Utils.createListItem(itemText, actionsHtml));
            });
        }
    };

    // --- MÓDULO PEDIDOS ---
    const Pedidos = {
        formFields: [
            {id:'pedidoCliente', name:'nomeCliente', type:'text'}, // Usamos nomeCliente para o campo de input
            {id:'pedidoClienteId', name:'clienteId', type:'hidden'}, // ID do cliente
            {id:'tipoProduto', name:'produto', type:'text'},
            {id:'valorPedido', name:'valor', type:'number'},
            {id:'dataEntrega', name:'data', type:'date'},
            {id:'formaEntrega', name:'entrega', type:'select'}
        ],
        listElement: document.getElementById('listaPedidos'),
        clienteInput: document.getElementById('pedidoCliente'),
        clienteIdInput: document.getElementById('pedidoClienteId'),
        produtoInput: document.getElementById('tipoProduto'),
        valorInput: document.getElementById('valorPedido'),
        dataInput: document.getElementById('dataEntrega'),
        formaEntregaSelect: document.getElementById('formaEntrega'),
        buscaInput: document.getElementById('buscaPedido'),
        suggestionsContainer: document.getElementById('clienteSuggestions'),

        // Adiciona um evento de input para o campo de cliente
        init: () => {
            Pedidos.clienteInput.addEventListener('input', Pedidos.handleClienteInput);
            Pedidos.clienteInput.addEventListener('blur', () => { // Esconde sugestões ao sair do foco
                setTimeout(() => Pedidos.suggestionsContainer.style.display = 'none', 100);
            });
            Pedidos.clienteInput.addEventListener('focus', Pedidos.handleClienteInput); // Mostra ao focar
            Pedidos.clienteInput.addEventListener('keydown', Pedidos.handleKeyDown); // Para navegação com teclado
        },

        handleClienteInput: () => {
            const termo = Pedidos.clienteInput.value.toLowerCase();
            Pedidos.suggestionsContainer.innerHTML = '';
            Pedidos.suggestionsContainer.style.display = 'none'; // Esconde por padrão

            // Limpa o ID do cliente se o texto for alterado
            Pedidos.clienteIdInput.value = '';

            if (termo.length < 2) return; // Começa a sugerir com 2 ou mais caracteres

            const clientes = Utils.getStorage('clientes');
            const sugestoes = clientes.filter(c =>
                c.nome.toLowerCase().includes(termo) ||
                c.telefone.includes(termo)
            );

            if (sugestoes.length > 0) {
                Pedidos.suggestionsContainer.style.display = 'block';
                sugestoes.forEach((cliente, index) => {
                    const div = document.createElement('div');
                    div.classList.add('autocomplete-suggestion-item');
                    div.textContent = `${cliente.nome} (${cliente.telefone})`;
                    div.dataset.clienteId = cliente.id;
                    div.dataset.clienteNome = cliente.nome;
                    div.addEventListener('click', () => Pedidos.selectCliente(cliente.nome, cliente.id));
                    Pedidos.suggestionsContainer.appendChild(div);
                });
            }
        },

        handleKeyDown: (e) => {
            const items = Array.from(Pedidos.suggestionsContainer.children);
            if (items.length === 0) return;

            let activeItem = Pedidos.suggestionsContainer.querySelector('.active');
            let activeIndex = activeItem ? items.indexOf(activeItem) : -1;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (activeItem) activeItem.classList.remove('active');
                activeIndex = (activeIndex + 1) % items.length;
                items[activeIndex].classList.add('active');
                items[activeIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (activeItem) activeItem.classList.remove('active');
                activeIndex = (activeIndex - 1 + items.length) % items.length;
                items[activeIndex].classList.add('active');
                items[activeIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (activeItem) {
                    activeItem.click();
                } else if (items.length === 1) { // Se houver apenas 1 sugestão, seleciona ela
                    items[0].click();
                }
            }
        },

        selectCliente: (nome, id) => {
            Pedidos.clienteInput.value = nome;
            Pedidos.clienteIdInput.value = id;
            Pedidos.suggestionsContainer.innerHTML = '';
            Pedidos.suggestionsContainer.style.display = 'none';
        },

        resetarCampos: () => {
            Utils.clearForm('pedidoCliente', 'pedidoClienteId', 'tipoProduto', 'valorPedido', 'dataEntrega', 'formaEntrega');
            Pedidos.suggestionsContainer.innerHTML = '';
            Pedidos.suggestionsContainer.style.display = 'none';
        },

        salvarPedido: () => {
            const nomeCliente = Pedidos.clienteInput.value.trim();
            const clienteId = Pedidos.clienteIdInput.value; // Pega o ID do cliente selecionado
            const tipoProduto = Pedidos.produtoInput.value.trim();
            const valor = parseFloat(Pedidos.valorInput.value);
            const data = Pedidos.dataInput.value;
            const formaEntrega = Pedidos.formaEntregaSelect.value;

            // Validação do cliente selecionado
            if (!clienteId || !nomeCliente) {
                return Notificacao.show('warning', 'Por favor, selecione um cliente da lista de sugestões. Se o cliente não existe, cadastre-o primeiro.');
            }

            if (!tipoProduto || isNaN(valor) || valor <= 0 || !data || !formaEntrega) {
                return Notificacao.show('warning', 'Por favor, preencha todos os campos do pedido corretamente (Valor deve ser positivo).');
            }

            const pedidos = Utils.getStorage('pedidos');
            pedidos.push({ id: Utils.generateId(), clienteId, nomeCliente, produto: tipoProduto, valor, data, entrega: formaEntrega });
            Utils.setStorage('pedidos', pedidos);

            Pedidos.resetarCampos();
            Pedidos.listarPedidos();
            Financeiro.atualizarFinanceiro();
            Dashboard.atualizarDashboard(); // Atualiza o dashboard
            Notificacao.show('success', 'Pedido salvo com sucesso!');
        },

        listarPedidos: () => {
            const termoBusca = Pedidos.buscaInput.value.toLowerCase();
            Pedidos.listElement.innerHTML = '';
            const pedidos = Utils.getStorage('pedidos');

            // Filtra os pedidos
            const pedidosFiltrados = pedidos.filter(p =>
                p.nomeCliente.toLowerCase().includes(termoBusca) || // Agora busca por nomeCliente
                p.produto.toLowerCase().includes(termoBusca)
            );

            if (pedidos.length === 0) {
                Pedidos.listElement.innerHTML = '<li class="empty-list-message">Nenhum pedido cadastrado ainda.</li>';
                return;
            }

            if (pedidosFiltrados.length === 0 && termoBusca !== '') {
                Pedidos.listElement.innerHTML = `<li class="empty-list-message">Nenhum pedido encontrado com "${termoBusca}".</li>`;
                return;
            }
             if (pedidosFiltrados.length === 0 && termoBusca === '') {
                 Pedidos.listElement.innerHTML = '<li class="empty-list-message">Nenhum pedido cadastrado ainda.</li>';
                 return;
            }


            pedidosFiltrados.sort((a, b) => new Date(b.data + 'T00:00:00') - new Date(a.data + 'T00:00:00'));

            pedidosFiltrados.forEach((p, index) => { // Use index para Utils.editItem/deleteItem
                const dataFormatada = Utils.formatDate(p.data);
                const itemText = `<strong>${p.nomeCliente}</strong> - ${p.produto}<br>Valor: R$ ${p.valor.toFixed(2)}<br>Entrega: ${p.entrega} em ${dataFormatada}`;
                const actionsHtml = `
                    <button class="edit" onclick="Utils.editItem('pedidos', ${index}, Pedidos.formFields, Pedidos.listarPedidos, (item) => \`Cliente: ${item.nomeCliente}, Produto: ${item.produto}, Valor: R$${item.valor.toFixed(2)}\`, Pedidos.prepareEdit)">
                        <i class="fa-solid fa-pen"></i> Editar
                    </button>
                    <button class="delete" onclick="Utils.deleteItem('pedidos', ${index}, Pedidos.listarPedidos, (item) => \`Cliente: ${item.nomeCliente}, Produto: ${item.produto}\`, () => { Financeiro.atualizarFinanceiro(); Dashboard.atualizarDashboard(); })">
                        <i class="fa-solid fa-trash"></i> Excluir
                    </button>
                `;
                Pedidos.listElement.appendChild(Utils.createListItem(itemText, actionsHtml));
            });
        },

        // Função para preparar os campos de edição de pedido
        prepareEdit: (item) => {
            if (item) {
                // Preenche o campo de cliente e o ID oculto
                Pedidos.clienteInput.value = item.nomeCliente;
                Pedidos.clienteIdInput.value = item.clienteId;
            } else {
                // Limpa se a edição for cancelada
                Pedidos.resetarCampos();
            }
        }
    };

    // --- MÓDULO PRODUTOS (PRODUTOS FINAIS) ---
    const Produtos = {
        formFields: [
            {id:'produtoFinalNome', name:'nome', type:'text'},
            {id:'produtoFinalPrecoVenda', name:'precoVenda', type:'number'},
            {id:'produtoFinalCustoProducao', name:'custoProducao', type:'number', readonly: true} // Custo será automático
            // Ingredientes serão tratados separadamente
        ],
        listElement: document.getElementById('listaProdutosFinais'),
        nomeInput: document.getElementById('produtoFinalNome'),
        precoVendaInput: document.getElementById('produtoFinalPrecoVenda'),
        custoProducaoInput: document.getElementById('produtoFinalCustoProducao'),
        ingredienteSelect: document.getElementById('ingredienteSelect'),
        ingredienteQuantidadeInput: document.getElementById('ingredienteQuantidade'),
        listaIngredientesProdutoUl: document.getElementById('listaIngredientesProduto'),
        buscaInput: document.getElementById('buscaProdutoFinal'),
        
        // Array temporário para armazenar ingredientes enquanto o produto está sendo cadastrado/editado
        ingredientesTemporarios: [],

        init: () => {
             // Listener para atualizar o custo ao digitar no campo de quantidade de ingrediente temporário
             Produtos.ingredienteQuantidadeInput.addEventListener('input', Produtos.atualizarCustoProducaoProdutoFinal);
             // Listener para atualizar o custo ao mudar o ingrediente selecionado (útil se o custo unitário for diferente)
             Produtos.ingredienteSelect.addEventListener('change', Produtos.atualizarCustoProducaoProdutoFinal);
        },

        carregarIngredientesParaSelect: () => {
            const estoque = Utils.getStorage('estoque');
            Produtos.ingredienteSelect.innerHTML = '<option value="">Selecione um Ingrediente/Item de Estoque</option>';
            // Filtra apenas ingredientes (se houver outros tipos, como embalagens)
            estoque.filter(item => item.tipo === 'Ingrediente').forEach((item) => {
                const option = document.createElement('option');
                option.value = item.nome; // Usamos o nome como valor
                option.textContent = `${item.nome} (Qtd: ${item.qtd} - R$ ${item.custoUnitario ? item.custoUnitario.toFixed(2) : '0.00'}/un.)`;
                Produtos.ingredienteSelect.appendChild(option);
            });
        },

        adicionarIngredienteAoProdutoTemp: () => {
            const nomeIngrediente = Produtos.ingredienteSelect.value;
            const quantidade = parseInt(Produtos.ingredienteQuantidadeInput.value);

            if (!nomeIngrediente || isNaN(quantidade) || quantidade <= 0) {
                return Notificacao.show('warning', 'Por favor, selecione um ingrediente e informe uma quantidade válida.');
            }

            const estoque = Utils.getStorage('estoque');
            const itemEstoque = estoque.find(item => item.nome === nomeIngrediente && item.tipo === 'Ingrediente');

            if (!itemEstoque) {
                 return Notificacao.show('error', `Ingrediente "${nomeIngrediente}" não encontrado no estoque.`);
            }

            // Verifica se o ingrediente já foi adicionado na lista temporária
            const existe = Produtos.ingredientesTemporarios.find(i => i.nome === nomeIngrediente);
            if (existe) {
                existe.quantidade += quantidade;
            } else {
                Produtos.ingredientesTemporarios.push({
                    nome: nomeIngrediente,
                    quantidade: quantidade, // Usar 'quantidade' aqui
                    custoUnitario: itemEstoque.custoUnitario || 0 // Pega o custo unitário do estoque
                });
            }

            Produtos.renderizarIngredientesTemporarios();
            Produtos.atualizarCustoProducaoProdutoFinal(); // Atualiza o custo
            Utils.clearForm('ingredienteQuantidade'); // Limpa apenas a quantidade
            Produtos.ingredienteSelect.value = ''; // Limpa o select
            Notificacao.show('success', `Ingrediente ${nomeIngrediente} adicionado.`);
        },

        removerIngredienteTemp: (index) => {
            Produtos.ingredientesTemporarios.splice(index, 1);
            Produtos.renderizarIngredientesTemporarios();
            Produtos.atualizarCustoProducaoProdutoFinal(); // Atualiza o custo
            Notificacao.show('info', 'Ingrediente removido da lista temporária.');
        },

        renderizarIngredientesTemporarios: () => {
            Produtos.listaIngredientesProdutoUl.innerHTML = '';
            if (Produtos.ingredientesTemporarios.length === 0) {
                Produtos.listaIngredientesProdutoUl.innerHTML = '<li class="empty-list-message">Nenhum ingrediente adicionado a este produto ainda.</li>';
                return;
            }

            Produtos.ingredientesTemporarios.forEach((ingrediente, index) => {
                const li = document.createElement('li');
                li.className = 'ingrediente-item';
                li.innerHTML = `
                    <span>${ingrediente.nome}: ${ingrediente.quantidade} un. (Custo estimado: R$ ${(ingrediente.custoUnitario * ingrediente.quantidade).toFixed(2)})</span>
                    <button onclick="Produtos.removerIngredienteTemp(${index})"><i class="fa-solid fa-xmark"></i></button>
                `;
                Produtos.listaIngredientesProdutoUl.appendChild(li);
            });
        },

        // Calcula e exibe o custo de produção estimado
        atualizarCustoProducaoProdutoFinal: () => {
            let custoTotal = 0;
            const estoque = Utils.getStorage('estoque');

            Produtos.ingredientesTemporarios.forEach(ingredienteTemp => {
                const itemEstoque = estoque.find(item => item.nome === ingredienteTemp.nome && item.tipo === 'Ingrediente');
                if (itemEstoque && itemEstoque.custoUnitario !== undefined) {
                    custoTotal += (ingredienteTemp.quantidade * itemEstoque.custoUnitario);
                }
            });
            Produtos.custoProducaoInput.value = custoTotal.toFixed(2);
        },

        salvarProdutoFinal: () => {
            const nome = Produtos.nomeInput.value.trim();
            const precoVenda = parseFloat(Produtos.precoVendaInput.value);
            const custoProducao = parseFloat(Produtos.custoProducaoInput.value) || 0; // Pega o valor calculado

            if (!nome || isNaN(precoVenda) || precoVenda <= 0) {
                return Notificacao.show('warning', 'Por favor, preencha o nome do produto e o preço de venda corretamente.');
            }
            if (Produtos.ingredientesTemporarios.length === 0) {
                if (!confirm('Você não adicionou nenhum ingrediente a este produto. Deseja continuar mesmo assim? O custo de produção ficará zerado.')) {
                    return;
                }
            }

            const produtos = Utils.getStorage('produtosFinais');
            produtos.push({
                id: Utils.generateId(), // Adiciona um ID único
                nome,
                precoVenda,
                custoProducao, // Já virá calculado ou zerado
                ingredientes: [...Produtos.ingredientesTemporarios] // Copia o array
            });
            Utils.setStorage('produtosFinais', produtos);

            Utils.clearForm('produtoFinalNome', 'produtoFinalPrecoVenda', 'produtoFinalCustoProducao');
            Produtos.ingredientesTemporarios = []; // Limpa os ingredientes temporários
            Produtos.renderizarIngredientesTemporarios(); // Atualiza a lista na UI
            Produtos.listarProdutosFinais();
            Dashboard.atualizarContadores(); // Atualiza o contador de produtos no dashboard
            Notificacao.show('success', 'Produto final salvo com sucesso!');
        },

        listarProdutosFinais: () => {
            const termoBusca = Produtos.buscaInput.value.toLowerCase();
            Produtos.listElement.innerHTML = '';
            const produtos = Utils.getStorage('produtosFinais');

            // Filtra os produtos
            const produtosFiltrados = produtos.filter(p =>
                p.nome.toLowerCase().includes(termoBusca)
            );

            if (produtos.length === 0) {
                Produtos.listElement.innerHTML = '<li class="empty-list-message">Nenhum produto final cadastrado ainda.</li>';
                return;
            }

            if (produtosFiltrados.length === 0 && termoBusca !== '') {
                Produtos.listElement.innerHTML = `<li class="empty-list-message">Nenhum produto encontrado com "${termoBusca}".</li>`;
                return;
            }
            if (produtosFiltrados.length === 0 && termoBusca === '') {
                 Produtos.listElement.innerHTML = '<li class="empty-list-message">Nenhum produto final cadastrado ainda.</li>';
                 return;
            }


            produtosFiltrados.forEach((produto, index) => { // Use index para Utils.editItem/deleteItem
                let ingredientesHtml = 'Nenhum ingrediente associado.';
                if (produto.ingredientes && produto.ingredientes.length > 0) {
                    ingredientesHtml = produto.ingredientes.map(i => `${i.nome}: ${i.quantidade}un.`).join(', ');
                }

                const itemText = `
                    <strong>${produto.nome}</strong><br>
                    Preço Venda: R$ ${produto.precoVenda.toFixed(2)}<br>
                    Custo Produção: R$ ${produto.custoProducao ? produto.custoProducao.toFixed(2) : '0.00'}<br>
                    Ingredientes: ${ingredientesHtml}
                `;
                const actionsHtml = `
                    <button class="edit" onclick="Utils.editItem('produtosFinais', ${index}, Produtos.formFields, Produtos.listarProdutosFinais, (item) => \`Produto: ${item.nome}\`, Produtos.prepararEdicaoProdutoFinal)">
                        <i class="fa-solid fa-pen"></i> Editar
                    </button>
                    <button class="delete" onclick="Utils.deleteItem('produtosFinais', ${index}, Produtos.listarProdutosFinais, (item) => \`Produto: ${item.nome}\`, Dashboard.atualizarContadores)">
                        <i class="fa-solid fa-trash"></i> Excluir
                    </button>
                `;
                Produtos.listElement.appendChild(Utils.createListItem(itemText, actionsHtml));
            });
        },

        // Função auxiliar para preparar a edição de um produto final (para o Utils.editItem)
        prepararEdicaoProdutoFinal: (produto) => {
            if (produto) {
                Produtos.ingredientesTemporarios = [...(produto.ingredientes || [])];
                Produtos.renderizarIngredientesTemporarios();
                Produtos.atualizarCustoProducaoProdutoFinal(); // Preenche o custo de produção ao editar
            } else {
                // Se null, significa que a edição foi cancelada e deve limpar
                Produtos.ingredientesTemporarios = [];
                Produtos.renderizarIngredientesTemporarios();
                Produtos.custoProducaoInput.value = ''; // Limpa o campo de custo
            }
        }
    };


    // --- MÓDULO DESPESAS ---
    const Despesas = {
        formFields: [
            {id:'categoriaDespesa', name:'categoria', type:'select'},
            {id:'descricaoDespesa', name:'descricao', type:'text'},
            {id:'dataDespesa', name:'data', type:'date'},
            {id:'valorDespesa', name:'valor', type:'number'}
        ],
        listElement: document.getElementById('listaDespesas'),
        categoriaSelect: document.getElementById('categoriaDespesa'),
        descricaoInput: document.getElementById('descricaoDespesa'),
        dataInput: document.getElementById('dataDespesa'),
        valorInput: document.getElementById('valorDespesa'),
        buscaInput: document.getElementById('buscaDescricaoDespesa'),

        salvarDespesa: () => {
            const categoria = Despesas.categoriaSelect.value;
            const descricao = Despesas.descricaoInput.value.trim();
            const data = Despesas.dataInput.value;
            const valor = parseFloat(Despesas.valorInput.value);

            if (!categoria || !descricao || !data || isNaN(valor) || valor <= 0) {
                Notificacao.show('warning', 'Por favor, selecione uma categoria e preencha todos os campos da despesa corretamente (Descrição, Data, Valor positivo).');
                return;
            }

            const despesas = Utils.getStorage('despesas');
            despesas.push({ id: Utils.generateId(), categoria, descricao, data, valor }); // Adiciona um ID único
            Utils.setStorage('despesas', despesas);

            Utils.clearForm('categoriaDespesa', 'descricaoDespesa', 'dataDespesa', 'valorDespesa');
            Financeiro.atualizarFinanceiro();
            Dashboard.atualizarDashboard(); // Atualiza o dashboard
            Despesas.filtrarDespesas();
            Notificacao.show('success', 'Despesa salva com sucesso!');
        },

        filtrarDespesas: () => {
            const despesas = Utils.getStorage('despesas');
            const termoBusca = Despesas.buscaInput.value.toLowerCase();
            Despesas.listElement.innerHTML = '';

            const despesasFiltradas = despesas.filter((d) =>
                d.descricao.toLowerCase().includes(termoBusca) ||
                d.categoria.toLowerCase().includes(termoBusca)
            );

            if (despesas.length === 0) {
                Despesas.listElement.innerHTML = '<li class="empty-list-message">Nenhuma despesa cadastrada ainda.</li>';
                return;
            }

            if (despesasFiltradas.length === 0 && termoBusca !== '') {
                Despesas.listElement.innerHTML = `<li class="empty-list-message">Nenhuma despesa encontrada com "${termoBusca}".</li>`;
                return;
            }
            if (despesasFiltradas.length === 0 && termoBusca === '') {
                 Despesas.listElement.innerHTML = '<li class="empty-list-message">Nenhuma despesa cadastrada ainda.</li>';
                 return;
            }

            despesasFiltradas.sort((a, b) => new Date(b.data + 'T00:00:00') - new Date(a.data + 'T00:00:00'));

            despesasFiltradas.forEach((d, index) => { // Use index para Utils.editItem/deleteItem
                const dataFormatada = Utils.formatDate(d.data);
                const itemText = `<strong>${dataFormatada}</strong> | ${d.categoria} | ${d.descricao}<br>Valor: R$ ${d.valor.toFixed(2)}`;
                const actionsHtml = `
                    <button class="edit" onclick="Utils.editItem('despesas', ${index}, Despesas.formFields, Despesas.filtrarDespesas, (item) => \`Descrição: ${item.descricao}, Valor: R$${item.valor.toFixed(2)}\`)">
                        <i class="fa-solid fa-pen"></i> Editar
                    </button>
                    <button class="delete" onclick="Utils.deleteItem('despesas', ${index}, Despesas.filtrarDespesas, (item) => \`Descrição: ${item.descricao}\`, () => { Financeiro.atualizarFinanceiro(); Dashboard.atualizarDashboard(); })">
                        <i class="fa-solid fa-trash"></i> Excluir
                    </button>
                `;
                Despesas.listElement.appendChild(Utils.createListItem(itemText, actionsHtml));
            });
        }
    };

    // --- MÓDULO ESTOQUE (INGREDIENTES E EMBALAGENS) ---
    const Estoque = {
        formFields: [
            {id:'produtoNome', name:'nome', type:'text'},
            {id:'produtoTipo', name:'tipo', type:'select'},
            {id:'produtoQtd', name:'qtd', type:'number'},
            {id:'produtoMin', name:'min', type:'number'},
            {id:'produtoCustoUnitario', name:'custoUnitario', type:'number'},
            {id:'produtoValidade', name:'validade', type:'date'}
        ],
        listElement: document.getElementById('listaEstoque'),
        historicoListElement: document.getElementById('listaHistorico'),
        nomeInput: document.getElementById('produtoNome'),
        tipoSelect: document.getElementById('produtoTipo'),
        qtdInput: document.getElementById('produtoQtd'),
        minInput: document.getElementById('produtoMin'),
        custoUnitarioInput: document.getElementById('produtoCustoUnitario'),
        validadeInput: document.getElementById('produtoValidade'),
        buscaInput: document.getElementById('buscaProdutoEstoque'), // Novo ID para a busca de estoque
        filtroTipoSelect: document.getElementById('filtroTipoEstoque'),

        adicionarProduto: async () => {
            const nome = Estoque.nomeInput.value.trim();
            const tipo = Estoque.tipoSelect.value;
            const qtd = parseInt(Estoque.qtdInput.value);
            const min = parseInt(Estoque.minInput.value);
            const custoUnitario = parseFloat(Estoque.custoUnitarioInput.value) || 0; // Custo unitário
            const validade = Estoque.validadeInput.value;

            if (!nome || !tipo || isNaN(qtd) || qtd < 0 || isNaN(min) || min < 0 || isNaN(custoUnitario) || custoUnitario < 0) {
                return Notificacao.show('warning', 'Por favor, preencha todos os campos do item de estoque corretamente (Quantidade, Mínimo e Custo Unitário devem ser números não negativos).');
            }

            const estoque = Utils.getStorage('estoque');
            const itemExistenteIndex = estoque.findIndex(p => p.nome.toLowerCase() === nome.toLowerCase() && p.tipo === tipo);

            if (itemExistenteIndex > -1) {
                const confirmation = await Notificacao.confirm(`O item "${nome}" do tipo "${tipo}" já existe. Deseja ADICIONAR ${qtd} à quantidade existente e ATUALIZAR os demais dados ou SUBSTITUIR (sobrescrever) o item? \n\nClique SIM para ADICIONAR, ou NÃO para ATUALIZAR/SOBRESCEVER.`);

                if (confirmation) { // ADICIONAR
                    estoque[itemExistenteIndex].qtd += qtd;
                    // Atualiza custo unitário e validade apenas se foram fornecidos no input atual
                    if (custoUnitario > 0) estoque[itemExistenteIndex].custoUnitario = custoUnitario;
                    if (validade) estoque[itemExistenteIndex].validade = validade;
                    if (min >= 0) estoque[itemExistenteIndex].min = min; // Permite atualizar o mínimo
                    Estoque.registrarHistorico(`+${qtd} ${nome} (${tipo}, adição de estoque)`, 'entrada'); // Tipo de movimentação
                    Notificacao.show('success', `Adicionadas ${qtd} unidades de "${nome}" ao estoque.`);
                } else { // SOBRESCEVER
                    estoque[itemExistenteIndex] = { id: estoque[itemExistenteIndex].id, nome, tipo, qtd, min, custoUnitario, validade };
                    Estoque.registrarHistorico(`Atualizado: ${nome} (${tipo}, nova quantidade: ${qtd})`, 'atualizacao');
                    Notificacao.show('success', `Item "${nome}" atualizado para ${qtd} unidades.`);
                }
            } else {
                estoque.push({ id: Utils.generateId(), nome, tipo, qtd, min, custoUnitario, validade }); // Adiciona um ID único
                Estoque.registrarHistorico(`+${qtd} ${nome} (${tipo}, novo item no estoque)`, 'entrada');
                Notificacao.show('success', 'Novo item adicionado ao estoque!');
            }

            Utils.setStorage('estoque', estoque);
            Utils.clearForm('produtoNome', 'produtoTipo', 'produtoQtd', 'produtoMin', 'produtoCustoUnitario', 'produtoValidade');
            Estoque.listarProdutos();
            Produtos.carregarIngredientesParaSelect(); // Atualiza a lista de ingredientes no módulo Produtos
            Produtos.atualizarCustoProducaoProdutoFinal(); // Atualiza o custo estimado de produtos finais
            Dashboard.listarEstoqueBaixo(); // Atualiza o dashboard de estoque
        },

        listarProdutos: () => {
            Estoque.listElement.innerHTML = '';
            const termoBusca = Estoque.buscaInput.value.toLowerCase();
            const tipoFiltro = Estoque.filtroTipoSelect.value;
            const estoque = Utils.getStorage('estoque');

            const produtosFiltrados = estoque.filter(p => {
                const nomeMatch = p.nome.toLowerCase().includes(termoBusca);
                const tipoMatchBusca = p.tipo.toLowerCase().includes(termoBusca); // Permite buscar também pelo tipo
                const filtroTipoMatch = tipoFiltro === '' || p.tipo === tipoFiltro;
                return (nomeMatch || tipoMatchBusca) && filtroTipoMatch;
            });

            if (estoque.length === 0) {
                Estoque.listElement.innerHTML = '<li class="empty-list-message">Nenhum item em estoque.</li>';
                return;
            }

            if (produtosFiltrados.length === 0 && termoBusca !== '') {
                Estoque.listElement.innerHTML = `<li class="empty-list-message">Nenhum item de estoque encontrado com os filtros aplicados.</li>`;
                return;
            }
             if (produtosFiltrados.length === 0 && termoBusca === '') {
                 Estoque.listElement.innerHTML = '<li class="empty-list-message">Nenhum item em estoque.</li>';
                 return;
            }


            produtosFiltrados.forEach((produto, index) => { // Use index para Utils.editItem/deleteItem
                const itemText = `
                    <strong>${produto.nome}</strong> (${produto.tipo})<br>
                    Qtd: ${produto.qtd} un. (Mín: ${produto.min} un.)<br>
                    Custo Unitário: R$ ${produto.custoUnitario ? produto.custoUnitario.toFixed(2) : '0.00'}<br>
                    ${produto.validade ? `Venc: ${Utils.formatDate(produto.validade)}` : ''}
                `;
                const actionsHtml = `
                    <button class="add-qty" onclick="Estoque.gerenciarQuantidade(${index}, 'adicionar')">
                        <i class="fa-solid fa-plus"></i> Add Qtd
                    </button>
                    <button class="remove-qty" onclick="Estoque.gerenciarQuantidade(${index}, 'remover')">
                        <i class="fa-solid fa-minus"></i> Remover Qtd
                    </button>
                    <button class="edit" onclick="Utils.editItem('estoque', ${index}, Estoque.formFields, Estoque.listarProdutos, (item) => \`Item: ${item.nome} (${item.qtd} un., Tipo: ${item.tipo})\`)">
                        <i class="fa-solid fa-pen"></i> Editar
                    </button>
                    <button class="delete" onclick="Utils.deleteItem('estoque', ${index}, Estoque.listarProdutos, (item) => \`Item: ${item.nome} (${item.qtd} un.)\`, Dashboard.listarEstoqueBaixo)">
                        <i class="fa-solid fa-trash"></i> Excluir
                    </button>
                `;
                const li = Utils.createListItem(itemText, actionsHtml);
                if (produto.qtd === 0) li.classList.add('falta');
                else if (produto.min > 0 && produto.qtd < produto.min) li.classList.add('baixo');
                Estoque.listElement.appendChild(li);
            });
        },

        gerenciarQuantidade: async (originalIndex, tipoOperacao) => {
            const estoque = Utils.getStorage('estoque');
            const item = estoque[originalIndex];

            if (!item) {
                Notificacao.show('error', 'Item não encontrado no estoque.');
                return;
            }

            const quantidadeString = prompt(`Quantas unidades de "${item.nome}" deseja ${tipoOperacao}?`);
            const quantidade = parseInt(quantidadeString);

            if (isNaN(quantidade) || quantidade <= 0) {
                return Notificacao.show('warning', 'Quantidade inválida. Por favor, insira um número positivo.');
            }

            if (tipoOperacao === 'adicionar') {
                item.qtd += quantidade;
                Estoque.registrarHistorico(`+${quantidade} ${item.nome} (${item.tipo}, adição)`, 'entrada');
                Notificacao.show('success', `${quantidade} unidades de "${item.nome}" adicionadas.`);
            } else if (tipoOperacao === 'remover') {
                if (item.qtd >= quantidade) {
                    item.qtd -= quantidade;
                    Estoque.registrarHistorico(`-${quantidade} ${item.nome} (${item.tipo}, remoção)`, 'saida');
                    Notificacao.show('success', `${quantidade} unidades de "${item.nome}" removidas.`);
                } else {
                    return Notificacao.show('warning', `Não há ${quantidade} unidades de "${item.nome}" no estoque. Quantidade atual: ${item.qtd}.`);
                }
            }

            Utils.setStorage('estoque', estoque);
            Estoque.listarProdutos(); // Recarrega a lista
            Produtos.carregarIngredientesParaSelect(); // Atualiza a lista de ingredientes no módulo Produtos
            Produtos.atualizarCustoProducaoProdutoFinal(); // Atualiza o custo estimado de produtos finais
            Dashboard.listarEstoqueBaixo(); // Atualiza o dashboard
        },

        registrarHistorico: (texto, tipoMovimentacao) => {
            const historico = Utils.getStorage('historicoEstoque');
            const dataHora = new Date().toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
            historico.unshift({ dataHora, texto, tipo: tipoMovimentacao }); // Adiciona tipo de movimentação
            Utils.setStorage('historicoEstoque', historico.slice(0, 50)); // Guarda mais histórico
            Estoque.listarHistorico();
        },

        listarHistorico: () => {
            Estoque.historicoListElement.innerHTML = '';
            const hist = Utils.getStorage('historicoEstoque');

            if (hist.length === 0) {
                Estoque.historicoListElement.innerHTML = '<li class="empty-list-message">Nenhum histórico de estoque ainda.</li>';
                return;
            }

            hist.forEach((entry) => {
                const li = document.createElement('li');
                // Adiciona um ícone baseado no tipo de movimentação
                let icon = '';
                if (entry.tipo === 'entrada') icon = '<i class="fa-solid fa-arrow-circle-up" style="color:#4CAF50; margin-right: 5px;"></i>';
                else if (entry.tipo === 'saida') icon = '<i class="fa-solid fa-arrow-circle-down" style="color:#f44336; margin-right: 5px;"></i>';
                else if (entry.tipo === 'atualizacao') icon = '<i class="fa-solid fa-sync-alt" style="color:#2196F3; margin-right: 5px;"></i>';

                li.innerHTML = `${icon}${entry.dataHora}: ${entry.texto}`;
                Estoque.historicoListElement.appendChild(li);
            });
        }
    };

    // --- MÓDULO FINANCEIRO ---
    const Financeiro = {
        filtroMesSelect: document.getElementById('filtroMesFinanceiro'),
        filtroAnoSelect: document.getElementById('filtroAnoFinanceiro'),
        ganhosSpan: document.getElementById('ganhos'),
        gastosSpan: document.getElementById('gastos'),
        lucrosSpan: document.getElementById('lucros'),
        detalhesGanhosDiv: document.getElementById('detalhesGanhos'),
        detalhesGastosDiv: document.getElementById('detalhesGastos'),
        listaGanhosDetalhesUl: document.getElementById('listaGanhosDetalhes'),
        listaGastosDetalhesUl: document.getElementById('listaGastosDetalhes'),
        topClientesList: document.getElementById('topClientesList'),
        topProdutosList: document.getElementById('topProdutosList'),


        preencherFiltrosAno: () => {
            Financeiro.filtroAnoSelect.innerHTML = '<option value="">Todos os Anos</option>';

            let allYears = new Set();
            const currentYear = new Date().getFullYear();
            allYears.add(currentYear); // Garante o ano atual

            const pedidos = Utils.getStorage('pedidos');
            pedidos.forEach(p => {
                if (p.data) allYears.add(new Date(p.data + 'T00:00:00').getFullYear());
            });

            const despesas = Utils.getStorage('despesas');
            despesas.forEach(d => {
                if (d.data) allYears.add(new Date(d.data + 'T00:00:00').getFullYear());
            });

            const sortedYears = Array.from(allYears).sort((a, b) => a - b);

            sortedYears.forEach(year => {
                const option = document.createElement('option');
                option.value = year.toString();
                option.textContent = year.toString();
                Financeiro.filtroAnoSelect.appendChild(option);
            });
            Financeiro.filtroAnoSelect.value = currentYear.toString(); // Seleciona o ano atual por padrão
        },

        atualizarFinanceiro: () => {
            const pedidos = Utils.getStorage('pedidos');
            const despesas = Utils.getStorage('despesas');

            const filtroMes = Financeiro.filtroMesSelect.value;
            const filtroAno = Financeiro.filtroAnoSelect.value;

            const pedidosFiltrados = pedidos.filter(p => {
                if (!p.data) return false;
                const pedidoDate = new Date(p.data + 'T00:00:00');
                const pedidoMonth = (pedidoDate.getMonth() + 1).toString().padStart(2, '0');
                const pedidoYear = pedidoDate.getFullYear().toString();
                return (filtroMes === '' || pedidoMonth === filtroMes) &&
                       (filtroAno === '' || pedidoYear === filtroAno);
            });

            const despesasFiltradas = despesas.filter(d => {
                if (!d.data) return false;
                const despesaDate = new Date(d.data + 'T00:00:00');
                const despesaMonth = (despesaDate.getMonth() + 1).toString().padStart(2, '0');
                const despesaYear = despesaDate.getFullYear().toString();
                return (filtroMes === '' || despesaMonth === filtroMes) &&
                       (filtroAno === '' || despesaYear === filtroAno);
            });

            const ganhos = pedidosFiltrados.reduce((s, p) => s + p.valor, 0);
            const gastos = despesasFiltradas.reduce((s, d) => s + d.valor, 0);
            const lucros = ganhos - gastos;

            Financeiro.ganhosSpan.textContent = ganhos.toFixed(2);
            Financeiro.gastosSpan.textContent = gastos.toFixed(2);
            Financeiro.lucrosSpan.textContent = lucros.toFixed(2);

            Financeiro.listaGanhosDetalhesUl.innerHTML = '';
            if (pedidosFiltrados.length === 0) {
                Financeiro.listaGanhosDetalhesUl.innerHTML = '<li class="empty-list-message">Nenhum ganho registrado para o período selecionado.</li>';
            } else {
                pedidosFiltrados.sort((a,b) => new Date(b.data + 'T00:00:00') - new Date(a.data + 'T00:00:00')).forEach(p => {
                    const dataFormatada = Utils.formatDate(p.data);
                    const li = document.createElement('li');
                    li.textContent = `${dataFormatada} - ${p.nomeCliente} (${p.produto}): R$ ${p.valor.toFixed(2)}`;
                    Financeiro.listaGanhosDetalhesUl.appendChild(li);
                });
            }

            Financeiro.listaGastosDetalhesUl.innerHTML = '';
            if (despesasFiltradas.length === 0) {
                Financeiro.listaGastosDetalhesUl.innerHTML = '<li class="empty-list-message">Nenhum gasto registrado para o período selecionado.</li>';
            } else {
                despesasFiltradas.sort((a,b) => new Date(b.data + 'T00:00:00') - new Date(a.data + 'T00:00:00')).forEach(d => {
                    const dataFormatada = Utils.formatDate(d.data);
                    const li = document.createElement('li');
                    li.textContent = `${dataFormatada} - ${d.categoria} (${d.descricao}): R$ ${d.valor.toFixed(2)}`;
                    Financeiro.listaGastosDetalhesUl.appendChild(li);
                });
            }
            Financeiro.gerarRelatoriosRapidos(pedidosFiltrados); // Atualiza os relatórios com os dados filtrados
        },

        toggleDetalhesFinanceiros: (tipo) => {
            // Fecha o outro painel se estiver aberto
            if (tipo === 'ganhos' && Financeiro.detalhesGastosDiv.classList.contains('active')) {
                Financeiro.detalhesGastosDiv.classList.remove('active');
            } else if (tipo === 'gastos' && Financeiro.detalhesGanhosDiv.classList.contains('active')) {
                Financeiro.detalhesGanhosDiv.classList.remove('active');
            }

            // Alterna o painel clicado
            if (tipo === 'ganhos') {
                Financeiro.detalhesGanhosDiv.classList.toggle('active');
            } else if (tipo === 'gastos') {
                Financeiro.detalhesGastosDiv.classList.toggle('active');
            }
        },

        gerarRelatoriosRapidos: (pedidosBase = null) => {
            const pedidos = pedidosBase || Utils.getStorage('pedidos');
            const filtroMes = Financeiro.filtroMesSelect.value;
            const filtroAno = Financeiro.filtroAnoSelect.value;

            const pedidosFiltrados = pedidos.filter(p => {
                if (!p.data) return false;
                const pedidoDate = new Date(p.data + 'T00:00:00');
                const pedidoMonth = (pedidoDate.getMonth() + 1).toString().padStart(2, '0');
                const pedidoYear = pedidoDate.getFullYear().toString();
                return (filtroMes === '' || pedidoMonth === filtroMes) &&
                       (filtroAno === '' || pedidoYear === filtroAno);
            });

            // Top Clientes
            const clientesMap = {};
            pedidosFiltrados.forEach(p => {
                if (clientesMap[p.nomeCliente]) {
                    clientesMap[p.nomeCliente] += p.valor;
                } else {
                    clientesMap[p.nomeCliente] = p.valor;
                }
            });
            const topClientes = Object.entries(clientesMap)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5); // Top 5 clientes

            Financeiro.topClientesList.innerHTML = '';
            if (topClientes.length === 0) {
                Financeiro.topClientesList.innerHTML = '<li class="empty-list-message">Nenhum cliente com pedidos no período.</li>';
            } else {
                topClientes.forEach(([cliente, valor]) => {
                    const li = document.createElement('li');
                    li.textContent = `${cliente}: R$ ${valor.toFixed(2)}`;
                    Financeiro.topClientesList.appendChild(li);
                });
            }

            // Top Produtos
            const produtosMap = {};
            pedidosFiltrados.forEach(p => {
                if (produtosMap[p.produto]) {
                    produtosMap[p.produto]++; // Conta a quantidade de vezes que o produto foi vendido
                } else {
                    produtosMap[p.produto] = 1;
                }
            });
            const topProdutos = Object.entries(produtosMap)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5); // Top 5 produtos mais vendidos

            Financeiro.topProdutosList.innerHTML = '';
            if (topProdutos.length === 0) {
                Financeiro.topProdutosList.innerHTML = '<li class="empty-list-message">Nenhum produto vendido no período.</li>';
            } else {
                topProdutos.forEach(([produto, qtd]) => {
                    const li = document.createElement('li');
                    li.textContent = `${produto}: ${qtd} vendas`;
                    Financeiro.topProdutosList.appendChild(li);
                });
            }
        }
    };

    // --- NOVO MÓDULO: AGENDA ---
    const Agenda = {
        listaClientesElement: document.getElementById('listaClientesAgenda'),
        buscaInput: document.getElementById('buscaClienteAgenda'),
        clientListView: document.getElementById('agendaClientListView'),
        clientDetailsView: document.getElementById('agendaClientDetailsView'),
        detalheClienteNome: document.getElementById('agendaDetalheClienteNome'),
        detalheClienteTelefone: document.getElementById('agendaDetalheClienteTelefone'),
        detalheClienteEndereco: document.getElementById('agendaDetalheClienteEndereco'),
        listaPedidosCliente: document.getElementById('listaPedidosCliente'),

        listarClientesNaAgenda: () => {
            const termoBusca = Agenda.buscaInput.value.toLowerCase();
            Agenda.listaClientesElement.innerHTML = '';
            const clientes = Utils.getStorage('clientes');

            const clientesFiltrados = clientes.filter(c =>
                c.nome.toLowerCase().includes(termoBusca) ||
                c.telefone.toLowerCase().includes(termoBusca) ||
                c.endereco.toLowerCase().includes(termoBusca)
            );

            if (clientes.length === 0) {
                Agenda.listaClientesElement.innerHTML = '<li class="empty-list-message">Nenhum cliente cadastrado ainda.</li>';
                return;
            }

            if (clientesFiltrados.length === 0 && termoBusca !== '') {
                Agenda.listaClientesElement.innerHTML = `<li class="empty-list-message">Nenhum cliente encontrado com "${termoBusca}".</li>`;
                return;
            }
             if (clientesFiltrados.length === 0 && termoBusca === '') {
                 Agenda.listaClientesElement.innerHTML = '<li class="empty-list-message">Nenhum cliente cadastrado ainda.</li>';
                 return;
            }

            clientesFiltrados.forEach((cliente) => {
                const itemText = `
                    <strong>${cliente.nome}</strong><br>
                    Tel: ${cliente.telefone}
                `;
                const actionsHtml = `
                    <button class="view-details" onclick="Agenda.verDetalhesCliente('${cliente.id}')">
                        <i class="fa-solid fa-eye"></i> Ver Histórico
                    </button>
                `;
                Agenda.listaClientesElement.appendChild(Utils.createListItem(itemText, actionsHtml));
            });
        },

        verDetalhesCliente: (clienteId) => {
            const clientes = Utils.getStorage('clientes');
            const cliente = clientes.find(c => c.id === clienteId);

            if (!cliente) {
                Notificacao.show('error', 'Cliente não encontrado.');
                Agenda.voltarParaListaClientes();
                return;
            }

            Agenda.clientListView.style.display = 'none';
            Agenda.clientDetailsView.style.display = 'block';

            Agenda.detalheClienteNome.textContent = cliente.nome;
            Agenda.detalheClienteTelefone.textContent = cliente.telefone;
            Agenda.detalheClienteEndereco.textContent = cliente.endereco;

            Agenda.listaPedidosCliente.innerHTML = '';
            const pedidos = Utils.getStorage('pedidos');

            // Filtra os pedidos feitos por este cliente, agora usando o ID
            const pedidosDoCliente = pedidos.filter(p => p.clienteId === cliente.id);

            if (pedidosDoCliente.length === 0) {
                Agenda.listaPedidosCliente.innerHTML = '<li class="empty-list-message">Este cliente ainda não possui pedidos registrados.</li>';
                return;
            }

            // Ordena os pedidos do mais recente para o mais antigo
            pedidosDoCliente.sort((a, b) => new Date(b.data + 'T00:00:00') - new Date(a.data + 'T00:00:00'));

            pedidosDoCliente.forEach(p => {
                const dataFormatada = Utils.formatDate(p.data);
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>Pedido de ${p.produto}</strong> em ${dataFormatada}<br>
                    Valor: R$ ${p.valor.toFixed(2)}<br>
                    Forma de Entrega: ${p.entrega}
                `;
                Agenda.listaPedidosCliente.appendChild(li);
            });
        },

        voltarParaListaClientes: () => {
            Agenda.clientDetailsView.style.display = 'none';
            Agenda.clientListView.style.display = 'block';
            Agenda.listarClientesNaAgenda(); // Recarrega a lista de clientes
        }
    };

    // Inicializa o app ao carregar a página
    document.addEventListener('DOMContentLoaded', () => {
        // Inicializa os módulos que precisam de event listeners
        Pedidos.init();
        Produtos.init();
        // A função App.entrar() agora é chamada pelo clique do botão na splash screen
        // Não chame App.atualizarTudo() aqui, ele será chamado após a saudação de boas-vindas
    });
  </script>
</body>
</
