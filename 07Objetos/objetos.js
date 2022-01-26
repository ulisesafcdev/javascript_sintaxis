const datos = {
    nombre: "Ulises Alexis",
    apellidos: "Flores Chavez",
    edad: 21,
    hobbies: ["programar", "jugar fifa", "pisar"],
    hijos: true,
    contactos: {
        email: "uafc99gmail.com",
        twitter: "@ulisesmoment"
    },
    mensaje: function () {
        console.log("Hello World!");
    }
}

console.log(datos); // se imprime el objeto
console.log(datos["nombre"]); // una manera de acceder a las propiedades

console.log(datos.edad); // manera mas utilizada de acceder a una propiedad del objeto
console.log("---------------------------------");

console.log(Object.keys(datos)); // imprime el nombre de las propiedades
console.log(Object.values(datos)); // imprime el valor de las propiedades
let info = Object.keys(datos);

let hob = datos.hobbies;

console.log(hob);

// for(const p in datos){

//     if(typeof datos[p] === "object"){
//         console.log(`${p}`);
//         for (const x in datos.contactos) {
//             console.log(`- ${x}: ${datos.contactos[x]}`);
//         }
//     } else if (typeof hob === "object") {
        
//         console.log(hob);
        
//     }else {
//         console.log(`${p}: ${datos[p]}`);
//     }

// }