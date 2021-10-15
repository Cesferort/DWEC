const letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'); 
let eleInputText_dniUser;
let eleInputText_emailUser;
let eleInputText_codPostal;
let eleInputText_fecha;

window.onload
{
    eleInputText_dniUser=document.getElementById("dniUser");
    eleInputText_emailUser=document.getElementById("emailUser");
    eleInputText_codPostal=document.getElementById("codPostal");
    eleInputText_fecha=document.getElementById("fecha");
    eventos();
}

function eventos()
{
    eleInputText_dniUser.addEventListener('focus',limpiarBackground);
    eleInputText_emailUser.addEventListener('focus',limpiarBackground);
    eleInputText_codPostal.addEventListener('focus',limpiarBackground);
    eleInputText_fecha.addEventListener('focus',limpiarBackground);
}

function enviar()
{
    validarDni();
    validarEmail();
    validarCodPostal();
    validarFecha();
}

function limpiar()
{
    eleInputText_dniUser.value="";
    eleInputText_emailUser.value="";
    eleInputText_codPostal.value="";
    eleInputText_fecha.value="";
    limpiarBackground();
}

function limpiarBackground()
{
    eleInputText_dniUser.style.backgroundColor="transparent";
    eleInputText_emailUser.style.backgroundColor="transparent";
    eleInputText_codPostal.style.backgroundColor="transparent";
    eleInputText_fecha.style.backgroundColor="transparent";
}

function validarDni()
{
    let err="El DNI no ha sido introducido con el formato correcto."; 
    let esValido=false;
    let input=eleInputText_dniUser.value.trim();
    let parteNum=input.substr(0,input.length-1);
    let letra=input.substr(input.length-1,input.length);
    if(!isNaN(parteNum))
    {
        parteNum=""+parseInt(parteNum);
        if(parteNum.length==8)
        {
            if(letra==letras[parseInt(parteNum)%23])
                esValido=true;
            else
                err+="\nLa letra introducida no es válida.";
        }
        else
            err+="\nSe esperan 8 dígitos y 1 letra.";
    } 

    if(esValido==false)
        mostrarError(eleInputText_dniUser, err);
}

function validarEmail()
{
    let err="El email no ha sido introducido con el formato correcto."; 
    let esValido=false;
    let input=eleInputText_emailUser.value.trim();

    let emailSeccionado=input.split("@");
    if(emailSeccionado.length==2)
    {
        if(emailSeccionado[0].length>0 && emailSeccionado[1].length>0)
            esValido=true;
    }

    if(esValido==false)
        mostrarError(eleInputText_emailUser, err);
}

function validarCodPostal()
{
    let err="El código postal no ha sido introducido con el formato correcto.\nSe espera 1 número de 5 dígitos."; 
    let esValido=false;
    let input=eleInputText_codPostal.value.trim();
    
    if(!isNaN(input)&&input.length==5)
    {
        if(input.split(".").length==1)
            esValido=true;
    }

    if(esValido==false)
        mostrarError(eleInputText_codPostal, err);
}

function validarFecha()
{
    let err="La fecha no ha sido introducida con el formato correcto (dd/mm/aaaa)."; 
    let esValido=false;
    let input=eleInputText_fecha.value.trim();
    fechaSeccionada=input.split('/');
    if(fechaSeccionada.length==3)
    {
        if(!isNaN(fechaSeccionada[0]) && !isNaN(fechaSeccionada[1]) && !isNaN(fechaSeccionada[2]))
        {
            let anio=parseInt(fechaSeccionada[2]);
            let mes=parseInt(fechaSeccionada[1])-1;
            let dia=parseInt(fechaSeccionada[0]);

            eleInputText_fecha.value=dia+"/"+(mes+1)+"/"+anio;
            esValido=true;
        }
    }

    if(esValido==false)
        mostrarError(eleInputText_fecha, err);
}

function mostrarError(elemento, err)
{
    elemento.style.backgroundColor="rgb(255, 127, 127)";
    alert(err);
}