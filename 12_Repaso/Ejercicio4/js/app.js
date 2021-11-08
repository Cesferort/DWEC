let imagenes=
[
    "../recursos/ancares.jpg",
    "../recursos/basel.jpg",
    "../recursos/cabra.jpg",
    "../recursos/madridbanco.jpg"
];
let lista_eleAnchor_imagen;
let eleImg_imagen;
let eleFigure_figure;
let eleFigCaption_caption;
let eleAnchor_cerrar;

window.onload
{
    lista_eleAnchor_imagen=document.getElementsByClassName("idImg");
    eleImg_imagen=document.getElementById("imagen");
    eleFigure_figure=document.getElementById("figure");
    eleFigure_figure.style.transition="1s";
    eleFigure_figure.style.position="relative";
    eleFigure_figure.style.width="200px";
    eleFigCaption_caption=document.getElementById("caption");

    eventos();
}

function eventos()
{
    for(let i=0; i < lista_eleAnchor_imagen.length; i++)
    {
        let eleAnchor_imagen=lista_eleAnchor_imagen[i];
        eleAnchor_imagen.addEventListener("click", anchorImageSelected);
    }
    window.addEventListener("resize", alignAfterResize);
}

// Esta función es una guarrada, una chapuza y mil cosas más. Ni entiendo lo que el ejercicio
// pide, ni lo que el enunciado desea que haga para resolverlo. Así se queda
function anchorImageSelected(eventSource)
{
    eleAnchor_cerrar=document.createElement("a");
    eleAnchor_cerrar.innerText="[x]Cerrar";
    eleAnchor_cerrar.style.backgroundColor="gray";
    eleAnchor_cerrar.style.color="white";
    eleAnchor_cerrar.style.opacity="0";
    eleAnchor_cerrar.style.transition="1s";
    eleAnchor_cerrar.addEventListener("click", close);
    eleFigCaption_caption.innerHTML="";
    eleFigCaption_caption.appendChild(eleAnchor_cerrar);

    let windowWidth=window.innerWidth;
    let imgWidth=eleImg_imagen.width;
    let move=windowWidth/2-imgWidth/2;

    eleFigure_figure.style.opacity="0";
    setTimeout(function()
    {
        eleFigure_figure.style.left="-100%";
        eleImg_imagen.src=imagenes[eventSource.target.href.split("#")[1]];
    }, 1000);
    setTimeout(function()
    {
        eleFigure_figure.style.opacity="1";
        eleAnchor_cerrar.style.opacity="1";
        eleFigure_figure.style.left=move+"px";
    }, 2000);
}

function close(eventSource)
{
    eleImg_imagen.src="";
    eventSource.target.parentElement.innerHTML="";
}

function alignAfterResize()
{
    let windowWidth=window.innerWidth;
    let imgWidth=eleImg_imagen.width;
    let move=windowWidth/2-imgWidth/2;

    eleFigure_figure.style.left=move+"px";
}