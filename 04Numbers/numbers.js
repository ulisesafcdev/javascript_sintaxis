console.log("********** Numbers in JS *********");

let a = 5;
let b = new Number(3);

console.log(`Este es un numero: ${a}`);
console.log(`Este es un numeor: ${b}`);

let c = 7.6900;
let d = "22.11"

console.log(`Este tambien es un numero: ${c}`);
console.log(`Aproximando numero: ${c.toFixed()}`); // este metodo aproxima el numero, el valor que se pase sera el que se va a aproximar despues del punto
console.log(`${parseInt(c)}`); // convierte a number

console.log("****************************************");
console.log(`Se muestra el Tipo de datos: ${typeof c}, ${typeof d}`);

console.log("****************************************");

console.log(`Sumando un Number con un String: ${c + d}`); // solo concatena la variable c con la variable d, no realiza la operacion

console.log(`Sumando un Number con un String ya convertido a number: ${c + Number.parseFloat(d)}`);

console.log("****************************************");
console.log("---------------BOOLEANOS----------------");

let verd = true;
let fals = false;

console.log(verd, fals);
console.log(typeof verd, typeof fals);

// undefined and null
console.log("****************************************");
console.log("****************************************");
console.log("UNDEFINED AND NULL"); // representa un valor vacio
let indefinido;
console.log(indefinido); // valor vacio, da como resultado :undefined ... valor no asignado por nadie

let nulo = null;
console.log(nulo); // valor vacio pero asignado intencionalmente como vacio...

let mult = "hola";
console.log(mult * 2.5); // NaN Not a Number, no se puede multiplicar porque no es un numero