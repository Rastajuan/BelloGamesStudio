const programacion = document.querySelector("#containerProgramacion");
const diseno = document.querySelector("#containerDiseno");
const animacion = document.querySelector("#containerAnimacion");

const enlaceProgramacion = document.querySelector("#enlaceProgramacion");
const enlaceDiseno = document.querySelector("#enlaceDiseno");
const enlaceAnimacion = document.querySelector("#enlaceAnimacion");

enlaceProgramacion.addEventListener("click", () => {
	programacion.classList.add("visible");
	diseno.classList.remove("visible");
	diseno.classList.add("invisible");
	animacion.classList.remove("visble");
	animacion.classList.add("invisible");
});

enlaceDiseno.addEventListener("click", () => {
	diseno.classList.add("visible");
	programacion.classList.remove("visible");
	programacion.classList.add("invisible");
	animacion.classList.remove("visble");
	animacion.classList.add("invisible");
});

enlaceAnimacion.addEventListener("click", () => {
	animacion.classList.add("visible");
	diseno.classList.remove("visible");
	diseno.classList.add("invisible");
	programacion.classList.remove("visible");
	programacion.classList.add("invisible");
});
