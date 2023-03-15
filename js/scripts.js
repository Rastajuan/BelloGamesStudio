// PESTAÑAS EQUIPO
// Containers
const programacion = document.querySelector("#containerProgramacion");
const diseno = document.querySelector("#containerDiseno");
const animacion = document.querySelector("#containerAnimacion");

// Enlaces
const enlaceProgramacion = document.querySelector("#enlaceProgramacion");
const enlaceDiseno = document.querySelector("#enlaceDiseno");
const enlaceAnimacion = document.querySelector("#enlaceAnimacion");

// Programacion
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

// Diseño
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

// Animacion
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
