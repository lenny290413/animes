<?php
    $destino="lenny290413@gmail.com";
    $correo = $_POST["correo"];
    $contenido = "correo: " . $correo;
    mail($destino,"contacto",$contenido);
    header("location:index.html")
    
?>