$(function () {
  $('#btn-ingresar').on('click', function () {
    var usuario = $('#username').val();
    var contrasena = $('#password').val();

    $('#login-error').hide();

    if (usuario === 'prueba' && contrasena === '1234') {
      window.location.href = './index.html';
    } else {
      $('#login-error')
        .text('Usuario o contraseña incorrectos. (Credenciales de prueba: usuario "prueba", contraseña "1234")')
        .hide()
        .slideDown(300);
    }
  });
});
