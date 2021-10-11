let letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'); 

function validar(input)
{
    let parteNum=input.substr(0,input.length-1);
    let letra=input.substr(input.length-1,input.length);

    if(!isNaN(parteNum) && isNaN(letra) && input.length==9)
    {
        if(letras[parseInt(parteNum)%23]==letra.toUpperCase())
            alert("El DNI introducido es correcto");
        else
            alert("La letra indicada no es correcta");
    }
    else
        alert("Introduce un DNI formateado correctamente. 8 números y 1 letra");
}