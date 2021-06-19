$( document ).ready(function() {
    $(".products-hover").hide();
    // $(".texto-gallery").hide();
});

$(".index-products-img").mouseover(function() {
    $(".products-hover").fadeIn("fast");
  });
$(".index-products-img").mouseleave(function() {
    $(".products-hover").fadeOut("fast");
  });