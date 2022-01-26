const a = []; // un Array Vacio
console.log(a);

// declarando un arrays con valores de diferente tipos
const datos = [1, 22, "Hola Mundo", [1, "A", true]];

console.log(datos); // imprime el array
console.log(datos.length); // devuelve la cantidad de valores dentro del array

console.log(datos[2]); // para acceder a un valor dentro del array debemos indicar el indice de posicion

// un array puede tener dentro otro array tambien...

const paises = ["CentroAmerica", ["El Salvador", "Nicaragua", "Honduras"], "NorteAmerica", ["EE.UU", "Canada"]];
console.log(paises); // imprime el array
// devuelve la cantidad de valores dentro del array
console.log(paises.length); // la cantidad de valores del array o la longitud siempre empezara desde el uno(1)
// para acceder a un valor dentro del array debemos indicar el indice de posicion
console.log(paises[0]); // el indice de posicion siempre empezara desde el cero

// para acceder a una posicion de un array que esta como parametro dentro del array principal
// primero seleccionamos el indice del array hijo, en este caso se encuentra en el indice 1
// una vez seleccionado el indice del array hijo, pasamos el indice del dato que esta dentro del que queremos mostrar
// en este caso queremos Mostrar el pais El Salvador, se encuentra en el indice 0
console.log(paises[1][0]);

// otras maneras de crear arrays
const b = Array.of("A", "B", "C", 1, 2, 3); // con la propiedad Array.of
console.log(b);

// otra forma de crearlo
const c = Array(10).fill(true); // crear una cierta cantidad de elementos con un valor inicial
console.log(c);

// para agregar valores a un array
const colores = ["verde", "amarillo", "rojo", ["blanco", "gris"]];
colores.push("negro"); // con este metodo se agrega un nuevo elemento en el ultimo indice
console.log(colores);

colores[3].push("celeste"); // esto para agregar un elemento mas dentro de un array hijo
colores[3].push("naranja");

colores[3].pop(); // este es para eliminar el ultimo elemento del array hijo
colores.pop();
colores.pop();
console.log(colores);

// para recorrer un array con sus valores ejemplo, COLORES
colores.forEach(function (el, i) {
    // se muestra en consola
    // luego se puede agregar en el documento HTML ya como una lista
    console.log(`<li id="${i}">${el}</li>`); // esto es en caso que debamos mostrarlo en nuestro html
    document.write(`<a id="${i}" href="#">${el}</a>\n`);
})

colores.push(["blanco", "gris"]); // tambien se puede agregar arrays
colores.push({nombre: "uli"}); // se pueden agregar objetos tambien, en caso que necesites hacerlo

console.log("-------------------------------------------");
// para recorrer un array, que tiene diferentes tipos de datos
// en este array contiene otro array...
paises.forEach(function(el, i){
    console.log(i, el); // se muestra en consola de la siguiente manera
})

console.log("-------------------------------------------");
// para recorrer el array con sus valores, junto con los valores del array hijo
paises.forEach(function(el, i){ // el: son los valores, i: es el indice
    if (typeof el === "object") { // si en 'el' el tipo es un array, entonces va recorrer esos datos
        el.forEach(function(x, y){ // los va mostrar, sus valores
            console.log(y, x); // con su numero de indice
        })
    } else { // si no
        console.log(el); // va recorrer el array con sus valores
    }

});