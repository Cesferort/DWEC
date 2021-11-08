// Datos
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