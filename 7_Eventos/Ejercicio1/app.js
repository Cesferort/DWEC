let lista_eleP_contenidos=[];
let lista_eleA_enlaces=[];

window.onload
{
    lista_eleP_contenidos=document.getElementsByTagName("p");
    lista_eleA_enlaces=document.getElementsByTagName("a");
    eventos();
}

function eventos()
{
    for(let i=0;i<lista_eleA_enlaces.length;i++)
        lista_eleA_enlaces[i].addEventListener("click", listener_eleA_enlace);
}

function listener_eleA_enlace()
{
    let n=this.id.substring(this.id.indexOf('_')+1, this.id.length);
    let eleP_contenido=recuperar_eleP_contenido(n);
    if(this.text.trim()=="Ocultar contenidos")
    {
        eleP_contenido.style.display="none";
        this.text="Mostrar contenidos";
    }
    else
    {
        eleP_contenido.style.display="block";
        this.text="Ocultar contenidos";
    }
}

function recuperar_eleP_contenido(n)
{
    let id_eleP_contenido="contenidos_"+n;
    let eleP_contenido;
    let pEncontrado=false;
    for(let i=0;i<lista_eleP_contenidos.length&&pEncontrado==false;i++)
    {
        eleP_contenido=lista_eleP_contenidos[i];
        if(id_eleP_contenido.trim()==eleP_contenido.id.trim())
            pEncontrado=true;
    }
    return eleP_contenido;
}   