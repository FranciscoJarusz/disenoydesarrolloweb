$(function () {
  var peliculas = [
    { titulo: "Lord of War", imagen: "./public/peliculasRecienAgregados/lordofwar.jpg" },
    { titulo: "Matrix", imagen: "./public/peliculasRecienAgregados/matrix.jpg" },
    { titulo: "Outlander", imagen: "./public/peliculasRecienAgregados/outlander.webp" },
    { titulo: "El Resplandor", imagen: "./public/peliculasRecienAgregados/elresplandor.jpg" },
    { titulo: "Zootopia 2", imagen: "./public/peliculasRecienAgregados/zootopia2.webp" },
    { titulo: "Crimen Perfecto", imagen: "./public/peliculasCrimen/crimenperfecto.webp" },
    { titulo: "Ecos de un Crimen", imagen: "./public/peliculasCrimen/ecosdeuncrimen.jpg" },
    { titulo: "La Prueba del Crimen", imagen: "./public/peliculasCrimen/lapruebadelcrimen.jpg" },
    { titulo: "Nueve Reinas", imagen: "./public/peliculasCrimen/nuevereinas.webp" },
    { titulo: "Ruta de Escape", imagen: "./public/peliculasCrimen/rutadeescape.webp" },
    { titulo: "La Máscara", imagen: "./public/peliculasComedia/lamascara.jpg" },
    { titulo: "Padre No Hay Más Que Uno", imagen: "./public/peliculasComedia/padrenohaymasqueuno.jpg" },
    { titulo: "Qué Pasó Ayer", imagen: "./public/peliculasComedia/quepasoayer.jpg" },
    { titulo: "Somos los Miller", imagen: "./public/peliculasComedia/somoslosmiller.jpg" },
    { titulo: "Son Como Niños", imagen: "./public/peliculasComedia/soncomoniños.jpg" },
    { titulo: "Kingsman", imagen: "./public/peliculasAccion/kingsman.webp" },
    { titulo: "Duro de Matar 4.0", imagen: "./public/peliculasAccion/durodematar4.0.webp" },
    { titulo: "Búsqueda Implacable 3", imagen: "./public/peliculasAccion/busquedaimplacable3.webp" },
    { titulo: "El Transportador", imagen: "./public/peliculasAccion/eltransportador.webp" },
  ];

  $('.form-reseñas').on('submit', function (e) {
    e.preventDefault();

    var usuario = $('#usuario').val().trim();
    var titulo = $('#titulo').val().trim();
    var reseña = $('#reseña').val().trim();

    var pelicula = null;
    $.each(peliculas, function (i, p) {
      if (p.titulo.toLowerCase() === titulo.toLowerCase()) {
        pelicula = p;
      }
    });

    if (pelicula === null) {
      alert('El título no corresponde a una película disponible en el sitio.');
      return;
    }

    var $card = $('<div>').addClass('reseña-publicada');
    var $img = $('<img>').attr('src', pelicula.imagen);
    var $info = $('<div>').append(
      $('<h2>').text(pelicula.titulo),
      $('<span>').addClass('usuario').text('@' + usuario),
      $('<p>').text(reseña)
    );
    $card.append($img, $info);
    $('#contenedor-reseñas').append($card);

    $(this)[0].reset();
  });
});
