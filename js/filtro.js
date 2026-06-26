function filtrar(seccion, btn) {
  document.querySelectorAll('#peliculas .seccion').forEach(function(el) {
    el.style.display = (seccion === 'todos' || el.id === seccion) ? 'block' : 'none';
  });
  document.querySelectorAll('.filtro-btn').forEach(function(b) {
    b.classList.remove('activo');
  });
  btn.classList.add('activo');
}