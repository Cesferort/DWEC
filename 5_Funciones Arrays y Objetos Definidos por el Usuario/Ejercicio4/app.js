let listaNumeros=[];
for(let cont=0;cont<2;)
{
    let n=prompt("Introduce un número. Llevas introducidos "+(cont+1));
    if(n!=null)
    {
        n=n.trim();
        // Palabra válida
        if(n!='' && !isNaN(n))
        {
            listaNumeros[cont]=parseInt(n);
            cont++;
        }
    }
}
let resultado=sumar(listaNumeros[0],listaNumeros[1]);
document.write("<p>El resultado de la suma ("+listaNumeros[0]+"+"+listaNumeros[1]+") es: "+resultado+"</p>");

function sumar(a,b)
{
    return a+b;
}