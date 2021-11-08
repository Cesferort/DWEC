/**
 * VENTANAS
 */
let listaNewVentanas = [];
function abrirVentanas()
{   
    for(let numVentana=0;numVentana<5;numVentana++)
    {
        listaNewVentanas[numVentana]=window.open('','_blank','width=200', 'height=200');
        // En caso de quererla centrada
        // let centerY = window.screen.height/2;
        // let centerX = window.screen.width/2;
        // nuevaVentana = window.open('','_blank','width=300', 'height=300','top="'+centerY+'"','left="'+centerX+'"');
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