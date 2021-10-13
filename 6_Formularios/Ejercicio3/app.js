let eleSelect_Procesador;
let eleSelect_OS;

window.onload
{
    eleSelect_Procesador=document.getElementById("selectProcesador");
    eleSelect_OS=document.getElementById("selectOS");
}

function enviar()
{
    let indexSelectedProcesador=eleSelect_Procesador.selectedIndex;
    let txtProcesador=eleSelect_Procesador[indexSelectedProcesador].value;
    
    let listaOSElegidos=[];
    let contOS=0;

    let listaOptions=eleSelect_OS.getElementsByTagName('option');
    for(let i=0;i<listaOptions.length;i++)
    {
        let eleOption=listaOptions[i];
        if(eleOption.selected==true)
            listaOSElegidos[contOS++]=eleOption.value;
    }

    let txtOS="";
    for(let i=0;i<listaOSElegidos.length;i++)
    {
        if(i==listaOSElegidos.length-3)
            txtOS+=listaOSElegidos[i]+", ";
        else if(i==listaOSElegidos.length-2)
                txtOS+=listaOSElegidos[i]+" y ";
        else
            txtOS+=listaOSElegidos[i];
    }

    alert("Ha seleccionado el procesador "+txtProcesador+" con sistema operativo "+txtOS);
}

function limpiar()
{
    eleSelect_Procesador.getElementsByTagName('option')[2].selected=true;

    let listaOptionsOS=eleSelect_OS.getElementsByTagName('option');
    for(let i=0;i<listaOptionsOS.length;i++)
        listaOptionsOS[i].selected=false;
    listaOptionsOS[1].selected=true; 
}