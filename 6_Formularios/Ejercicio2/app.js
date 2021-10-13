let listaRadiosProcesador=[];
let listaRadiosOS=[];

window.onload=function()
{
    listaRadiosProcesador=document.getElementsByClassName("radioProcesador");
    listaRadiosOS=document.getElementsByClassName("radioOS");
}

function enviar()
{
    let txt="Has seleccionado el procesador ";
    let radButEncontrado;
    for(let i=0,radButEncontrado=false;i<listaRadiosProcesador.length;i++)
    {
        if(listaRadiosProcesador[i].checked==true)
        {
            txt+=listaRadiosProcesador[i].value;
            radButEncontrado=true;
        }
    }

    txt+=" con sistema operativo ";
    for(let i=0,radButEncontrado=false;i<listaRadiosOS.length&&radButEncontrado==false;i++)
    {
        if(listaRadiosOS[i].checked==true)
        {
            txt+=listaRadiosOS[i].value;
            radButEncontrado=true;
        }
    }
    alert(txt);
}

function limpiar()
{
    for(let i=0;i<listaRadiosProcesador.length;i++)
    {
        if(listaRadiosProcesador[i].value=="Mac Pro 2.0 Mhz")
            listaRadiosProcesador[i].checked=true;
    }
    for(let i=0;i<listaRadiosOS.length;i++)
    {
        if(listaRadiosOS[i].value=="Windows XP")
            listaRadiosOS[i].checked=true;
    }
}