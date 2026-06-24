const peliculas = [
  {
    titulo: "Lord of War",
    imagen: "/public/peliculasRecienAgregados/lordofwar.jpg",
  },
  { titulo: "Matrix", imagen: "/public/peliculasRecienAgregados/matrix.jpg" },
  {
    titulo: "Outlander",
    imagen: "/public/peliculasRecienAgregados/outlander.webp",
  },
  {
    titulo: "El Resplandor",
    imagen: "/public/peliculasRecienAgregados/elresplandor.jpg",
  },
  {
    titulo: "Zootopia 2",
    imagen: "/public/peliculasRecienAgregados/zootopia2.webp",
  },
  {
    titulo: "Crimen Perfecto",
    imagen: "/public/peliculasCrimen/crimenperfecto.webp",
  },
  {
    titulo: "Ecos de un Crimen",
    imagen: "/public/peliculasCrimen/ecosdeuncrimen.jpg",
  },
  {
    titulo: "La Prueba del Crimen",
    imagen: "/public/peliculasCrimen/lapruebadelcrimen.jpg",
  },
  {
    titulo: "Nueve Reinas",
    imagen: "/public/peliculasCrimen/nuevereinas.webp",
  },
  {
    titulo: "Ruta de Escape",
    imagen: "/public/peliculasCrimen/rutadeescape.webp",
  },
  { titulo: "La Máscara", imagen: "/public/peliculasComedia/lamascara.jpg" },
  {
    titulo: "Padre No Hay Más Que Uno",
    imagen: "/public/peliculasComedia/padrenohaymasqueuno.jpg",
  },
  {
    titulo: "Qué Pasó Ayer",
    imagen: "/public/peliculasComedia/quepasoayer.jpg",
  },
  {
    titulo: "Somos los Miller",
    imagen: "/public/peliculasComedia/somoslosmiller.jpg",
  },
  {
    titulo: "Son Como Niños",
    imagen: "/public/peliculasComedia/soncomoniños.jpg",
  },
  { titulo: "Kingsman", imagen: "/public/peliculasAccion/kingsman.webp" },
  {
    titulo: "Duro de Matar 4.0",
    imagen: "/public/peliculasAccion/durodematar4.0.webp",
  },
  {
    titulo: "Búsqueda Implacable 3",
    imagen: "/public/peliculasAccion/busquedaimplacable3.webp",
  },
  {
    titulo: "Gone in 60 Seconds",
    imagen: "/public/peliculasAccion/gonein60seconds.webp",
  },
  {
    titulo: "El Transportador",
    imagen: "/public/peliculasAccion/eltransportador.webp",
  },
];

const form = document.querySelector(".form-reseñas");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = form.usuario.value.trim();
  const titulo = form.titulo.value.trim();
  const reseña = form.reseña.value.trim();

  let pelicula = null;
  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].titulo.toLowerCase() === titulo.toLowerCase()) {
      pelicula = peliculas[i];
    }
  }

  if (pelicula === null) {
    alert("El título no corresponde a una película disponible en el sitio.");
    return;
  }

  const div = document.createElement("div");
  div.classList.add("reseña-publicada");

  div.innerHTML = `
    <img src="${pelicula.imagen}"/>
    <div>
      <h2>${pelicula.titulo}</h2>
      <span class="usuario">@${usuario}</span>
      <p>${reseña}</p>
    </div>
  `;

  document.getElementById("contenedor-reseñas").appendChild(div);
});
