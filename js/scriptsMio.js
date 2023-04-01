
/* ===========================================================================
                               MENU DESPLEGABLE
================================================================================*/

/*===========================================================================
                                SCROLL MENU
================================================================================*/
//Asignamos a una variable la posición del scroll
// Selecciona el elemento del menú una sola vez al principio y guárdalo en una variable
const menuElement = document.getElementById("container-fijo");

// Guarda la posición de desplazamiento anterior al principio
let prevScrollpos = document.documentElement.scrollTop;

// Agrega un evento de desplazamiento que llama a la función esconderMostrarMenu
window.addEventListener('scroll', esconderMostrarMenu, { passive: true });

// Función para esconder o mostrar el menú
function esconderMostrarMenu() {
// Obtén la posición de desplazamiento actual
let actualScrollPos = document.documentElement.scrollTop;

// Compara la posición de desplazamiento anterior y actual para determinar si el usuario está desplazándose hacia arriba o hacia abajo
if (prevScrollpos > actualScrollPos) {
// Si el usuario está desplazándose hacia arriba, muestra el menú
menuElement.style.display = "block";
} else {
// Si el usuario está desplazándose hacia abajo, oculta el menú
menuElement.style.display = "none";
}

// Actualiza la posición de desplazamiento anterior a la posición de desplazamiento actual para la próxima vez que se llame a la función
prevScrollpos = actualScrollPos;
}

/* window.addEventListener("load", function () {
	const container = document.getElementById("container-fijo");
	const logo = document.getElementById("logo");
	const menu = document.getElementById("menu");

	function onScroll() {
		const scrollPosition = window.pageYOffset;

		if (scrollPosition > 0 && !container.classList.contains("fixed")) {
      container.classList.add("fixed");
      logo.classList.add("fixed");
      menu.classList.add("fixed");
			logo.style.maxHeight = "50px";
			menu.style.marginTop = "15px";
		} else if (scrollPosition === 0 && container.classList.contains("fixed")) {
			container.classList.remove("fixed");
			logo.style.maxHeight = null;
			menu.style.marginTop = null;
		}
	}

	window.addEventListener("scroll", onScroll);
});
 */

/* ===========================================================================
                                SLIDE HEADER
================================================================================*/
// Obtener el elemento header
const header = document.querySelector("header");

// Crear un array con las imágenes del slideshow
const imagenes = [
	"/img/SlideHeader/1.jpg",
	"/img/SlideHeader/2.jpg",
	"/img/SlideHeader/3.jpg",
	"/img/SlideHeader/4.jpg",
];

// Establecer la duración de cada imagen en milisegundos
const duracion = 3000;

// Iniciar el índice de la imagen en cero
let index = 0;

// Función para cambiar la imagen del slideshow
function cambiarImagen() {
	// Obtener la URL de la imagen actual del array
	const imagenURL = imagenes[index];

	// Actualizar la imagen de fondo del header
	header.style.backgroundImage = `url(${imagenURL})`;

	// Incrementar el índice
	index = (index + 1) % imagenes.length;
}

// Iniciar el slideshow
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

// Utilizamos la delegación de eventos para adjuntar el evento 'click' a un elemento superior
const contenedorLightbox = document.getElementById("imgs-wallpaper");

contenedorLightbox.addEventListener("click", (e) => {
	if (e.target.classList.contains("img-wallpapers")) {
		// Comprueba si el elemento clickeado es una imagen con la clase 'img-wallpapers'

		// Muestra el lightbox
		lightbox.innerHTML = `
			<img src="${e.target.src}" alt="">
			<span class="lightbox-cerrar">&times;</span>
		`;

		lightbox.classList.add("lightbox-activo");

		// Escala la imagen en un 150%
		const img = lightbox.querySelector("img");
		img.style.transform = "scale(2.5)";
	}
});

// Oculta el lightbox cuando se hace clic fuera de él o en la cruz de cerrar

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
const formulario = document.getElementById("formularioContacto"); // Captura el elemento del formulario
const modal = document.getElementById("modal"); // Captura el elemento del modal
const span = document.getElementsByClassName("cerrar")[0]; // Captura el botón para cerrar el modal

// Añadimos eventos al formulario y al botón de cerrar
formulario.addEventListener("submit", abrirModal); // Añade un evento para abrir el modal cuando se envía el formulario
span.addEventListener("click", cerrarModal); // Añade un evento para cerrar el modal cuando se hace clic en el botón de cerrar
window.addEventListener("click", clickFueraDelModal); // Añade un evento para cerrar el modal cuando se hace clic fuera del modal. Usamos window para que el evento se ejecute en cualquier parte de la ventana

// Función para abrir el modal
function abrirModal(event) {
	event.preventDefault(); // Evita que se envíe el formulario
	const nombreModal = document.getElementById("nombreModal"); // Captura el elemento para mostrar el nombre
	const correoModal = document.getElementById("correoModal"); // Captura el elemento para mostrar el correo
	const seleccionModal = document.getElementById("seleccionModal"); // Captura el elemento para mostrar la selección
	const textareaModal = document.getElementById("textareaModal"); // Captura el elemento para mostrar el textarea

	nombreModal.textContent = formulario.nombre.value; // Agrega el valor del nombre al elemento correspondiente del modal
	correoModal.textContent = formulario.correo.value; // Agrega el valor del correo al elemento correspondiente del modal
	seleccionModal.textContent = formulario.seleccion.value; // Agrega el valor de la selección al elemento correspondiente del modal
	textareaModal.textContent = formulario.miTextarea.value; // Agrega el valor del textarea al elemento correspondiente del modal

	modal.style.display = "block"; // Muestra el modal
}

// Función para cerrar el modal
function cerrarModal() {
	modal.style.display = "none"; // Oculta el modal
}

// Función para cerrar el modal si se hace clic fuera de él
function clickFueraDelModal(event) {
	if (event.target == modal) {
		// Comprueba si el objetivo del evento es el modal
		modal.style.display = "none"; // Oculta el modal
	}
}

/* ===========================================================================
                               TOOLTIPS FORMULARIO
================================================================================*/
// Se ha añadido un data tooltip a los elementos que queremos que tengan tooltip.
// Selecciona todos los elementos con el atributo data-tooltip
const tooltips = document.querySelectorAll("[data-tooltip]");

// Crea un div para mostrar el tooltip
const tooltipDiv = document.createElement("div");
tooltipDiv.classList.add("tooltip");

// Recorre todos los elementos y agrega eventos para mostrar y ocultar el tooltip
tooltips.forEach((element) => {
	// Agrega un evento que se activa cuando el cursor pasa sobre el elemento
	element.addEventListener("mouseover", () => {
		// Establece el texto del tooltip como el valor del atributo data-tooltip del elemento
		tooltipDiv.textContent = element.dataset.tooltip;
		// Inserta el tooltip en el DOM justo después del elemento
		element.insertAdjacentElement("afterend", tooltipDiv);
	});
	// Agrega un evento que se activa cuando el cursor sale del elemento
	element.addEventListener("mouseout", () => {
		// Elimina el tooltip del DOM
		tooltipDiv.remove();
	});
});
