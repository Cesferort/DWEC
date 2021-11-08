/**
 * LISTENERS & EVENTS
 */
let eleSelect_provincias=document.getElementById("select_provincias");
function pato(eventSource)
{
    if(eventSource.target.id=="select_provincias")
        console.log(eleSelect_provincias.selectedIndex);
    else 
        console.log("pato")
}
eleSelect_provincias.addEventListener("change", pato);
document.getElementById("enviar").addEventListener("click", pato);
document.getElementById("enviar").addEventListener("mouseover", pato); // o mouseenter
document.getElementById("enviar").addEventListener("mouseout", pato);  // o mouseleave
document.getElementById("enviar").addEventListener("mousedown", pato);
window.addEventListener("resize", pato);
//eleInputTxt_text.addEventListener("blur", pato);



/**
 * MOUSE & KEYBOARD
 */
window.onload=function()
{
	document.onmousemove=informacion;
	document.onkeypress=informacion;
}
function muestraInformacion(mensaje) 
{
    document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(var i=1; i<mensaje.length; i++) 
        document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
}
function informacion(eventSource)
{
	let mensaje=[];
	let tipoEvento=eventSource.type;
	if(tipoEvento=="mousemove")
	{
		let pageX=eventSource.pageX;
		let pageY=eventSource.pageY;
		let clientX=eventSource.clientX;
		let clientY=eventSource.clientY;
		
		mensaje[0]="Ratón";
		mensaje[1]="Navegador ["+pageX+", "+pageY+"]<br>Página ["+clientX+", "+clientY+"]";

		document.body.style.backgroundColor="white";
	}
	else if(tipoEvento=="keypress")
	{
		let codCaracter=eventSource.keyCode;
		let caracter=String.fromCharCode(codCaracter);

		mensaje[0]="Teclado";
		mensaje[1]="Carácter ["+caracter+"]<br>Código ["+codCaracter+"]";
	
		document.body.style.backgroundColor="#CCE6FF";
	}
	
	muestraInformacion(mensaje);
}