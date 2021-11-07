let localStorage;
let shoppingCart;
let lista_eleAnchor_cursos;
let eleTbody_listaCarrito;
let eleAnchor_vaciarCarrito;

window.onload
{
    localStorage=window.localStorage;
    lista_eleAnchor_cursos=document.getElementsByClassName("agregar-carrito");
    eleTbody_listaCarrito=document.getElementById("lista-carrito").getElementsByTagName("tbody")[0];
    eleAnchor_vaciarCarrito=document.getElementById("vaciar-carrito");

    getShoppingCartFromLocalStorage();
    eventos();
}

function eventos()
{
    for(let i=0; i < lista_eleAnchor_cursos.length; i++)
    {
        let eleAnchor_curso=lista_eleAnchor_cursos[i];
        eleAnchor_curso.addEventListener("click", newItem);
    }   

    eleAnchor_vaciarCarrito.addEventListener("click", function()
    {
        localStorage.clear();
        getShoppingCartFromLocalStorage();
    });
}

function newItem(eventSource)
{
    let eleDiv_infoCard=eventSource.target.parentElement;
    let nombre=eleDiv_infoCard.getElementsByTagName("h4")[0].innerText;
    let imagen=eleDiv_infoCard.parentElement.getElementsByTagName("img")[0].src;
    let precio=eleDiv_infoCard.getElementsByClassName("u-pull-right ")[0].innerText;
    let cantidad=getCourseCountByName(nombre);

    addShoppingCart(nombre, imagen, precio, cantidad);
}

function addShoppingCart(nombre, imagen, precio, cantidad)
{
    if(cantidad == 1)
    {
        let newItem=
        {
            "nombre"    : nombre,
            "imagen"    : imagen,
            "precio"    : precio,
            "cantidad"  : cantidad            
        };
        addShoppingCartToLocalStorage(newItem);
    }
    else 
    {
        for(let i=0; i < shoppingCart.length; i++)
        {
            if(nombre == shoppingCart[i]["nombre"])
            {
                shoppingCart[i]["cantidad"]+=1;
                localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            }
        }
    }
    getShoppingCartFromLocalStorage();
}

function addShoppingCartToLocalStorage(newItem)
{
    shoppingCart[shoppingCart.length]=newItem;
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    getShoppingCartFromLocalStorage();
}

function getCourseCountByName(nombre1)
{
    let count=1;
    for(let i=0; i < shoppingCart.length; i++)
    {
        let item=shoppingCart[i];
        let nombre2=item["nombre"];

        if(nombre1 == nombre2)
            count++;
    }
    return count;
}

function getShoppingCartFromLocalStorage() 
{
    if(localStorage.getItem('shoppingCart') == null) 
        shoppingCart=[]; 
    else
        shoppingCart=JSON.parse(localStorage.getItem('shoppingCart'));

    refresh();
}

function refresh()
{
    let html=``;
    for(let i=0; i < shoppingCart.length; i++)
    {
        let item=shoppingCart[i];
        let nombre=item["nombre"];
        let imagen=item["imagen"];
        let precio=item["precio"];
        let cantidad=item["cantidad"];

        html+=`
        <tr>
            <td><img src=`+imagen+` width='100' height='100'></td>
            <td>`+nombre+`</td>
            <td>`+precio+`</td>
            <td>`+cantidad+`</td>
            <td></td>
        </tr>`;
    }

    eleTbody_listaCarrito.innerHTML=html;
}