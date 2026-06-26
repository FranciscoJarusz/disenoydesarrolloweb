$(function () {
  var APIKEY = '67ae630c';
  var debounceTimer;

  $('#titulo').on('input', function () {
    clearTimeout(debounceTimer);
    var query = $(this).val().trim();
    $('#titulo-dropdown').empty().hide();
    $('#titulo-error').hide();

    if (query.length < 2) return;

    debounceTimer = setTimeout(function () {
      $.get('https://www.omdbapi.com/', { apikey: APIKEY, s: query }, function (data) {
        if (data.Response === 'True' && data.Search) {
          var $dropdown = $('#titulo-dropdown').empty();
          $.each(data.Search.slice(0, 6), function (i, item) {
            $('<div class="dropdown-item"></div>')
              .text(item.Title + ' (' + item.Year + ')')
              .on('click', function () {
                $('#titulo').val(item.Title);
                $dropdown.empty().hide();
              })
              .appendTo($dropdown);
          });
          $dropdown.show();
        }
      });
    }, 300);
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.titulo-wrapper').length) {
      $('#titulo-dropdown').hide();
    }
  });

  $('.form-reseñas').on('submit', function (e) {
    e.preventDefault();

    var usuario = $('#usuario').val().trim();
    var titulo = $('#titulo').val().trim();
    var reseña = $('#reseña').val().trim();

    $('#titulo-error').hide();

    $.get('https://www.omdbapi.com/', { apikey: APIKEY, t: titulo }, function (data) {
      var poster;
      if (data.Response === 'True' && data.Poster && data.Poster !== 'N/A') {
        poster = data.Poster;
      } else {
        poster = 'https://placehold.co/100x150?text=Sin+imagen';
        $('#titulo-error')
          .text('No se encontró el póster para ese título.')
          .hide()
          .fadeIn(300);
      }

      var $card = $('<div class="reseña-publicada"></div>');
      var $img = $('<img>').attr('src', poster).attr('alt', titulo);
      var $info = $('<div></div>');
      $info.append(
        $('<h2></h2>').text(titulo),
        $('<span class="usuario"></span>').text('@' + usuario),
        $('<p></p>').text(reseña)
      );
      $card.append($img, $info);
      $('#contenedor-reseñas').append($card);
    }).fail(function () {
      $('#titulo-error')
        .text('Error al conectar con OMDb. Verificá tu conexión a internet.')
        .hide()
        .fadeIn(300);
    });
  });
});
