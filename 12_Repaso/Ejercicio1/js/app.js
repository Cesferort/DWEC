let eleDiv_red;
let eleDiv_blue;

window.onload 
{
    eleDiv_red=document.getElementById("red");
    eleDiv_blue=document.getElementById("blue");

    eventos();
}

function eventos()
{
    eleDiv_red.addEventListener("mouseover", mostrar);
    eleDiv_red.addEventListener("mouseout", ocultar);
}

function mostrar() 
{
    eleDiv_blue.style.visibility="visible";
}

function ocultar() 
{
    eleDiv_blue.style.visibility="hidden";
}