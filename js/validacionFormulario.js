const formulario = document.getElementById("formularioContacto");

/*====Campos del formulario====*/

// Correo ✉
const correoInput = document.getElementById("correo");
function validarCorreo() {
	const correo = correoInput.value.trim();
	if (correo === "") {
		mostrarError("correoError", "El campo Correo es obligatorio");
		return false;
	}
	if (!/^\S+@\S+\.\S{2,}$/.test(correo)) {
		mostrarError("correoError", "Escriba un formato de correo correcto");
		return false;
	}
	ocultarError("correoError");
	return true;
}

//Nombre
const nombreInput = document.getElementById("nombre");
function validarNombre() {
	const nombre = nombreInput.value.trim();
	const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑçÇ\s'-]*$/u;

	if (nombre === "") {
		mostrarError("nombreError", "El campo nombre es obligatorio");
		return false;
	}

	if (nombre.length < 2) {
		mostrarError(
			"nombreError",
			"El nombre ha de tener al menos dos caracteres"
		);
		return false;
	}
	if (!pattern.test(nombre)) {
		mostrarError(
			"nombreError",
			"El formato del campo nombre es incorrecto (solo caracteres alfabéticos)"
		);
		return false;
	}

	ocultarError("nombreError");
	return true;
}

// Mensaje 📝
const mensajeInput = document.getElementById("mensaje");
function validarMensaje() {
	const mensaje = mensajeInput.value.trim();
	if (mensaje === "" || mensaje.length < 10) {
		mostrarError(
			"mensajeError",
			"El mensaje debe contener al menos 10 caracteres"
		);
		return false;
	}
	ocultarError("mensajeError");
	return true;
}

//Textarea
const textareaInput = document.getElementById("textarea");
function validarTextarea() {
	const texto = textareaInput.value.trim();

	if (texto === "") {
		mostrarError("textareaError", "El campo de texto es obligatorio");
		return false;
	}

	if (texto.length < 10) {
		mostrarError(
			"textareaError",
			"El campo de texto ha de tener al menos diez caracteres"
		);
		return false;
	}
	ocultarError("textareaError");
	return true;
}

//Funciones para mostrar y ocultar errores
function mostrarError(id, mensaje) {
	const div = document.getElementById(id);
	div.textContent = mensaje;
	div.style.display = "block";
}

function ocultarError(id) {
	const div = document.getElementById(id);
	div.style.display = "none";
}

//Función para validar el formulario
formulario.addEventListener("submit", (event) => {
	if (!validarCorreo()) {
		event.preventDefault();
		correoInput.focus();
		return false;
	}

	if (!validarNombre()) {
		event.preventDefault();
		nombreInput.focus();
		return false;
	}

	if (!validarMensaje()) {
		event.preventDefault();
		mensajeInput.focus();
		return false;
	}

	if (!validarTextarea()) {
		event.preventDefault();
		textareaInput.focus();
		return false;
	}
});

//Funciones para validar cada campo
correoInput.addEventListener("input", validarCorreo);
nombreInput.addEventListener("input", validarNombre);
mensajeInput.addEventListener("input", validarMensaje);
textareaInput.addEventListener("input", validarTextarea);
