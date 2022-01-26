
// creando una clase
class Producto {

    constructor (nombre, tipo) {

        this.nombre = nombre;
        this.tipo = tipo;

        this.precio = null;

    }

    // metodo por defecto es publico
    descripcion () {
        console.log(`Nombre del Producto: ${this.nombre}\nTipo de Producto: ${this.tipo}`);
    }

    // mtodo setter, asignamos un valor a precio
    set setPrecio(precio) { 
        this.precio = precio;
    }

    // metodo getter, nos devuelve el valor que le asignamos
    get getPrecio() {
        return this.precio;
    }
}

const obj1 = new Producto("Manzana", "Fruta");
console.log(obj1);

obj1.setPrecio = 2.59;
console.log(`Precio: $. ${obj1.getPrecio}`);;

obj1.descripcion();

// Producto.descripcion();