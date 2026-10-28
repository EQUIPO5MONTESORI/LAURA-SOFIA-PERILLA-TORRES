
// Seleccionar los botones de idioma
const botonesIdioma = document.querySelectorAll(".lang-button");

// Seleccionar todos los elementos que tienen traducciones
const elementosTraducibles = document.querySelectorAll("[data-es][data-en]");

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    // Cambiar el idioma del documento
    document.documentElement.lang = idioma;

    // Cambiar todos los textos
    elementosTraducibles.forEach(function(elemento) {
        elemento.textContent = elemento.getAttribute("data-" + idioma);
    });

    // Actualizar el estado de los botones
    botonesIdioma.forEach(function(boton) {
        const seleccionado = boton.dataset.lang === idioma;

        boton.setAttribute("aria-pressed", seleccionado);
    });
}

// Escuchar los clics en los botones
botonesIdioma.forEach(function(boton) {
    boton.addEventListener("click", function() {
        cambiarIdioma(boton.dataset.lang);
    });
});


