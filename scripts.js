$(document).ready(function () {
  $(".products-hover").hide();
  $(".gallery-fotos-ny").hide();
  $(".gallery-fotos-utica").hide();
});

$(".index-products-img").mouseover(function () {
  $(".products-hover").fadeIn("fast");
});
$(".index-products-img").mouseleave(function () {
  $(".products-hover").fadeOut("fast");
});

$(".gallery-menu").click(function () {
  $(".gallery-menu").removeClass("active");
  $(this).addClass("active");
});

$("#ny").click(function () {
  $(".gallery-all").slideUp("fast");
  $(".gallery-fotos-ny").slideDown();
});
$("#scranton").click(function () {
  $(".gallery-all").slideUp("fast");
  $(".gallery-fotos-scranton").slideDown();
});
$("#utica").click(function () {
  $(".gallery-all").slideUp("fast");
  $(".gallery-fotos-utica").slideDown();
});