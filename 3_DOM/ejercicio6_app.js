iniciar();
listaUlrNums=array
(
    './images/0.jpg',
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
    './images/barra.jpg',
    './images/puntos.jpg'
);

function iniciar()
{
    refrescar();
    setInterval(refrescar, 1000);
}

function refrescar() 
{
	let fecha = new Date();
	let fechaToLocal = fecha.toLocaleTimeString();
	document.getElementById("pruebas").innerHTML = fechaToLocal;
    
    document.getElementById('dia_1');
    document.getElementById('dia_2');
    document.getElementById('dia_mes');
    document.getElementById('mes_1');
    document.getElementById('mes_2');
    document.getElementById('mes_anio');
    document.getElementById('anio_1');
    document.getElementById('anio_2');
    document.getElementById('anio_3');
    document.getElementById('anio_4');

    document.getElementById('hora_1');
    document.getElementById('hora_2');
    document.getElementById('hora_min');
    document.getElementById('min_1');
    document.getElementById('min_2');
    document.getElementById('min_seg');
    document.getElementById('seg_1');
    document.getElementById('seg_2');
}