function getMensagem() {
  var nome = $('#nome').val();
  var email = $('#email').val();
  var msg = $('#msg').val();
  console.log(nome, email, msg);
  return {
    nome: nome,
    email: email,
    mensagem: msg
  };
}

$(document).ready(function() {
  $('.button').click(function() {
    inserirMensagem(getMensagem());
  });
}); 