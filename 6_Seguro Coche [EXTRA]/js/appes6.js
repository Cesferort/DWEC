const IMPORTE_BASE=2000;

let eleSelect_marcaCoche;
let eleSelect_anioCoche;
let eleRadio_listaTipos=[];
let eleButton_butCotizar;

window.onload = function()
{
    eleSelect_marcaCoche=document.getElementById("marca");
    eleSelect_anioCoche=document.getElementById("anio");
    eleRadio_listaTipos=document.getElementsByName("tipo");
    eleButton_butCotizar=document.getElementById("butCotizar");
    
    rellenar_select_anioCoche();
    eventos();
}

function rellenar_select_anioCoche()
{
    let fecha=new Date();
    let anioActual=fecha.getFullYear();
    eleOption_anioCoche=document.createElement("option");
    eleOption_anioCoche.innerHTML="- Seleccionar -";
    eleOption_anioCoche.value="";
    eleSelect_anioCoche.appendChild(eleOption_anioCoche);
    for(let anioMin=anioActual-10; anioMin <= anioActual; anioMin++)
    {
        let eleOption_anioCoche=document.createElement("option");
        eleOption_anioCoche.innerHTML=anioMin;
        eleOption_anioCoche.value=anioMin;
        eleSelect_anioCoche.appendChild(eleOption_anioCoche);
    }
}

function eventos()
{
    eleButton_butCotizar.addEventListener("click", cotizar);
}

function cotizar()
{
    let err="No se ha podido cotizar el seguro:";
    let errEncontrados=false

    let marcaCoche=eleSelect_marcaCoche[eleSelect_marcaCoche.selectedIndex].value;
    if(marcaCoche==null || marcaCoche=="")
    {
        err+="\n    -No se ha seleccionado una marca de coche";
        errEncontrados=true;
    }

    let anioCoche=eleSelect_anioCoche[eleSelect_anioCoche.selectedIndex].value;
    if(anioCoche==null || anioCoche=="")
    {
        err+="\n    -No se ha seleccionado un año para el coche";
        errEncontrados=true;
    }

    let tipoSeguro="";
    for(let i=0; i<eleRadio_listaTipos.length;i++)
    {   
        let eleRadio_tipo=eleRadio_listaTipos[i];
        if(eleRadio_tipo.checked==true)
            tipoSeguro=eleRadio_tipo.value;
    }
    if(tipoSeguro==null || tipoSeguro=="")
    {
        err+="\n    -No se ha seleccionado un tipo de seguro";
        errEncontrados=true;
    }
    
    if(errEncontrados==true)
        alert(err);
    else
    {
        let incrementoTotal=0;
        /**
         * 1 - Americano
         * 2 - Asiatico
         * 3 - Europeo
         */
        switch(marcaCoche)
        {
            case "1":
                incrementoTotal+=15;
                break;
            case "2":
                incrementoTotal+=5;
                break;
            case "3":
                incrementoTotal+=35;
        }

        let fecha=new Date();
        let anioActual=fecha.getFullYear();
        incrementoTotal-=(anioActual-anioCoche)*3;

        if(tipoSeguro=="basico")
            incrementoTotal+=30;
        else if(tipoSeguro=="completo")
            incrementoTotal+=50;

        let costeSeguro=IMPORTE_BASE*((100+incrementoTotal)/100);
        alert("El coste del seguro sería un total de: " + costeSeguro + "€");
    }
}