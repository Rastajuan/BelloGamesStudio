<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = isset($_POST["nombre"]) ? $_POST["nombre"] : "";
    $correo = isset($_POST["correo"]) ? $_POST["correo"] : "";
    $mensaje = isset($_POST["seleccion"]) ? $_POST["seleccion"] : "";
    $consulta = isset($_POST["miTextarea"]) ? $_POST["miTextarea"] : "";

    // Aquí puedes realizar las validaciones que necesites
    // ...

    // Si todo es correcto, envías el correo o haces lo que necesites
    // ...

    // Luego, puedes redirigir al usuario a una página de confirmación
    header("Location: index.html");
    exit();
}
