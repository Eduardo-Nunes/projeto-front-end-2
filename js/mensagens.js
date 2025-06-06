function getMensagensTableHtml(mensagens) {
  var html = '<table class="mensagens-table">';
  html += '<thead><tr><th>Nome</th><th>E-mail</th><th>Mensagem</th></tr></thead>';
  html += '<tbody>';
  mensagens.forEach(function(msg) {
    html += '<tr>' +
      '<td>' + msg.nome + '</td>' +
      '<td>' + msg.email + '</td>' +
      '<td>' + msg.mensagem + '</td>' +
      '</tr>';
  });
  html += '</tbody></table>';
  return html;
}

function getMensagensView() {
  var mensagens = obterMensagens();
  var container = $('#mensagens-container');
  container.empty();
  if (mensagens && mensagens.length > 0) {
    container.append(getMensagensTableHtml(mensagens));
  } else {
    container.append('<p>Nenhuma mensagem recebida.</p>');
  }
}

$(document).ready(function() {
  getMensagensView();
}); 