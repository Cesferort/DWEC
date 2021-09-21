function pedirNombre()
{
    let fecha_pre = new Date();
    let nomUsuario = prompt("Introduce tu nombre:");
    let fecha_post = new Date();
    let tiempoTranscurrido=((fecha_post-fecha_pre)/1000).toFixed(2);

    document.write("<p>Han transcurrido "+tiempoTranscurrido+" segundos.</p>");
}