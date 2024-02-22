class Producto {
    constructor(nombre, precio, madera) {
        this.nombre = nombre;
        this.precio = precio;
        this.madera = madera ;
    }
    
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}


function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function recuperarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
} 

function renderProductos() {
    let productos = recuperarProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-3">
        <div class="card text-center">
        <div class="card-body">
            <p class="card-text">${producto.nombre}</p>
            <p class="card-text">${producto.madera}</p>
            <p class="card-text">$${producto.precio}</p>
        </div>
        </div>
        </div>`;
    }

    document.getElementById('resultado').innerHTML = contenido;
}

function guardarDatos() {
    let valorNombre = document.getElementById("nombre").value;
    let valorPrecio = document.getElementById("precio").value;
    let valorImagen = document.getElementById("madera").value;

    //console.log(valorNombre + " - " + valorPrecio + " - " + valorImagen);
    let nuevoProducto = new Producto(valorNombre, valorPrecio, valorImagen); // Crear un nuevo Producto con los datos ingresados del Formulario
    nuevoProducto.sumaIva();
    //console.log(nuevoProducto);

    let productos = recuperarProductosLS(); // Recupero mi Array de Productos;
    productos.push(nuevoProducto);
    //console.log(productos);

    guardarProductosLS(productos); // Guardar el producto en la localStorage
    document.getElementById('resultado').innerHTML = `<div class="alert alert-success" role="alert">Los datos se guardaron correctamente!</div>`; // Imprimo el mensaje
}

function eliminarDatos() {
    localStorage.removeItem("productos"); // Eliminar la localStorage productos
    document.getElementById('resultado').innerHTML = `<div class="alert alert-success" role="alert">Los datos se eliminaron correctamente!</div>`;
}

document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos);
document.getElementById("btnRecuperarDatos").addEventListener("click", renderProductos);
document.getElementById("btnEliminarDatos").addEventListener("click", eliminarDatos);
