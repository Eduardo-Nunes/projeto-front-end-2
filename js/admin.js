$(document).ready(function() {
  $('#adminForm').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var senha = $('#senha').val();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Autenticando:', email, senha);
    // Exemplo: if (email === 'admin@luxo.com' && senha === 'senha123') { ... }
  });
}); 