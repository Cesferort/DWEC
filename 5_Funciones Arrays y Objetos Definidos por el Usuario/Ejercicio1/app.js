function ejercicio1()
{
    let palabras = new Array( 'botella', 'zeta', 'androide', 'minuto');
    palabras.sort();

    let elePResultado=document.createElement('p');
    elePResultado.innerHTML=palabras.join('-'); 
    document.body.appendChild(elePResultado);
}