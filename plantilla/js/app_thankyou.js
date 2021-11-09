let eleButton_volver;
window.onload 
{
    eleButton_volver=document.getElementById("volver");
    eventos();
}

function eventos()
{
    eleButton_volver.addEventListener("click", close);
}

function close()
{
    window.location.href = "index.html";
}