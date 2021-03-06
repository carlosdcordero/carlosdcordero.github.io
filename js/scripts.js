// Pre-cargar imágenes
$.preloadImages = function() {
    for(var i = 0; i<arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
}
$(document).ready(function() {
    $.preloadImages(
        "carlos-cordero.jpg",
        "adrielle-inc.jpg",
        "dolce-angel.jpg",
        "es-moda.jpg",
        "maria-rondon.jpg",
        "mariachi-tequila-show.jpg",
        "mector.jpg"
    );
});

// WOW
$(document).ready(function() {
    new WOW().init();
});

// Animación scroll
$(document).ready(function() {
    $('a[href^="#"]').click(function(){
        var link = $(this);
        var anchor  = link.attr('href');
        $('html, body').stop().animate({
        scrollTop: jQuery(anchor).offset().top
        }, 1000);
        return false;
    });
});

// Ocultar botón arriba
$('.boton-top').addClass('ocultar');

$('.boton-top').click(function(){
    $('body,html').animate({scrollTop : 0}, 500);
    return false;
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $('.boton-top').fadeIn();
    } else {
        $('.boton-top').fadeOut();
    }
});
