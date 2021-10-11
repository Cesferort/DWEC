let nuevaVentana;

function ejercicio2()
{
    let palabrasValidas=0;
    let listaPalabras=[];
    for(let cont=0;cont<5 || palabrasValidas<1;cont++)
    {
        let input=prompt("Introduce una palabra. Llevas introducidas "+palabrasValidas+" palabras válidas.\nPalabra número "+(cont+1));
        // Palabra válida
        if(input!=null && input!='')
        {
            listaPalabras[palabrasValidas]=input;
            palabrasValidas++;
        }
    }

    // Resultados de interés
    let primeraPalabra=listaPalabras[0];
    let ultimaPalabra=listaPalabras[listaPalabras.length-1];
    let numPalabras=listaPalabras.length-1;
    let palabrasSorted=listaPalabras.sort();

    // Preparar ventana emergente y sus elementos
    nuevaVentana = window.open('','_blank','width=300', 'height=300');
    let eleP_PrimeraPalabra=document.createElement('p');
    eleP_PrimeraPalabra.innerHTML="La primera palabra ingresada por el usuario: "+primeraPalabra;
    let eleP_UltimaPalabra=document.createElement('p');
    eleP_UltimaPalabra.innerHTML="La última palabra ingresada por el usuario: "+ultimaPalabra;
    let eleP_NumPalabras=document.createElement('p');
    eleP_NumPalabras.innerHTML="Número de palabras presentes en el array: "+(numPalabras+1);
    let eleP_PalabrasSorted=document.createElement('p');
    eleP_PalabrasSorted.innerHTML="Todas las palabras ordenadas alfabéticamente: "+palabrasSorted;

    // Añadir elementos a la ventana emergente para mostrar los resultados
    nuevaVentana.document.body.appendChild(eleP_PrimeraPalabra);
    nuevaVentana.document.body.appendChild(eleP_UltimaPalabra);
    nuevaVentana.document.body.appendChild(eleP_NumPalabras);
    nuevaVentana.document.body.appendChild(eleP_PalabrasSorted);
}