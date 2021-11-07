let eleButton_arrancar;
let eleButton_parar;
let eleButton_acelerar;
let eleButton_desacelerar;
let eleImg_car;
let velocidad;
let enMarcha;

let resolutionX=innerWidth - innerWidth*0.05;
let position=0;
let velocity=1;

window.onload 
{
    eleImg_car=document.getElementById("car");
    eleButton_arrancar=document.getElementById("arrancar");
    eleButton_parar=document.getElementById("parar");
    eleButton_acelerar=document.getElementById("acelerar");
    eleButton_desacelerar=document.getElementById("desacelerar");
    enMarcha=false;

    setInterval(updateCarPosition, 100);
    eventos();
}

function eventos()
{
    eleButton_arrancar.addEventListener("click", arrancar);
    eleButton_parar.addEventListener("click", parar);
    eleButton_acelerar.addEventListener("click", acelerar);
    eleButton_desacelerar.addEventListener("click", desacelerar);
}

function arrancar()
{
    eleButton_arrancar.style.display="none";
    eleButton_parar.style.display="inline";
    eleButton_acelerar.style.display="inline";
    eleButton_desacelerar.style.display="inline";
    enMarcha=true;
}

function parar()
{
    eleButton_arrancar.style.display="inline";
    eleButton_parar.style.display="none";
    eleButton_acelerar.style.display="none";
    eleButton_desacelerar.style.display="none";

    eleImg_car.style.transform="translateX(0px)";
    enMarcha=false;
    position=0;
    velocity=1;
}

function acelerar()
{
    velocity+=5;
}

function desacelerar()
{
    velocity-=5;
    if(velocity < 1)
        velocity=1;
}

function updateCarPosition()
{    
    if(enMarcha)
    {
        position+=velocity;
        if(position > resolutionX)
            position=resolutionX;
        eleImg_car.style.transform="translateX("+position+"px)";
    }
}