
/* ===========================================================================
                               MENU DESPLEGABLE
================================================================================*/

/*===========================================================================
                                SCROLL MENU
================================================================================*/
const barraNavegacion = document.getElementById("barraNavegación");
const logo = document.getElementById("logo");
const tamanioLogo = "240px";
const distanciaTop = barraNavegacion.offsetTop;
const enlacesMenu = document.querySelectorAll("#menu li.enlacesMenu a");
const subMenu = document.querySelector(".enlacesMenu > #submenu");
const elementoSubmenu = document.querySelectorAll("#submenu li.elementoSubmenu a");

/* Función que cambia las clases de los elementos de la barra de navegacion */
function cambiarClases() {
	const scrollVertical = window.scrollY;
	const esSuperior = scrollVertical > distanciaTop;
	const esInferior = scrollVertical <= 0;

  //Cuanado el scroll es superior a la distanciaTop, o sea, cuando el scroll baja
	if (esSuperior) {
    barraNavegacion.classList.add("nav-scroll");
    
    logo.classList.add("logo-scroll");
    subMenu.classList.add("submenu-scroll");
    enlacesMenu.forEach((enlace) => {
      enlace.classList.add("enlacesMenu-scroll");
    });
    
  }
  //Cuando la posicion es la inicial
  else if (esInferior) {
		barraNavegacion.classList.remove("nav-scroll");
    logo.classList.remove("logo-scroll");
    subMenu.classList.remove("submenu-scroll");
    enlacesMenu.forEach((enlace) => {
      enlace.classList.remove("enlacesMenu-scroll");
    });
		logo.classList.remove("logo-scroll");
	}
}

// Ponemos en escucha el evento scroll y ejecutamos la función cambiarClases
window.addEventListener("scroll", cambiarClases);

/* ===========================================================================
                                SLIDESHOW HEADER
================================================================================*/
// Obtenemos el elemento header
const header = document.querySelector("header");

// Creamos un array con las imágenes del slideshow
const imagenes = [
	"/img/SlideHeader/5.jpg",
	"/img/SlideHeader/2.jpg",
	"/img/SlideHeader/3.jpg",
	"/img/SlideHeader/4.jpg",
];

// Establecemos la duración de cada imagen en milisegundos
const duracion = 2000;

// Iniciamos el índice de la imagen en cero
let index = 0;

// Función para cambiar la imagen del slideshow
function cambiarImagen() {
	// Obtenemos la URL de la imagen actual del array
	const imagenURL = imagenes[index];

	// Actualizamos la imagen de fondo del header
	header.style.backgroundImage = `url(${imagenURL})`;

	// Incrementamo el índice
	index = (index + 1) % imagenes.length;
}

// Iniciamos el slideshow
setInterval(cambiarImagen, duracion);

/* ===========================================================================
                                PESTAÑAS EQUIPO
================================================================================*/
// Capturamos los contenedores
const programacion = document.querySelector("#containerProgramacion");
const diseno = document.querySelector("#containerDiseno");
const animacion = document.querySelector("#containerAnimacion");

// Capturamos los enlaces
const enlaceProgramacion = document.querySelector("#enlaceProgramacion");
const enlaceDiseno = document.querySelector("#enlaceDiseno");
const enlaceAnimacion = document.querySelector("#enlaceAnimacion");

// Controlador del enlace Programacion
enlaceProgramacion.addEventListener("click", () => {
	enlaceProgramacion.classList.add("seleccionado");
	programacion.classList.add("visible");
	enlaceDiseno.classList.remove("seleccionado");
	enlaceAnimacion.classList.remove("seleccionado");
	diseno.classList.remove("visible");
	diseno.classList.add("invisible");
	animacion.classList.remove("visible");
	animacion.classList.add("invisible");
});

// Controlador del enlace Diseno
enlaceDiseno.addEventListener("click", () => {
	enlaceDiseno.classList.add("seleccionado");
	diseno.classList.add("visible");
	enlaceProgramacion.classList.remove("seleccionado");
	enlaceAnimacion.classList.remove("seleccionado");
	programacion.classList.remove("visible");
	programacion.classList.add("invisible");
	animacion.classList.remove("visible");
	animacion.classList.add("invisible");
});

// Controlador del enlace Animacion
enlaceAnimacion.addEventListener("click", () => {
	enlaceAnimacion.classList.add("seleccionado");
	animacion.classList.add("visible");
	enlaceProgramacion.classList.remove("seleccionado");
	enlaceDiseno.classList.remove("seleccionado");
	programacion.classList.remove("visible");
	programacion.classList.add("invisible");
	diseno.classList.remove("visible");
	diseno.classList.add("invisible");
});

/* ===========================================================================
                               LIGHT BOX WALLPAPERS
================================================================================*/
// Seleccionamos todas las imágenes en el lightbox por clase
const images = document.querySelectorAll(".img-wallpapers");

// Creamos el lightbox como un elemento global en el documento
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

// Creamos un array con todas las imágenes
const imageArray = Array.from(images);

// Creamos una variable para almacenar el índice de la imagen actualmente mostrada
let currentIndex = 0;

