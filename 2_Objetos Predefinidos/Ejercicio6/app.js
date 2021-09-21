function pedirFechaNac()
{
    let fechaValida=false;
    do
    {
        let input = prompt("Introduce tu fecha de nacimiento :");
        dateSeccionada=input.split('/');
        if(dateSeccionada.length==3)
        {
            try
            {
                let anio=parseInt(dateSeccionada[0]);
                let mes=parseInt(dateSeccionada[1])-1;
                let dia=parseInt(dateSeccionada[2]);
                
                let fecha=new Date(anio,mes,dia);
                fechaValida=true;
                calcularAnios(fecha);
            }
            catch(e) {}
        }
    }
    while(fechaValida==false);
}

function calcularAnios(f)
{
    let date=new Date()-f;
    let seg=date/1000;   
    let hor=seg/(60*60);
    let dias=hor/24;
    let anios=dias/365;

    document.write("<p>Has nacido el "+f.getDate()+"/"+(parseInt(f.getMonth())+1)+"/"+f.getFullYear());
    document.write("<p>Tienes "+Math.trunc(anios)+" años</p>");
}