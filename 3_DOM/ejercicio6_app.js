let listaUrlNums=
{
    0 : './images/0.jpg',
    1 : './images/1.jpg',
    2 : './images/2.jpg',
    3 : './images/3.jpg',
    4 : './images/4.jpg',
    5 : './images/5.jpg',
    6 : './images/6.jpg',
    7 : './images/7.jpg',
    8 : './images/8.jpg',
    9 : './images/9.jpg',
    'barra' : './images/barra.jpg',
    'puntos' : './images/puntos.jpg'
};

iniciar();
function iniciar()
{
    refrescar();
    setInterval(refrescar, 1000);
}

function refrescar() 
{
	let f = new Date();
    let dia=parseInt(f.getDate());
    let mes=parseInt(f.getMonth())+1;
    let anio=parseInt(f.getFullYear());
    let hora=parseInt(f.getHours());
    let min=parseInt(f.getMinutes());
    let seg=parseInt(f.getSeconds());


    // Dia
    let dia_1=parseInt(dia/10);
    let dia_2=dia%10;

    document.getElementById('dia_1').innerHTML='<img src="'+listaUrlNums[dia_1]+'">';
    document.getElementById('dia_2').innerHTML='<img src="'+listaUrlNums[dia_2]+'">';
    document.getElementById('dia_mes').innerHTML='<img src="'+listaUrlNums['barra']+'">';

    // Mes
    let mes_1=parseInt(mes/10);
    let mes_2=mes%10;
    document.getElementById('mes_1').innerHTML='<img src="'+listaUrlNums[mes_1]+'">';
    document.getElementById('mes_2').innerHTML='<img src="'+listaUrlNums[mes_2]+'">';
    document.getElementById('mes_anio').innerHTML='<img src="'+listaUrlNums['barra']+'">';

    // Año
    let anio_4=anio%10;
    let anio_3=parseInt((anio%100)/10);
    let anio_2=parseInt((anio%1000)/100);
    let anio_1=parseInt((anio%10000)/1000);
    document.getElementById('anio_1').innerHTML='<img src="'+listaUrlNums[anio_1]+'">';
    document.getElementById('anio_2').innerHTML='<img src="'+listaUrlNums[anio_2]+'">';
    document.getElementById('anio_3').innerHTML='<img src="'+listaUrlNums[anio_3]+'">';
    document.getElementById('anio_4').innerHTML='<img src="'+listaUrlNums[anio_4]+'">';
    
    // Hora
    let hora_1=parseInt(hora/10);
    let hora_2=hora%10;
    document.getElementById('hora_1').innerHTML='<img src="'+listaUrlNums[hora_1]+'">';
    document.getElementById('hora_2').innerHTML='<img src="'+listaUrlNums[hora_2]+'">';
    document.getElementById('hora_min').innerHTML='<img src="'+listaUrlNums['puntos']+'">';

    // Minutos
    let min_1=parseInt(min/10);
    let min_2=min%10;
    document.getElementById('min_1').innerHTML='<img src="'+listaUrlNums[min_1]+'">';
    document.getElementById('min_2').innerHTML='<img src="'+listaUrlNums[min_2]+'">';
    document.getElementById('min_seg').innerHTML='<img src="'+listaUrlNums['puntos']+'">';

    // Segundos
    let seg_1=parseInt(seg/10);
    let seg_2=seg%10;
    document.getElementById('seg_1').innerHTML='<img src="'+listaUrlNums[seg_1]+'">';
    document.getElementById('seg_2').innerHTML='<img src="'+listaUrlNums[seg_2]+'">';
}