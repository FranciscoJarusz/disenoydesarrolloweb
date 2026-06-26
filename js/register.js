const form = document.querySelector(".form-register");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 2 caracteres");
    return;
  }

  if (email.length < 3) {
    alert("El email debe tener al menos 3 caracteres");
    return;
  }

  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  alert("¡Registrado correctamente!");
  window.location.href = "./index.html";
});
