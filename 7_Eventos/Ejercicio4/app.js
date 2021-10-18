let eleImg_efectoRollover;

window.onload
{
    eleImg_efectoRollover=document.getElementById("efectoRollover");
    eventos();
}

function eventos()
{
    eleImg_efectoRollover.addEventListener("mouseenter", cambiarImg);
    eleImg_efectoRollover.addEventListener("mouseleave", cambiarImg);
}

function cambiarImg(eventSource)
{
    if(eventSource.type=="mouseenter")
        eleImg_efectoRollover.src="./imagenes/imagen2.png";
    else if(eventSource.type=="mouseleave")
        eleImg_efectoRollover.src="./imagenes/imagen1.png";
}