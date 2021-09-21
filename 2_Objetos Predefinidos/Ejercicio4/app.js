let height = window.screen.height;
let width = window.screen.width;
let resol = height+"x"+width;

function aniadirEstilo()
{
    for(let elementHTML of document.getElementsByClassName("caja"))
        elementHTML.setAttribute("style","margin: 5px");
    
    document.getElementById("screen").style.border='2px solid blue';
    document.getElementById("screen").style.padding="10px";

    document.getElementById("navigation").style.border='2px solid red';
    document.getElementById("navigation").style.padding="10px";
    
    document.getElementById("document").style.border='2px solid green';
    document.getElementById("document").style.padding="10px";
    
    document.getElementById("location").style.border='2px solid yellow';
    document.getElementById("location").style.padding="10px";
}

function detectBrowser() 
{ 
    let browser = "No conocido";
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
        browser = "Opera";
    else if(navigator.userAgent.indexOf("Chrome") != -1 ) 
        browser = "Chrome";
    else if(navigator.userAgent.indexOf("Safari") != -1) 
        browser = "Safari";
    else if(navigator.userAgent.indexOf("Firefox") != -1 )
        browser = "Firefox";
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) 
        browser = "IE";
    
    return browser;
}

function detectBrowserVersion()
{
    let browser = "No conocida";
    return navigator.appVersion;
}

function detectOS()
{
    let os = "No conocido";
    if (navigator.appVersion.indexOf("Win") != -1) 
        os = "Windows OS";
    else if (navigator.appVersion.indexOf("Mac") != -1) 
        os = "MacOS";
    else if (navigator.appVersion.indexOf("X11") != -1) 
        os = "UNIX OS";
    else if (navigator.appVersion.indexOf("Linux") != -1) 
        os = "Linux OS";

    return os;
}

function detectURL()
{
    return document.location.pathname;
}

function detectLocation()
{
    return document.location.protocol;
}