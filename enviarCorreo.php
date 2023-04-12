<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["seleccion"];
    $consulta = $_POST["miTextarea"];

    $para = "jbellof@gmail.com"; 
    $asunto = "Consulta del formulario de contacto";
    $mensaje_completo = "Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje."\nConsulta: ".$consulta;

    // Envíamos el correo
    mail($para, $asunto, $mensaje_completo);

    // Redirigimos al usuario a una página de confirmación
    header("Location: confirmacion.html");
    exit();
}
?>

