// condicionales en js 
// las condicionales son una decision que si se cumple o no se debe hacer un proceso determinado

// por ejemplo, si eres mayor de edad, mayor de 18 años entonces ya puedes tramitar tu numero de identificacion
// si no, si eres menor de 18 años, entonces No puedes tramitar tu numero de identificacion

// EMPEZEMOS...

let edad = 17; // declaramo una variable

// declaramos la condicion
if (edad >= 18) { // si el valor de edad es mayor o igual a 18
    console.log("Ya eres mayor de edad, puedes tramitar tu numero de identificacion.")
} else { // si no se cumple la condicion
    console.log("Eres menor de edad, aun no puedes tramitar tu numero de identificacion.")
}

// condicionales anidados

let aguinaldoBasico = 300.00;
let aguinaldoPremium = 500.00;
let ageWork = 4;

if (ageWork > 0 && ageWork <= 3) { // si años de trabajo es menor o igual a 3 años (osea: 3 años, 2 años, 1 año, menos de un año)

    console.log(`Tu aguinaldo es de $. ${aguinaldoBasico.toFixed(2)}`);
    
} else if (ageWork > 3) { // si años de trabajo ya son mas de 3 años (osea: 4 años en adelante)
    console.log(`Tu aguinaldo es de $ ${aguinaldoPremium.toFixed(2)}`);
} else if (ageWork === 0) {
    console.log("NO hay años laborados");
} else {
    console.log("HUBO UN ERROR!");
}

// condicionales ternarios:
// la condicion ternario es aquella que se realiza en una sola linea
// esta condicion solo es cuando se debe de validar una condicion, y que se cumpla una de dos

// volviendo al ejemplo de mayor de edad

let mayorDeEdad = 22;
let ternario = (mayorDeEdad >= 18) ? console.log("Ya puedes tomar alcohol.") : console.log("Prohibido!");

// condicional switch
// la condicion switch son casos, con varios casos que se pueden validar
// Por Ejemplo:

let mesesDelAge = 6;

// declaramos la condicional switch
switch (mesesDelAge) { // la 'key' va ser la variable que se va a evaluar, segun el valor que tenga
    case 1: // aca en value es el valor que se va validar segun la key (variable)
        // si el value es 1 va imprimir lo siguiente
        console.log("Corresponde a ENERO");
        break;
    
    case 2:
        console.log("Corresponde a FEBRERO");
        break;

        // y asi sucesivamente van los casos, segun el caso que se valide se realizara el proceso correspondiente

    default:
        console.log("No existe"); // esto nos sirve cuando no hay un caso que validar...
        break;
}