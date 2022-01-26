// DESTRUCTURACION
// es cuando queremos alojar cierto datos en una sola variable

const usuario = {
    nombre: "Ulises",
    edad: 22,
    email: "uafc99@gmail.com",
    contacto: {
        twitter: "ulisesmoment",
        instagram: "ulisesmoment"
    }
}

let {nombre, edad, email} = usuario;


let {twitter, instagram} = usuario.contacto;


console.log(`Nombre: ${nombre} \nEdad: ${edad} \nEmail: ${email}`);
console.log(`Contactos: \n\n\tTwitter: ${twitter}\n\tInstagram: ${instagram}`);