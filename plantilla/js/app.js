const letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'); 
const territorios=
[
    "Euskadi",
    "Nafarroa",
    "Iparralde"
];
const provincias=
{
    0   : [],
    1   : ["Araba", "Bizkaia", "Gipuzkoa"],
    2   : ["Navarra"],
    3   : ["Lapurdi", "Behe Nafarroa", "Zuberoa"]
};
const municipios=
[
    ["Gasteiz", "Laguardia", "Salvatierra"],
    ["Bilbo", "Barakaldo", "Durango"],
    ["Donosti", "Arrasate", "Bergara"],
    ["Iruña", "Lizarra", "Ujue"],
    ["Baiona", "Biarritz", "Hendaya"],
    ["Bidarray", "St-Palais"],
    ["Maule", "Etxarri"]
];

let eleButton_enviar;
let eleInputText_dni;
let eleInputText_firstname;
let eleInputText_lastname;
let eleInputText_address;
let eleSelect_territorio;
let eleSelect_provincia;
let eleSelect_municipio;
let eleDate_birthday;
let eleEmail_email;
let eleInputText_phone;
let eleCheckbox_politicas;

let localStorage;
let ageUser;

window.onload 
{
    eleInputText_dni=document.getElementById("dni");
    eleInputText_firstname=document.getElementById("firstname");
    eleInputText_lastname=document.getElementById("lastname");
    eleInputText_address=document.getElementById("address");
    eleSelect_territorio=document.getElementById("territorio");
    eleSelect_provincia=document.getElementById("provincia");
    eleSelect_municipio=document.getElementById("municipio");
    eleDate_birthday=document.getElementById("birthday");
    eleEmail_email=document.getElementById("email");
    eleButton_enviar=document.getElementById("enviar");
    eleInputText_phone=document.getElementById("phone");
    eleCheckbox_politicas=document.getElementById("politicas");

    eleInputText_firstname.maxLength=50;
    eleInputText_lastname.maxLength=50;
    eleInputText_address.maxLength=50;

    localStorage=window.localStorage;
    eventos();
}

function eventos()
{
    eleInputText_dni.addEventListener("blur", validateDNI);
    eleInputText_firstname.addEventListener("blur", validateFirstname);
    eleInputText_lastname.addEventListener("blur", validateLastname);
    eleInputText_address.addEventListener("blur", validateAddress);
    eleSelect_territorio.addEventListener("change", fillProvincias);
    eleSelect_provincia.addEventListener("change", fillMunicipios);
    eleDate_birthday.addEventListener("blur", validateBirthday);
    eleEmail_email.addEventListener("blur", validateEmail);
    eleInputText_phone.addEventListener("blur", validatePhone);
    eleCheckbox_politicas.addEventListener("change", policyChange);
    eleButton_enviar.addEventListener("click", sendData);
}

function fillProvincias()
{
    let selectedIndex_Territorio=eleSelect_territorio.selectedIndex;
    eleSelect_provincia.length=0;
    eleSelect_municipio.length=0;
    if(selectedIndex_Territorio == 0)
        return false;

    let listaProvincias=provincias[selectedIndex_Territorio];
    for(let i=0; i < listaProvincias.length; i++)
    {
        let eleOption_provincia=document.createElement("option");
        eleOption_provincia.innerText=listaProvincias[i];
        eleSelect_provincia.appendChild(eleOption_provincia);
    }
    fillMunicipios();
}

function fillMunicipios()
{
    let selectedIndex_Territorio=eleSelect_territorio.selectedIndex;
    let selectedIndex_Provincia=eleSelect_provincia.selectedIndex;
    for(let i=selectedIndex_Territorio-1; i >= 0; i--)
        selectedIndex_Provincia+=provincias[i].length;

    eleSelect_municipio.length=0;
    let listaMunicipios=municipios[selectedIndex_Provincia];
    for(let i=0; i < listaMunicipios.length; i++)
    {
        let eleOption_municipio=document.createElement("option");
        eleOption_municipio.innerText=listaMunicipios[i];
        eleSelect_municipio.appendChild(eleOption_municipio);
    }
}

function validateDNI()
{
    let err="El DNI no ha sido introducido con el formato correcto."; 
    let esValido=false;
    let input=eleInputText_dni.value.trim();
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
    {
        mostrarError(eleInputText_dni, err);
        return false;
    }
    else 
        eleInputText_dni.style.backgroundColor="rgb(127, 255, 127)";
    return true;
}

