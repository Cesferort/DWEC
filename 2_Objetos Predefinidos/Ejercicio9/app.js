let centerY = window.screen.height/2;
let centerX = window.screen.width/2;

function comprobarForm(input)
{
    let nuevaVentana;

    // Vacío
    if(input=="")          
        alert('No se ha introducido un nombre y apellido.');
    else
    {
        nuevaVentana = window.open('','width=300 height=300','top="'+centerY+'"','left="'+centerX+'"');
        
        nuevaVentana.document.write('<p>Bienvenido '+input+'</p>');
        let arg='<button type="button" onClick=window.close()>Empezar a navegar</button>';
        nuevaVentana.document.write(arg);

        // TODO Cerrar nueva ventana y hacer cambios en primera ventana
    }
}