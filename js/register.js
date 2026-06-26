$(function () {
  $('.form-register').on('submit', function (e) {
    e.preventDefault();

    $('.error-msg').hide();

    var nombre = $('#name').val().trim();
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var confirmPassword = $('#confirm-password').val().trim();

    if (nombre.length < 3) {
      $('#error-name').text('El nombre debe tener al menos 2 caracteres.').hide().slideDown(300);
      return;
    }

    if (email.length < 3) {
      $('#error-email').text('El email debe tener al menos 3 caracteres.').hide().slideDown(300);
      return;
    }

    if (password.length < 8) {
      $('#error-password').text('La contraseña debe tener al menos 8 caracteres.').hide().slideDown(300);
      return;
    }

    if (password !== confirmPassword) {
      $('#error-confirm-password').text('Las contraseñas no coinciden.').hide().slideDown(300);
      return;
    }
  });
});
