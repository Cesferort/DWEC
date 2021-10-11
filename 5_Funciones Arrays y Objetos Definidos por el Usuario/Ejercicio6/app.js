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