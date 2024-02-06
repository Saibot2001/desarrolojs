//Declaracion Array
const productos = [
    {id:1, nombre:"Silla", madera:"Roble", precio: 5000},
    {id:2, nombre:"Silla", madera:"Pino", precio: 3000},
    {id:3, nombre:"Mesa", madera:"Roble", precio: 7000},
    {id:4, nombre:"Mesa", madera:"Pino", precio: 2000},
    {id:5, nombre:"Banco", madera:"Roble", precio: 9000},
    {id:6, nombre:"Banco", madera:"Pino", precio: 1500},
]

class Carrito{
    constructor(){
        this.productos = [];
        this.totalPagar = 0;
    }
    agregarProducto(id) {
        let producto = productos.find(prod => prod.id === id);

        if(producto){
            this.productos.push(producto);
            console.log("Agregagste el producto #" + id + "al carrito");
        }else{
            console.log("No se agrego producto");
        }
    }
    calcularTotalPagar() {
        let total = 0;
        this.productos.forEach(item => {
            total += item.precio;
        });
        return total;
    }
}
//ejecuto
function listarProductos() {
    let salida = "";
    productos.forEach(item => {
        salida += item.id + "-" + item.nombre + "- " + item.madera  +"-$" + item.precio + "\n";
    })
    return salida
}
const carrito = new Carrito();
let opcionSeleccionada= parseInt(prompt("Seleccione el producto a agregar: 0 para salir \n\n" + listarProductos()));

while(opcionSeleccionada !=  0){
    opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar: 0 para salir \n\n" + listarProductos()));

    if (opcionSeleccionada == 0){
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

let totalPagar = carrito.calcularTotalPagar();
let totalIva   = totalPagar * 1.21;
let iva        = totalPagar * 0.21
alert("El Total a pagar es: $"+ totalPagar);
alert("IVA discriminado:$" + iva);
alert("Total a pagar incluyendo IVA: $" + totalIva);