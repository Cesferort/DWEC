// mierda.substring(0, mierda.indexOf('.'));
/**
 * LOCAL STORAGE
 */
/*
let localStorage=window.localStorage;
localStorage.clear();
localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart)); 
function getShoppingCartFromLocalStorage() 
{
    if(localStorage.getItem('shoppingCart') == null) 
        shoppingCart=[]; 
    else
        shoppingCart=JSON.parse(localStorage.getItem('shoppingCart'));

    refresh();
}
*/



/** DATE
 * hoy = new Date();
 * cumpleanos = new Date("December 17, 1995 03:24:00");
 * cumpleanos = new Date(1995,11,17);
 * cumpleanos = new Date(1995,11,17,3,24,0);
 */
// Validar fecha
/*
function validarFecha()
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
*/

// Format
/*
let d=new Date();
d.getFullYear();      //Get the year as a four digit number (yyyy)
d.getMonth()+1;       //Get the month as a number (0-11)
d.getDate();          //Get the day as a number (1-31)
d.getHours();         //Get the hour (0-23)
d.getMinutes();       //Get the minute (0-59)
d.getSeconds();       //Get the second (0-59)
d.getMilliseconds();  //Get the millisecond (0-999)
d.getTime();          //Get the time (milliseconds since January 1, 1970)
d.getDay();           //Get the weekday as a number (0-6)
*/

// Date Diff in Years
/*
let date=new Date()-f;
let seg=date/1000;   
let hor=seg/(60*60);
let dias=hor/24;
let anios=dias/365;
*/



/**
 * FORM
 */
/*
eleTextArea_opinion.maxLength=50;
<select multiple></select>
option.selected=true;
checkbox.checked=true;
document.getElementsByName();
document.getElementById();
document.getElementsByTagName();
document.getElementsByClassName();
*/



/**
 * COLECCIONES DE DATOS
 */
/*
// Array
let arr1=new Array("pato", "pata");
let arr2=["pato", "pata"];
arr1.sort();
console.log(arr1.join("*"));

// Diccionario
let map=
{
    "pato"  : 18,
    "pepa"  : 3
};
for(let [key, value] of Object.entries(map))
    console.log("Key: "+key+"\tValue: "+value);
*/



/**
 * SCREEN
 */
// Window.innerwidth;
let height = window.screen.height;
let width = window.screen.width;
let diagonal = Math.hypot(height, width);



/**INTERACT WITH USER
//PROMPT
let nombre=prompt("Nombre:");

//CONFIRM 
let check=false;
if(confirm("¿Desea continuar?"))
    check=true;

//ALERT
alert("Alerta");
*/



/**
 * STYLE
 */
/*
document.body.style.backgroundColor="white";
document.body.style.visibility="visible"; // hidden
eleP_texto.setAttribute("style", "display: inline;");
*/



/**
 * CLASES / OBJETOS
 */
/*
class Producto_alimenticio
{
    constructor(codigo, nombre, precio)
    {
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }

    imprimeDatos()
    {
        console.log("Codigo: "+this.codigo+"\nNombre: "+this.nombre+"\nPrecio: "+this.precio);
    }
 }
 let objs=[];
 objs[0]=new Producto_alimenticio("A23", "Pato", 20);
 objs[1]=new Producto_alimenticio("A24", "Pato2", 21);
 objs[2]=new Producto_alimenticio("A25", "Pato3", 22);
 
 for(let i=0;i<objs.length;i++)
     objs[i].imprimeDatos();
*/



/**
 * CAST
 */
/*
let txt="5.3 ";
txt=txt.trim();
parseInt(txt);
parseFloat(txt);
txt.toString();
*/



/**
 * COSAS VARIAS
 */    
// Rand 
/* let n=Math.floor(Math.random()*100)+1; */

// Interval
/* setInterval(metodo, 1000); //milisegundos */

// Redirigir
/*window.location.href = "https://www.google.es";*/

// Sumatorio entre 1 y 100
/*
let texto="";
let n1=0;
for(let contN=1; contN<=100; contN++)
{
    let resultado = contN+n1;
    texto+=resultado+", ";

    if(contN%10==0)
        texto += "<br>";

    n1=resultado;
}
document.write("<p>"+texto+"</p>");
*/

//Factorial
/*
let n=5;
let resultado = n;
for(let contN=n-1;contN>0;contN--)
    resultado *= contN;
*/