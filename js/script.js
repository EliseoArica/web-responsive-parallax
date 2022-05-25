// Efecto Parallax
window.onscroll = function () {
    // window.pageYOffset obtiene el movimiento del scroll en "Y"
    // pageYOffset es un alias de window.scrollY y está descontinuado
    // por otro lado, document.documentElement.scrollTop devuelve el mismo resultado
    var position = window.pageYOffset || document.documentElement.scrollTop;
    var elem1 = document.querySelector('.banner__icon-heart');
    var elem2 = document.querySelector('.banner__icon-fire');
    elem1.style.bottom = position * 0.12 + "px";
    elem2.style.top = position * 0.18 + "px";
}

// EXPLICACIÓN:
// A medida que hacemos scroll-down el valor de "position" aumenta
// Este valor es muy alto para pasarlo como position, por consiguiente,
// Disminuimos su valor en un 82%
// De esta manera, cuando se haga scroll-down en la página:
// el elemento1 subirá de posición y el elemento2 bajará