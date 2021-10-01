// Datos Municipios
let todosMunicipios = 
[
    [],
    municipios_1,
    municipios_2,
    municipios_3,
    municipios_4,
    municipios_5,
    municipios_6,
    municipios_7,
];
let municipios_1 = new Array("Seleccione Municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
let municipios_2 = new Array("Seleccione Municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
let municipios_3 = new Array("Seleccione Municipio", "Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar");
let municipios_4 = new Array("Seleccione Municipio", "Iruña", "Burlada", "Estella-Lizarra", "Tafalla");
let municipios_5 = new Array("Seleccione Municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
let municipios_6 = new Array("Seleccione Municipio", "Maule", "Barkoxe", "Sohüta");
let municipios_7 = new Array("Seleccione Municipio", "Baigorri", "Garazi", "Oztibarre");


// Datos provincias
let provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")
function startSelectProvincias()
{
    let eleFormProvincias=document.getElementById('form_provincias');
    let eleSelectProvincias=eleFormProvincias.select_provincias;

    let eleOptionProvincia=document.createElement('option');
    eleOptionProvincia.innerHTML='Seleccione Provincia';
    eleOptionProvincia.value='-';

    eleSelectProvincias.appendChild(eleOptionProvincia);

    for(let i=0;i<provincias.length;i++)
    {
        let eleOptionProvincia=document.createElement('option');
        eleOptionProvincia.innerHTML=provincias[i];
        eleOptionProvincia.value=i;

        eleSelectProvincias.appendChild(eleOptionProvincia);
    }
}



function update_provincia()
{

}

function cambia_provincia() 
{
    document.getElementById("mensaje").innerHTML = "";

    //tomo el valor del select del pais elegido 
    let provincia=document.form_provincias.provincia[document.form_provincias.provincia.selectedIndex].value;

    //miro a ver si el pais está definido 
    if (provincia != 0) 
    {
        //si estaba definido, entonces coloco las opciones de la provincia correspondiente. 
        //selecciono el array de muncipio adecuado 
        mis_municipios = todosMunicipios[provincia]
        //calculo el numero de municipios 
        num_municipios = mis_municipios.length;
        //marco el número de provincias en el select 
        document.form_provincias.municipio.length = num_municipios;
        //para cada provincia del array, la introduzco en el select 
        for (i = 0; i < num_municipios; i++) 
        {
            document.form_provincias.municipio.options[i].value = mis_municipios[i]
            document.form_provincias.municipio.options[i].text = mis_municipios[i]
        }
    } 
    else 
    {
        //si no había provincia seleccionada, elimino las provincias del select 
        document.form_provincias.municipio.length = 1; 
        //coloco un guión en la única opción que he dejado 
        document.form_provincias.municipio.options[0].value = "-";
        document.form_provincias.municipio.options[0].text = "Seleccione Municipio";
        //document.getElementById("mensaje").innerHTML = "";
    }
    //marco como seleccionada la opción primera de provincia 
    document.form_provincias.municipio.options[0].selected = true;
}

function muestraDatos() 
{
    let provincia = document.form_provincias.provincia.value - 1;
    let municipio = document.form_provincias.municipio.value;

    if (municipio != "Seleccione Municipio") 
        document.getElementById("mensaje").innerHTML = "<p>Ha seleccionado <b>" + municipio + "</b> en <b>" + provincias[provincia] + "</b>";
    else 
        document.getElementById("mensaje").innerHTML = "";
}