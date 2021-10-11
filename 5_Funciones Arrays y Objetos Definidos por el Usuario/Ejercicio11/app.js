window.onload = function() 
{
    jugar();
};

function jugar()
{
    n=Math.floor(Math.random()*100)+1;
    numeroEncontrado=false;
    contIntentos=0;
    do
    {
        let input = prompt("Introduce un número");
        if(input!=null)
        {
            if(!isNaN(input))
            {
                input=parseInt(input);
                contIntentos++;
                
                if(n<input)
                    alert("Mi número es menor");
                else if(n>input)
                    alert("Mi número es mayor");
                else if(n==input)
                    numeroEncontrado=true;
            }
        }
    }
    while(numeroEncontrado==false);
    
    alert("¡Felicidades, has acertado el número! Has necesitado "+contIntentos+" intentos");
}