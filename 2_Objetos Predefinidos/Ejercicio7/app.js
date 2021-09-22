function pedirAnio()
{
    let input=0;
    let numeroValido=false;
    do
    {
        try
        {
            input = parseInt(prompt("Introduce un año :"));
            numeroValido = true;
        }
        catch(e){}
    }
    while(numeroValido==false);
    
    let diferencia = new Date()-new Date(input,0,1);
    let nSeg = diferencia / 1000;       // Pasamos a segundos
    let nDias=0;
    let nHor=0;
    let nMin=0;

    while(nSeg >= (60*60)*24)            //Mientras la diferencia en segundos sea mayor a 1día
    {
        nSeg-=(60*60)*24;
        nDias++;
    }
    while(nSeg >= 60*60)                 //Mientras la diferencia en segundos sea mayor a 1hora
    {
        nSeg-=60*60;
        nHor++;
    }
    while(nSeg >= 60)                    //Mientras la diferencia en segundos sea mayor a 1min
    {
        nSeg-=60;
        nMin++;
    }

    document.write("<p>Desde el 1/1/"+input+" han transcurrido "+nDias+" días, "+nHor+" horas, "+nMin+" minutos y "+Math.round(nSeg)+" segundos.</p>");
}