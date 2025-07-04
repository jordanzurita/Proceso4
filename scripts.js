$(document).ready(function () {
  let index = 0;
  let imagenes = $(".banner-img");

  setInterval(function () {
    imagenes.eq(index).fadeOut(1000);
    index = (index + 1) % imagenes.length;
    imagenes.eq(index).fadeIn(1000);
  }, 3000);
});
