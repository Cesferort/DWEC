const letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'); 
const mes_maxDias=[31,[28,29],31,30,31,30,31,31,30,31,30,31];

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

    if(!/^\d{8}[a-zA-Z]$/.test(input))
        mostrarError(eleInputText_dniUser, err);
    else 
    {
        let parteNum=input.substr(0,input.length-1);
        let letra=input.substr(input.length-1,input.length);
        if(!isNaN(parteNum))
        {
            parteNum=""+parseInt(parteNum);
            if(letra==letras[parseInt(parteNum)%23])
                esValido=true;
            else
                err+="\nLa letra introducida no es válida.";
        } 
    }
    
    if(esValido==false)
        mostrarError(eleInputText_emailUser, err);
}

function validarEmail()
{
    let err="El email no ha sido introducido con el formato correcto."; 
    let input=eleInputText_emailUser.value.trim();

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
        mostrarError(eleInputText_emailUser, err);
}

function validarCodPostal()
{
    let err="El código postal no ha sido introducido con el formato correcto.\nSe espera 1 número de 5 dígitos."; 
    let input=eleInputText_codPostal.value.trim();
    
    if(!/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(input))
        mostrarError(eleInputText_codPostal, err);
}

function validarFecha()
{
    let err="La fecha no ha sido introducida con el formato correcto (dd/mm/aaaa)."; 
    let input=eleInputText_fecha.value.trim();

    /* Expresión ofrecida en los apuntes */
    // if (!/^\d{2}\/\d{2}\/\d{2,4}$/.test(input)) 
    // mostrarError(eleInputText_fecha, err);

    /* 
    Expresión más funcional que tiene en cuenta años bisiestos
    Fuente: https://es.stackoverflow.com/questions/59516/validar-una-fecha-dd-mm-aaaa-con-expresiones-regulares/59825
    */
    if (!/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(input))
        mostrarError(eleInputText_fecha, err);
}

function mostrarError(elemento, err)
{
    elemento.style.backgroundColor="rgb(255, 127, 127)";
    alert(err);
}