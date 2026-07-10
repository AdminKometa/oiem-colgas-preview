console.log("menu");

/*$(document).ready(listo);

function listo() {
  $(".hamb").click(function(e) {
    e.preventDefault();
    $("#menu .columna-65 .container-m").toggleClass("open");
    $("#menu .columna-65 .marco-menu").toggleClass("open");
    $(".hamb i").toggleClass("fal fa-times");
  });

  $("#menu .columna-65 .container-m a").click(function() {

    $("#menu .columna-65 .container-m").removeClass("open");
    $("#menu .columna-65 .marco-menu").removeClass("open");
    $(".hamb i").removeClass("fal fa-times");
    var dev = jQuery(this).attr("href");

    jQuery("html, body").animate({
      "scrollTop": jQuery(dev).offset().top
    })
  });

}*/



$(document).ready(function() {

  $(".hamb").on('click', function(e) {
    e.preventDefault();
    $("#menu .columna-65 .container-m").toggleClass("open");
    $("#menu .columna-65 .marco-menu").toggleClass("open");
    //$("#menu .columna-65 .container-m").show();
    $(".hamb i").toggleClass("fal fa-times");
    return false;
  });

  $(".container-m").on('click', function() {
    $("#menu .columna-65 .container-m").removeClass("open");
    $("#menu .columna-65 .marco-menu").removeClass("open");
    //$("#menu .columna-65 .container-m").hide();
    $(".hamb i").removeClass("fal fa-times");
    //return false;
    var dev = $(this).attr("href");

    //$("html, body").animate({
      //"scrollTop": $(dev).offset().top
    //})
  });

  $("body").on('click', function() {
    $("#menu .columna-65 .container-m").removeClass("open");
    $("#menu .columna-65 .marco-menu").removeClass("open");
    $(".hamb i").removeClass("fal fa-times");
    //$("#submenu").hide();
    //return false;
  });

});


/*----------------------scroll----------------------*/
