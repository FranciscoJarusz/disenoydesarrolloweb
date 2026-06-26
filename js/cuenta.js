function ingresar() {
  var usuario = document.getElementById("username").value;
  var contrasena = document.getElementById("password").value;

  if (usuario == "prueba" && contrasena == "1234") {
    window.location.href = "/index.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
