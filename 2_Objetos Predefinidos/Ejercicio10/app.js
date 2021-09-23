let listaNewVentanas = [];

function abrirVentanas()
{   
    for(let numVentana=0;numVentana<5;numVentana++)
    {
        listaNewVentanas[numVentana]=window.open('','_blank','width=200', 'height=200');
        listaNewVentanas[numVentana].document.write
        (
            "<button id='"+numVentana+"' type='button' onClick='window.opener.cerrarVentana("+numVentana+")'>Cerrar ventana</button>"
        );
    }
}

function cerrarVentana(numVentana)
{
    listaNewVentanas[numVentana].close();
}