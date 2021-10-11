let numAnios=5;
let semana =
{
    0 : "Domingo",
    1 : "Lunes",
    2 : "Martes",
    3 : "Miércoles",
    4 : "Jueves",
    5 : "Viernes",
    6 : "Sábado"
};

function fechaValida()
{
    let fechaValida=false;
    do
    {
        let input = prompt("Introduce una fecha (dd/mm/aaaa)");
        if(input!=null)
        {
            dateSeccionada=input.split('/');
            if(dateSeccionada.length==3)
            {
                if(!isNaN(dateSeccionada[0]) && !isNaN(dateSeccionada[1]) && !isNaN(dateSeccionada[2]))
                {
                    let anio=parseInt(dateSeccionada[2]);
                    let mes=parseInt(dateSeccionada[1])-1;
                    let dia=parseInt(dateSeccionada[0]);
                    
                    let fecha=new Date(anio,mes,dia);
                    fechaValida=true;
                    calcularFechas(fecha);
                }
            }
        }
    }
    while(fechaValida==false);
}

function calcularFechas(f)
{
    let inputDia=f.getDate();
    let inputMes=parseInt(f.getMonth())+1;
    let inputAnio=f.getFullYear();
    let anio_diaSemana=[];
    for(let outputAnio=inputAnio-(numAnios-1);outputAnio<=inputAnio;outputAnio++)
    {
        let oldFecha=new Date(outputAnio,inputMes-1,inputDia);
        let diaSemana=semana[oldFecha.getDay()];
        anio_diaSemana[outputAnio]=diaSemana;
    }

    let txt="<h2>VALIDANDO FECHAS</h2>";
    txt+="<p>Fecha introducida: "+inputDia+"/"+inputMes+"/"+inputAnio+"</p>";
    txt+="<p>Ese mismo día en...</p>";
    txt+="<table>";
    txt+="<tr>";
    txt+="<td>el año...</td>";
    for(let [anio, diaSemana] of Object.entries(anio_diaSemana))
        txt+="<td>"+anio+"</td>";
    txt+="</tr>";
    txt+="<tr>";
    txt+="<td>era un...</td>";
    for(let [anio, diaSemana] of Object.entries(anio_diaSemana))
        txt+="<td>"+diaSemana+"</td>";
    txt+="</tr>";
    txt+="</table>";
    document.write(txt);
}