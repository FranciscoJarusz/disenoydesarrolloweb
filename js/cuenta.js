function ingresar() {
  var usuario = document.getElementById("username").value;
  var contrasena = document.getElementById("password").value;

  if (usuario == "prueba" && contrasena == "1234") {
    window.location.href = "./index.html";
  } else {
    alert("Usuario o contraseña incorrectos");
    alert("(Solo a motivo de prueba dejamos un usario valido con usuario: \"prueba\" y contraseña: \"1234\")");
  }
}
