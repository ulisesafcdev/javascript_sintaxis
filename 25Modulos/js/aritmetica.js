function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

export const operaciones = {
    sumar,
    restar,
    dividir,
    multiplicar
}

export default function mensaje(){
    console.log("Operaciones Aritmeticas");
}