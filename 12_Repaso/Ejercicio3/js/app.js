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
    eleFigure_figure.style.transition="0.2s";
    eleFigure_figure.style.position="relative";
    eleFigure_figure.style.width="200px";
    eleFigCaption_caption=document.getElementById("caption");

    alignCenter();
    eventos();
}

function eventos()
{
    for(let i=0; i < lista_eleAnchor_imagen.length; i++)
    {
        let eleAnchor_imagen=lista_eleAnchor_imagen[i];
        eleAnchor_imagen.addEventListener("click", anchorImageSelected);
    }
    window.addEventListener("resize", alignCenter);
}

function anchorImageSelected(eventSource)
{
    eleImg_imagen.src=imagenes[eventSource.target.href.split("#")[1]];

    eleAnchor_cerrar=document.createElement("a");
    eleAnchor_cerrar.innerText="[x]Cerrar";
    eleAnchor_cerrar.style.backgroundColor="gray";
    eleAnchor_cerrar.style.color="white";
    eleAnchor_cerrar.addEventListener("click", close);
    eleFigCaption_caption.innerHTML="";
    eleFigCaption_caption.appendChild(eleAnchor_cerrar);

    alignCenter();
}

function alignCenter() 
{
    let windowWidth=window.innerWidth;
    let imgWidth=eleImg_imagen.width;
    let move=windowWidth/2-imgWidth/2;

    eleFigure_figure.style.left=move+"px";
}

function close(eventSource)
{
    eleImg_imagen.src="";
    eventSource.target.parentElement.innerHTML="";
}