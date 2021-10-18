let listaOpciones=[];

window.onload=function()
{
    listaOpciones=document.getElementsByClassName("chk");
}

function enviar()
{
    let txt="";
    for(let i=0;i<listaOpciones.length;i++)
    {
        if(listaOpciones[i].checked==true)
            txt+="*"+listaOpciones[i].value+"\n";
    }
    if(txt=="")
        alert("No has seleccionado ninguna opción.")
    else
        alert("Has seleccionado las opciones:\n"+txt);
}

function limpiar()
{
    for(let i=0;i<listaOpciones.length;i++)
        listaOpciones[i].checked=false;
}