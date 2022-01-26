// funcion declarada, esta funcion se puede invocar en todo el documento

estaEsUnaFuncionDeclarada(); // una funcion declarada se puede invocar antes de su declaracion

function estaEsUnaFuncionDeclarada(){
    console.log("Esta es una funcion declarada!");
}

estaEsUnaFuncionDeclarada();

console.log("****************************************");
console.log("");
console.log("****************************************");

function funcionQueRetornaValor(){ // funcion que retorna valor como una cadena de texto
    console.log("Funcion que retorna valor!");
    console.log("1");
    console.log("2");

    return "Esta funcion retorna una cadena de texto";
}

let outFuncion = funcionQueRetornaValor();

console.log(outFuncion);

console.log("****************************************");

function sumar() { // funcion que retorna valor como un resultado de una operacion aritmetica
    let a = 7;
    let b = 13;
    let resultado = a + b;

    return resultado;
}

console.log(`Resultado de la suma: ${sumar()}`);

console.log("****************************************");

function multiplicar(a, b){ // funcion que retorna una operacion para dar como resultado un valor, dicha funcion se le envian como parametro dos valores
    return a * b;
}

console.log(`Resultado de la multiplicacion: ${multiplicar(7, 6)}`);

console.log("****************************************");

function giveMeYourName(nombre = "Usuario1"){ // funcion con parametro ya inicializado con un valor
    return `Bienvenido ${nombre}`
}

console.log(giveMeYourName("Jared")); // invocando funcion y sustituyendo el valor inicializado por Jared
console.log(giveMeYourName()); // invocando funcion sin ningun parametro, imprime el valor del parametro ya inicializado

console.log("****************************************");
console.log("FUNCIONES ESPRESADAS(FUNCIONES ANONIMAS)");
console.log("****************************************");

const funcionExpresada = function () { // estas funciones expresadas no nos permite invocarla antes de declararla
    console.log("Esta es una funcion expresada anonima!");
}

funcionExpresada(); // se debe de declarar antes de invocarla para poder hacer uso de esta funcion expresada