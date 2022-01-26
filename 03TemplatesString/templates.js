// las template String son concatenaciones

// normalmente se hacian de la siguiente manera

let nombre = "Ulises Flores"
let saludo = "Bienvenido"

console.log("Hola, " + saludo + " " + nombre); // esta era la manera en la que se hacia

// A continuacion una mejor forma para hacerlo
// templatesString

let pais = "El Salvador"
let bienvenida = "Bienvenido"

console.log(`Hola, ${nombre} ${saludo} a ${pais}`);

console.log("**********************************************");

let lista = `
    <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Servicios</li>
        <li>Acerca de</li>
    </ul>
`;

