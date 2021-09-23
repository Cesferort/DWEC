let centerY = window.screen.height/2;
let centerX = window.screen.width/2;
let nuevaVentana;

function comprobarForm(input)
{
    if(input=="")          
        alert('No se ha introducido un nombre y apellido.');
    else
    {
        nuevaVentana = window.open('','_blank','width=300', 'height=300','top="'+centerY+'"','left="'+centerX+'"');
        nuevaVentana.document.write('<p>Bienvenido '+input+'</p>');
        
        nuevaVentana.document.write
        (
            "<button type='button' onClick='window.opener.empezarNavegar()'>Empezar a navegar</button>"
        );
    }
}

function empezarNavegar()
{
    nuevaVentana.close();
    window.location.href = "https://www.google.es";
}