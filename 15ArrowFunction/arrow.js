let nombre = "Erlinda";
const saludo = nombre => console.log(`Bienvenido ${nombre}`);

saludo("UlisesAFC");

const datos = {
    nombre: "UlisesAFC",
    edad: 22,
    saludo: () => {
        console.log(this);
    }
}

datos.saludo();