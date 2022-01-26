
// ejemplos de prototipos en JS

const datos = {
    nomnre: "UlisesAFC",
    edad: 22
}

const numero = [1,2,3,4,5,6,7,8,9];

console.log(datos);
console.log(numero);

console.log("***************************");

// funcion constructora
function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
}

// cada animal tiene algo en particular y es que todos emiten un sonido
// lo mas recomendable para asignar funciones a nuestra funcion constructora es asignandolo al prototipo
// de la funcion constructora...

// const sonar = function () {
//     console.log("Hago sonidos");
// }

// de esta maanera haremos uso de esta funcion solo cuando la necesitemos
// de lo contrario si la asignamos dentro de la funcion constructora esta siempre se cargara... e imaginemos
// que tenemos miles de animales, pero no queremos hacer uso de la funcion... entonces mil veces se 
// estaria cargando la funcion sonar() y estaria usando mucha memoria, eso afectaria al rendimiento de 
// nuestra funcion
Animal.prototype.sonar = function () {
    console.log(`Hago sonidos y me llamo ${this.nombre}`);
}

// ahora podemos hacer instancia de esa funcion y crear mas de un objeto con esos datos
// en este caso crearemos muchos animales con diferentes nombres y diferentes generos

const perro = new Animal("Cliford", "Macho");
const gato = new Animal("Garfield", "Macho");
const conejo = new Animal("Lola Bunny", "Hembra");

console.log(perro);
console.log(gato);
console.log(conejo);

perro.sonar();
gato.sonar();
conejo.sonar();

console.log("**************************************");
console.log("**************************************");
console.log("**************************************");

/* 

    HERENCIA PROTOTIPICA

*/

// funcion constructora
function PrendaDeVestir(color, tamanio){
    this.color = color;
    this.tamanio = tamanio;
}

// funcion asignada al prototipo de la funcion constructora
PrendaDeVestir.prototype.descripcion = function() {
    console.log("Hecha 60% algodon y 40% poliester");
}

// realizaremos una herencia prototipica

/* 
crearemos una function constructora en base a la que ya tenemos: "PrendaDeVestir()"
en donde "PrendaDeVestir()" sera el Padre y la que crearemos sera el hijo.
*/

function Camisa(color, tamanio, genero, talla){
    this.super = PrendaDeVestir; // invocamos al constructor de "PrendaDeVestir()"
    this.super(color, tamanio); // ya invocado, mandamos los parametros que tiene el constructor
    // asignamos los demas parametros adicionales 
    this.genero = genero;
    this.talla = talla;
}

// CAMISA esta heredando de PRENDA DE VESTIR

Camisa.prototype = new PrendaDeVestir; // es aca donde se termina de hacer la HERENCIA
Camisa.prototype.constructor = Camisa; // se asigna su propio constructor***

// se puede sobreescribir los metodos que son heredados del padre
// Camisa esta heredando el metodo descripcion, este metodo lo podemos sobreescribir
Camisa.prototype.descripcion = function () {
    console.log("Camisa hecha en Alemania, 70% Poliester 30% algodon");
}

const obj1 = new Camisa("Blanco", "Mediano", "Hombre", "XS");
console.log(obj1);
obj1.descripcion();