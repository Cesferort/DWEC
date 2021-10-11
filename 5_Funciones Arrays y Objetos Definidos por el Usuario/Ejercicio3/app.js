function esPar(n)
{
    // Limpiamos espacios innecesarios
    n=n.trim();

    // Comprobar si el valor introducido es numérico
    if(n=='' || isNaN(n))
        return null;
    
    // Comprobar si el número introducido es par o no
    n=parseInt(n);
    if(n%2==0)
        return true;
    else
        return false;
}