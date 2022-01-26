// el try catch finally, ejecuta el codigo y cualquier error que ocurra
// el catch captura ese error, y podemos personalizar ese error sin que se cuelgue el proceso (error de consola)
// el finally siempre se va a ejecutar al finalizar el codigo

try {
    // console.log("Codigo a ejecutar");
    
} catch (error) {
    // console.log("Captura el error del codigo que se ejecuto");
} finally {
    // console.log("Este bloque siempre se ejecuta");
}

try {
    let a = 22;
    let b = abc;
    console.log(a + b);
} catch (error) {
    console.info("Por favor define un valor valido!" + error);
}