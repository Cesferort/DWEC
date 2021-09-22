let cadena = '¡Hola!';
function conseguirString()
{
    document.write(cadena);
}
function conseguirLongitud()
{
    document.write(cadena.length);
}
function generarTabla()
{
    let i;

    document.write("<tr>");
    document.write("<td>Posición</td>");
    for(i=0;i<cadena.length;i++)
        document.write("<td>"+i+"</td>");
    document.write("</tr><tr>");

    document.write("<td>Contenido</td>");
    for(i=0;i<cadena.length;i++)
        document.write("<td>"+cadena[i]+"</td>");
    document.write("</tr>");
}