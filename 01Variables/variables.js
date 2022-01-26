// Variables
// Variable de Tipo Var

console.log("********** Variable Var **********");
console.log("");

var diaDeLaSemana = "Lunes"
console.log("Dia de la semana antes del bloque es: " + diaDeLaSemana);
{
    var diaDeLaSemana = "Martes"
    console.log("Dia de la semana dentro del bloque es: " + diaDeLaSemana);
}

console.log("Dia de la semana despues del bloque es: " + diaDeLaSemana);

// Variable de Tipo Let
console.log("");
console.log("********** Variable Let **********");
console.log("");

let mesDelAnio = "Enero"
console.log("Mes del Anio antes del bloque es: " + mesDelAnio);

{
    let mesDelAnio = "Febrero"
    console.log("Mes del Anio dentro del bloque es: " + mesDelAnio);
}

console.log("Mes del Anio despues del bloque es: " + mesDelAnio);

// Variables Const
console.log("");
console.log("********** Variable Const **********");
console.log("");

const PI = 3.1416;
console.log("Constante PI: " + PI + " no cambia su valor, ni puede ser modificado");
// PI = 2;

// console.log("Tratando de modificar una variable Const: " + PI); // da como resultado error, no se puede asignar un nuevo valor a una constante

// solo se puede declarar variable Const a tipos de datos primitivos, no aplica para tipos de datos compuestos

console.log("");
console.log("********** Aplicando CONST en tipos de datos Compuestos **********");
console.log("");

// podemos declarar un tipo de dato compuesto como el object y a la vez modificarlo
// el const solo aplica para tipos de datos primitivos
const datos = {
    nombre: "Ulises",
    edad: 21
};

const paises = ["El Salvador", "Honduras", "Costa Rica"];

console.log(datos);
console.log(paises);

datos.email = "uafc99@gmail.com";
paises.push("Panama");

console.log(datos);
console.log(paises);