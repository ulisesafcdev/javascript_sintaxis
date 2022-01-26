import PI, { usuario } from "./constantes.js";
import mensaje, { operaciones as op } from "./aritmetica.js";

console.log("Modulos JS");
console.log(PI);
console.log(usuario);

console.log("***********************");

mensaje();

console.log(`Suma: ${op.sumar(12, 8)}`);
console.log(`Resta: ${op.restar(32, 12)}`);
console.log(`Division: ${op.dividir(100, 5)}`);
console.log(`Multiplicacion: ${op.multiplicar(12, 7)}`);