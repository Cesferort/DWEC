// Datos Municipios
let municipios_1 = new Array("Seleccione Municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
let municipios_2 = new Array("Seleccione Municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
let municipios_3 = new Array("Seleccione Municipio", "Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar");
let municipios_4 = new Array("Seleccione Municipio", "Iruña", "Burlada", "Estella-Lizarra", "Tafalla");
let municipios_5 = new Array("Seleccione Municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
let municipios_6 = new Array("Seleccione Municipio", "Maule", "Barkoxe", "Sohüta");
let municipios_7 = new Array("Seleccione Municipio", "Baigorri", "Garazi", "Oztibarre");
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

// Datos provincias
let provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")
function startSelectProvincias()
{
    let eleForm_Provincias=document.getElementById('form_provincias');
    let eleSelect_Provincias=eleForm_Provincias.select_provincias;

    let eleOption_Provincia=document.createElement('option');
    eleOption_Provincia.innerHTML='Seleccione Provincia';
    // eleOption_Provincia.value='-';
    
    eleSelect_Provincias.appendChild(eleOption_Provincia);

    for(let i=0;i<provincias.length;i++)
    {
        let eleOption_Provincia=document.createElement('option');
        eleOption_Provincia.innerHTML=provincias[i];
        // eleOption_Provincia.value=i;

        eleSelect_Provincias.appendChild(eleOption_Provincia);
    }
}

function change_provincia()
{
    // Limpiar campo de texto del resultado
    document.getElementById("output").innerHTML="";

    // Encontrar selects de Provincias y Municipios
    let eleSelect_Provincias=document.getElementById("form_provincias").select_provincias;
    let eleSelect_Municipios=document.getElementById("form_provincias").select_municipios;

    //Indice de la provincia seleccionada
    let indexSelectedProvincia=eleSelect_Provincias.selectedIndex;
    
    // Comprobamos que no ha sido elegida la opción por defecto
    if(indexSelectedProvincia!=0)
    {
        let listaMunicipios=todosMunicipios[indexSelectedProvincia];
        
        // Limpiar select Municipios y rellenarlo con los municipios asociados a la 
        // provincia elegida
        eleSelect_Municipios.length=0; 
        for(let contMunicipio=0;contMunicipio<listaMunicipios.length;contMunicipio++)
        {
            municipio=listaMunicipios[contMunicipio];
            let eleOption_Municipio=document.createElement('option');
            if(contMunicipio==0)        // Opción default
            {
                eleOption_Municipio.innerHTML="Seleccione Municipio";
                eleOption_Municipio.selected=true;
                eleSelect_Municipios.appendChild(eleOption_Municipio);
            }
            else
            {
                eleOption_Municipio.innerHTML=municipio;            
                eleSelect_Municipios.appendChild(eleOption_Municipio);
            }
        }
    }
    else
    {
        // Reset select municipios
        eleSelect_Municipios.length=0; 

        let eleOption_Municipio=document.createElement('option');
        eleOption_Municipio.innerHTML="Seleccione Municipio";
        eleOption_Municipio.selected=true;
        eleSelect_Municipios.appendChild(eleOption_Municipio);
    }
}

function change_municipio()
{
    // Encontrar párrafo para el resultado, select de Provincias y select de Municipios
    let eleP_Output=document.getElementById("output");
    let eleSelect_Provincias=document.getElementById("form_provincias").select_provincias;
    let eleSelect_Municipios=document.getElementById("form_provincias").select_municipios;

    // Comprobamos que no se ha elegido la opción por defecto
    let indexSelectedProvincia=eleSelect_Municipios.selectedIndex;
    if(indexSelectedProvincia!=0)
    {
        let municipio=eleSelect_Municipios[indexSelectedProvincia].text;
        let provincia=eleSelect_Provincias[eleSelect_Provincias.selectedIndex].text;
        eleP_Output.innerHTML="Ha seleccionado <strong>"+municipio+"</strong> en <strong>"+provincia+"</strong>";
    }
    else
        eleP_Output.innerHTML="";
}