let nombre = "Ulises Alexis Flores Chavez"

console.log(nombre.length);
console.log(nombre.charAt(3)); // devuelve el caracter segun la posicion, empeiza contando desde cero

let saludo = new String("Hola Mundo");
console.log(saludo);
console.log(nombre.toUpperCase()); // convierte a nayusculas

let buscar = nombre.includes("flores"); // retorna un valor boolean si la palabra existe en la oracion
console.log(buscar);

if (buscar == true) {
    console.log("Si existe el apellido Flores");
} else {
    console.log("No existe el apellido Flores");
}

console.log("*************************************");
console.log(nombre.trim()); // elimina los espacios a los lados de la cadena de texto
console.log("*************************************");
console.log(nombre.split(" ")); // separa las palabras segun el valor que se le ponga, y que la frase tenga ese valor para poder separarlos
