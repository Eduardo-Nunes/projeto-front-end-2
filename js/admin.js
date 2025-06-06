function getObjLoginSenha() {
  var email = $('#email').val();
  var senha = $('#senha').val();
  console.log(email, senha);
  return {
    email: email,
    senha: senha
  };
}

$(document).ready(function() {
  $('#adminForm').submit(function(event) {
    event.preventDefault();
    if (validarUsuario(getObjLoginSenha())) {
      window.location.href = 'mensagens.html';
    } else {
      alert('E-mail e Senha inválidos');
    }
  });
}); 