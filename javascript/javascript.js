/* Javascript para la página de Sistemas Informáticos y Lenguaje de Marcas
    author: Iván Torres                 Version: 1.0
*/
$(document).on("scroll", function () { //Esta función es la que se usa para que parezca que desaparecen y aparecen
    var pageTop = $(document).scrollTop() //Las distintas sections de la página.
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")

    for (var i = 0; i < tags.length; i++) {

        var tag = tags[i]

        if ($(tag).position().top < pageBottom) {

            $(tag).addClass("visible")
        } else {

            $(tag).removeClass("visible")
        }
    }
})

function showMenu() { //Cuando se hace click en el menu muestra u oculta el mismo

    var elem = document.getElementById("linkContainer");
    if (elem.style.display == "none") {

        elem.style.float = "right";
        elem.style.display = "grid";
        elem.style.textAlign = "center";

    } else {

        elem.style.display = "none";
    }
}

$(window).resize(function () { //Esto se usa para que cuando se cambie el tamaño de la pantalla al haber abierto el menu
                               //No se quede abierto o desaparezca la barra de navegación
    var elem = document.getElementById("linkContainer");
    if (window.innerWidth > 450) {

        elem.style.display = "initial";
        elem.style.float = "none";
    } else {

        elem.style.display = "none";
    }
});

//Función para que se esconda la barra de navegación se esconda cuando el usuario no haga un scroll hacia arriba
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}