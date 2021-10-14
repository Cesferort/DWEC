const letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'); 
const provincias = 
[
    "Elegir provincia",
    "Alava",
    "Bizkaia",
    "Gipuzkoa"
];

let eleDiv_datos;
let eleInputTxt_nomUser;
let eleInputTxt_dniUser;
let eleInputTxt_letraDniUser;
let eleInputPassword_passUser;
let eleTextArea_opinion;
let eleInputTxt_maxOpinion;
let eleCheckbox_mayorEdad;
let eleSelect_provincias;
let eleListaRadio_sexoUser=[];
let eleListaRadio_sueldoUser=[];
let eleFile_fichero;

window.onload
{
    eleDiv_datos=document.getElementById("datos");
    eleInputTxt_nomUser=document.getElementById("nomUser");
    eleInputTxt_dniUser=document.getElementById("dniUser");
    eleInputTxt_letraDniUser=document.getElementById("letraDniUser");
    eleInputPassword_passUser=document.getElementById("passUser");
    eleTextArea_opinion=document.getElementById("opinion");
    eleInputTxt_maxOpinion=document.getElementById("maxOpinion");
    eleCheckbox_mayorEdad=document.getElementById("mayorEdad");
    eleSelect_provincias=document.getElementById("provincias");
    eleListaRadio_sexoUser=document.getElementsByName("sexoUser");
    eleListaRadio_sueldoUser=document.getElementsByName("sueldoUser");
    eleFile_fichero=document.getElementById("fichero");

    eventos();
}

function eventos()
{
    eleInputTxt_dniUser.addEventListener("blur", comprobarDni);
    eleInputTxt_maxOpinion.addEventListener("blur", comprobarMaxOpinion);
}

function comprobarDni()
{
    const err="Introduce un DNI formateado correctamente. 8 números";
    let esValido=true;

    let input=eleInputTxt_dniUser.value;
    if(!isNaN(input))
    {
        input=""+parseInt(input);
        if(input.length==8)
        {
            eleInputTxt_letraDniUser.value=letras[parseInt(input)%23];
            eleInputTxt_letraDniUser.style.backgroundColor="green";
        }
        else
            esValido=false;
    } 
    else
        esValido=false;

    if(esValido==false)
    {
        alert(err);
        eleInputTxt_dniUser.value="";
    }
}

function comprobarMaxOpinion()
{
    const err="Debes introducir un número válido y superior a 0";
    
    let input=eleInputTxt_maxOpinion.value;
    if(!isNaN(input) && input>0)
    {
        input=parseInt(input);
        eleInputTxt_maxOpinion.value=input;
        eleTextArea_opinion.maxLength=input;
        eleTextArea_opinion.value=eleTextArea_opinion.value.substring(0,input);
    } 
    else
    {
        alert(err);
        eleInputTxt_maxOpinion.value=50;
    }
}

function enviar()
{
    let datosValidos=true;
    if(eleInputTxt_nomUser.value.trim()=="")
    {
        alert("No se ha introducido un nombre de usuario");
        datosValidos=false;
    }
    if(eleInputTxt_dniUser.value.trim()=="")
    {
        alert("No se ha introducido un DNI de usuario");
        datosValidos=false;
    }
    if(eleInputPassword_passUser.value.trim()=="")
    {
        alert("No se ha introducido una contraseña de usuario");
        datosValidos=false;
    }
    let sexoElegido=false;
    for(let i=0;i<eleListaRadio_sexoUser.length;i++)
    {
        let eleRadio_sexoUser=eleListaRadio_sexoUser[i];
        if(eleRadio_sexoUser.checked==true)
            sexoElegido=true;
    }
    if(sexoElegido==false)
    {
        alert("No se ha seleccionado un sexo");
        datosValidos=false;
    }
    if(eleSelect_provincias.selectedIndex==0)
    {
        alert("No se ha seleccionado una provincia");
        datosValidos=false;
    }

    if(datosValidos==true)
        dibujarFormDatos();
}

function dibujarFormDatos()
{
    limpiar();
    let eleTitulo=document.createElement("h2");
    eleTitulo.innerHTML="Datos del formulario";
    let eleNombre=document.createElement("p");
    eleNombre.innerHTML="<strong>Nombre: </strong>"+eleInputTxt_nomUser.value;
    let eleDni=document.createElement("p");
    eleDni.innerHTML="<strong>DNI: </strong>"+eleInputTxt_dniUser.value+eleInputTxt_letraDniUser.value;
    let eleClave=document.createElement("p");
    eleClave.innerHTML="<strong>Clave: </strong>"+eleInputPassword_passUser.value;
    let eleOpinion=document.createElement("p");
    eleOpinion.innerHTML="<strong>Opinion: </strong>"+eleTextArea_opinion.value;
    let eleMaxOpinion=document.createElement("p");
    eleMaxOpinion.innerHTML="<strong>Longitud de la opinion: </strong>"+eleInputTxt_maxOpinion.value;
    let eleMayorEdad=document.createElement("p");
    if(eleCheckbox_mayorEdad.checked==true)
        eleMayorEdad.innerHTML="<strong>SI</strong> es mayor de edad";
    else
        eleMayorEdad.innerHTML="<strong>NO</strong> es mayor de edad";
    let eleSexo=document.createElement("p");
    let sexo="";
    for(let i=0;i<eleListaRadio_sexoUser.length;i++)
    {
        let eleRadio_sexoUser=eleListaRadio_sexoUser[i];
        if(eleRadio_sexoUser.checked==true)
            sexo=eleRadio_sexoUser.value;
    }
    eleSexo.innerHTML="<strong>Sexo: </strong>"+sexo;
    // sueldo devuelve undefined
    let eleSueldo=document.createElement("p");
    let sueldo="";
    for(let i=0;i<eleListaRadio_sueldoUser.length;i++)
    {
        let eleRadio_sueldoUser=eleListaRadio_sueldoUser[i];
        if(eleRadio_sueldoUser.checked==true)
            sueldo=eleListaRadio_sueldoUser.value;
    }
    eleSueldo.innerHTML="<strong>Sueldo: </strong>"+sueldo;
    let eleFichero=document.createElement("p");
    eleFichero.innerHTML="<strong>Fichero: </strong>"+eleFile_fichero.value;
    let eleProvincia=document.createElement("p");
    eleProvincia.innerHTML="<strong>Provincia: </strong>"+provincias[eleSelect_provincias[eleSelect_provincias.selectedIndex].value];
    // sin programar. pueden existir múltiples selecciones de provincias
    let eleHobbies=document.createElement("p");
    eleHobbies.innerHTML="<strong>Hobbies: </strong>";  

    eleDiv_datos.appendChild(eleTitulo);
    eleDiv_datos.appendChild(eleNombre);
    eleDiv_datos.appendChild(eleDni);
    eleDiv_datos.appendChild(eleClave);
    if(eleTextArea_opinion.value!="")
        eleDiv_datos.appendChild(eleOpinion);
    eleDiv_datos.appendChild(eleMaxOpinion);
    eleDiv_datos.appendChild(eleMayorEdad);
    eleDiv_datos.appendChild(eleSexo);
    eleDiv_datos.appendChild(eleSueldo);
    if(eleFile_fichero.value!="")
        eleDiv_datos.appendChild(eleFichero);
    eleDiv_datos.appendChild(eleProvincia);
    eleDiv_datos.appendChild(eleHobbies); //sino hay hobbies no deberíamos añadirlo. sin programar

    eleDiv_datos.style.visibility="visible";
}

function limpiar()
{
    eleDiv_datos.style.visibility="hidden";
    eleDiv_datos.innerHTML="";
}