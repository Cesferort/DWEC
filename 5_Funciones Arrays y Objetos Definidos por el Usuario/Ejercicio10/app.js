let nuevaVentana;

function tipoLetras(input)
{
    let tieneMayus=false;
    let tieneMinus=false;

    for(let i=0;i<input.length;i++)
    {
        let ordLetra=input.charCodeAt(i);
        if(ordLetra<='Z'.charCodeAt(0) && ordLetra>='A'.charCodeAt(0))
            tieneMayus=true;
        if(ordLetra<='z'.charCodeAt(0) && ordLetra>='a'.charCodeAt(0))
            tieneMinus=true;
    }

    let txt="El texto introducido no tiene carácteres alfanuméricos";
    if(tieneMayus==true && tieneMinus==true)
        txt="El texto esta formado tanto por mayúsculas como minúsculas"
    else if(tieneMayus==true)
        txt="El texto esta formado exclusivamente por mayúsculas"
    else if(tieneMinus==true)
        txt="El texto esta formado exclusivamente por minúsculas"

    nuevaVentana=window.open('','_blank','width=300', 'height=300');
    nuevaVentana.document.write('<p>'+txt+'</p>');
    
    nuevaVentana.document.write
    (
        "<button type='button' onClick='window.opener.cerrarVentana()'>Cerrar ventana</button>"
    );
}

function cerrarVentana()
{
    nuevaVentana.close();
}