function validateFirstname()
{
    let err="No se ha introducido ningún valor en el campo nombre."; 
    if(eleInputText_firstname.value.length == 0)
    {
        mostrarError(eleInputText_firstname, err);
        return false;
    }

    err="El nombre debe contener carácteres válidos."; 
    for(let i=0; i < eleInputText_firstname.value.length; i++)
    {
        let car=eleInputText_firstname.value[i];
        if(car!=' ' && (car >= 0 && car <= 9))
        {
            mostrarError(eleInputText_firstname, err);
            return false;
        }
    }
    eleInputText_firstname.style.backgroundColor="rgb(127, 255, 127)";
    return true;
}

function validateLastname()
{
    let err="No se ha introducido ningún valor en el campo apellidos."; 
    if(eleInputText_lastname.value.length == 0)
    {
        mostrarError(eleInputText_lastname, err);
        return false;
    }

    err="Los apellidos deben contener carácteres válidos."; 
    for(let i=0; i < eleInputText_lastname.value.length; i++)
    {
        let car=eleInputText_lastname.value[i];
        if(car!=' ' && car >= 0 && car <= 9)
        {
            mostrarError(eleInputText_lastname, err);
            return false;
        }
    }
    eleInputText_lastname.style.backgroundColor="rgb(127, 255, 127)";
    return true;
}

function validateAddress()
{
    let err="No se ha introducido ningún valor en el campo dirección."; 
    if(eleInputText_address.value.length == 0)
    {
        mostrarError(eleInputText_address, err);
        return false;
    }
    eleInputText_address.style.backgroundColor="rgb(127, 255, 127)";
    return true;
}

function validateBirthday()
{
    let err="La fecha no ha sido introducida con el formato correcto (dd/mm/aaaa)."; 
    let date=new Date(eleDate_birthday.value.trim());
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();

    let input=day+"/"+month+"/"+year;
    if (!/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(input))
    {
        mostrarError(eleDate_birthday, err);
        return false;
    }
    let now=new Date();
    let diffDates=now-date;
    let diffDates_seconds=diffDates/1000;   
    let diffDates_hours=diffDates_seconds/(60*60);
    let diffDates_days=diffDates_hours/24;
    ageUser=Math.trunc(diffDates_days/365);
    
    eleDate_birthday.style.backgroundColor="rgb(127, 255, 127)";
    return true;
}

function validateEmail()
{
    let err="El email no ha sido introducido con el formato correcto."; 
    let input=eleEmail_email.value.trim();

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
    {
        mostrarError(eleEmail_email, err);
        return false;
    }
    eleEmail_email.style.backgroundColor="rgb(127, 255, 127)";
    return true;
}

function validatePhone()
{
    let err="El número de teléfono no ha sido introducido con el formato correcto."; 
    let input=eleInputText_phone.value.trim();

    if (!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/.test(input)) 
    {
        mostrarError(eleInputText_phone, err);
        return false;
    }
    eleInputText_phone.style.backgroundColor="rgb(127, 255, 127)";
    return true;
}

function mostrarError(elemento, err)
{
    elemento.style.backgroundColor="rgb(255, 127, 127)";
    alert(err);
}

function policyChange()
{
    if(eleCheckbox_politicas.checked)
        eleButton_enviar.disabled=false;
    else 
        eleButton_enviar.disabled=true;
}

function sendData()
{
    if(validateDNI() && validateFirstname() && validateLastname() && 
    validateAddress() && validateBirthday() && validateEmail() && 
    validatePhone())
    {
        if(eleSelect_territorio.selectedIndex != -1 && 
            eleSelect_provincia.selectedIndex != -1 && 
            eleSelect_municipio.selectedIndex != -1)
        {
            let newUser=
            {
                "dni"           : eleInputText_dni.value,
                "nombre"        : eleInputText_firstname.value,
                "apellidos"     : eleInputText_lastname.value,
                "direccion"     : eleInputText_address.value,
                "municipio"     : eleSelect_municipio[eleSelect_municipio.selectedIndex].value,     
                "fnaci"         : eleDate_birthday.value.toString(),     
                "email"         : eleEmail_email.value,     
                "telefono"      : eleInputText_phone.value,  
                "edad"          : ageUser  
            };
            localStorage.setItem(newUser.dni, JSON.stringify(newUser));
            window.location.href = "thankyou.html";
        }
        else 
            alert("Los campos de territorio, provincia y municipios son obligatorios.");
    }
}