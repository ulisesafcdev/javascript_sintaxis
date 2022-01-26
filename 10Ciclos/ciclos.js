// estructuras repetitivas

// ciclo 'while'
// antes de realizar el loop, realiza una validacion para que pueda procesarse el ciclo

let contador = 1; // declaramos una variable contador...

// declaramos el ciclo while

// antes de entrar al ciclo se hace una validacion
// while quiere decir 'mientras'...

while (contador <= 10) { // mientras contador (el valor de contador) sea mayor o igual a 10
    // entonces... realizar el siguiente proceso
    console.log(`Ciclo While: ${contador}`);

    contador++; // aca se incrementa la variable contador 1 en 1
}

// aca volvemos a inicializar la variable en uno, ya que viene con el valor de 10 al salir del ciclo while
contador = 1;

// declaramos ciclo 'do while'
// este ciclo a comparacion del anterior, este primero realiza la operacion y despues lo valida
// almenos una vez se va ejecutar el codigo antes de evaluarlo
//esa es la diferencia entre el 'while' y el 'do while'

do {
    console.log(`Ciclo Do While: ${contador}`);
    contador++;
} while (contador <= 10);

console.log("------------------------------------");
console.log("--------TABLA DE MULTIPLICAR--------");
console.log("------------------------------------");

// CICLO FOR
// para hacer uso de este ciclo haremos dos pruebas

// 1: ejemplo de una tabla de multiplicar

// declaramos una variable con el numero de la tabla que queremos saber, en este caso es la tabla del 3
let tabla = 3;

// declaramos el ciclo for
// esta compuesto en una sola linea, la variable contador, la condicion, y el aumento del contador (++)
for (let i = 0; i <= 10; i++) {
    let result = tabla * i;
    console.log(`${tabla} x ${i} = ${result}`);
}

console.log("----------------------------------------");

// 2: ejemplo recorriendo un array con for

let datos = ["A", "E", "I", "O", "U", 1, 2, 3, 4, 5];

for (let i = 0; i <= datos.length - 1; i++) {
    console.log(`For: ${datos[i]}`);
}
console.log("****************************************");
// CICLO FOR IN

// el ciclo for in nos permite recorrer las propiedades de un objeto

const odiseo = { // declaramos un objeto
    nombre: "Ulises",
    apellido: "Flovez",
    edad: 22
}

// declarando el ciclo for in
for (const propiedad in odiseo) {
    console.log(`${propiedad}: ${odiseo[propiedad]}`);
}
console.log("---------------------------------------");
// CICLO FOR OF

// el ciclo for of nos permite recorrer arrays y strings

let datosA = [1, 2 , 3, "Hola Mundo", true]; // declaramos un array

// declaramos el ciclo for of

for (const item of datosA) { // recorriendo un array
    console.log(item);
}

let frase = "Hola Mundo";

for (const p of frase) { // recorriendo un string
    console.log(p);
}