// Función para mostrar una imagen en el lightbox
function verImagen(index) {
	// Muestra el lightbox
	lightbox.innerHTML = `
    <img src="${imageArray[index].src}" alt="">
    <div class="lightbox-botones">
  <i class="fas fa-chevron-left lightbox-prev"></i>
  <i class="fas fa-chevron-right lightbox-next"></i>
</div>

    <span class="lightbox-cerrar">&times;</span>
  `;
	lightbox.classList.add("lightbox-activo");

	// Añade un evento 'click' al botón de la imagen anterior
	const prevButton = lightbox.querySelector(".lightbox-prev");
	prevButton.addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
		verImagen(currentIndex);
	});

	// Añade un evento 'click' al botón de la siguiente imagen
	const nextButton = lightbox.querySelector(".lightbox-next");
	nextButton.addEventListener("click", () => {
		currentIndex = (currentIndex + 1) % imageArray.length;
		verImagen(currentIndex);
	});
}


const contenedorLightbox = document.getElementById("imgs-wallpaper");

contenedorLightbox.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-wallpapers")) {
    // Comprueba si el elemento clickeado es una imagen con la clase 'img-wallpapers'
    
    // Obtiene el índice de la imagen clickeada
    currentIndex = imageArray.indexOf(e.target);
    
    // Muestra la imagen clickeada en el lightbox
    verImagen(currentIndex);
  }
});

// Oculta el lightbox cuando se hace clic fuera de él (dentro del div) o en la cruz de cerrar
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.classList.contains("lightbox-cerrar")) {
    lightbox.classList.remove("lightbox-activo");
    document.body.style.overflow = "auto";
  }
});

/* ===========================================================================
                                MODAL FORMULARIO
================================================================================*/

// Capturamos los elementos del DOM
const formulario = document.getElementById("formularioContacto"); // Elemento formulario
const modal = document.getElementById("modal"); // Elemento  modal
const span = document.getElementById("cerrar"); // Cruz para cerrar el modal
const enviarDesdeModal = document.getElementById("enviarDesdeModal"); // Botón "Enviar" del modal

// Añadimos eventos a la escucha al formulario,al botón de cerrar y al hacer clic fuera del modal
formulario.addEventListener("submit", abrirModal); // Evento para abrir el modal cuando se envía el formulario
span.addEventListener("click", cerrarModal); //Evento para cerrar el modal cuando se hace clic en el botón de cerrar
// window.addEventListener("click", clickFueraDelModal); // Evento para cerrar el modal cuando se hace clic fuera del modal. Usamos window para que el evento se ejecute en cualquier parte de la ventana

// Función para abrir el modal
function abrirModal(e) {
  e.preventDefault(); // Evitamos que se envíe el formulario
  
  // Capturamos los elementos del DOM del modal
	const nombreModal = document.getElementById("nombreModal"); 
	const correoModal = document.getElementById("correoModal"); 
	const seleccionModal = document.getElementById("seleccionModal"); 
  const textareaModal = document.getElementById("textareaModal"); 
  
  // Asignamos los valores de los campos del formulario al modal
	nombreModal.textContent = formulario.nombre.value; 
	correoModal.textContent = formulario.correo.value; 
	seleccionModal.textContent = formulario.seleccion.value; 
	textareaModal.textContent = formulario.miTextarea.value; 

	modal.style.display = "block"; // Muestra el modal
	
	enviarDesdeModal.addEventListener("click", cerrarModalEnviar); // Añade un evento para cerrar el modal cuando se hace clic en el botón "Enviar"
}

// Función para cerrar el modal
function cerrarModal() {
	modal.style.display = "none"; // Oculta el modal
}
// Función para cerrar el modal si se hace clic fuera de él
/* function clickFueraDelModal(event) {
	if (event.target == modal) {
		// Comprueba si el objetivo del evento es el modal
		modal.style.display = "none"; // Oculta el modal
	}
} */

// Función para cerrar el modal y enviar el formulario
function cerrarModalEnviar(){
  modal.style.display = "none"; // Oculta el modal
  // alert("Formulario enviado");
  formulario.submit();
  
}



/* ===========================================================================
                               TOOLTIPS FORMULARIO
================================================================================ */
// Se ha añadido un data tooltip a los elementos que queremos que tengan tooltip.
// Seleccionamos todos los elementos con el atributo data-tooltip
const tooltips = document.querySelectorAll("[data-tooltip]");

// Creamos un div para mostrar el tooltip
const tooltipDiv = document.createElement("div");
tooltipDiv.classList.add("tooltip");

// Recorremos todos los elementos y agrega eventos para mostrar y ocultar el tooltip
tooltips.forEach((element) => {
	// Agregamos un evento que se activa cuando el cursor pasa sobre el elemento
	element.addEventListener("mouseover", () => {
		// Establecemos el texto del tooltip como el valor del atributo data-tooltip del elemento
		tooltipDiv.textContent = element.dataset.tooltip;
		// Insertamos el tooltip en el DOM justo después del elemento
		element.insertAdjacentElement("afterend", tooltipDiv);
	});
	// Agregamos un evento que se activa cuando el cursor sale del elemento
	element.addEventListener("mouseout", () => {
		// Eliminamos el tooltip del DOM
		tooltipDiv.remove();
	});
});
/* ===========================================================================
                               CARACTERES TEXTAREA
================================================================================ */
const textarea = document.getElementById("textarea");
const caracteres = document.getElementById("caracteres");

textarea.addEventListener("input", function () {
	const longitud = this.value.length;
	const maximo = 500;
	caracteres.textContent = `Caracteres restantes: ${maximo-longitud}/${maximo}`;
	if (longitud > (maximo-1)) {
    caracteres.classList.add("rojo");
    caracteres.innerText = "Has alcanzado el límite de caracteres";
	} else {
		caracteres.classList.remove("rojo");
	}
});
