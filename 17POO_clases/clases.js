// definimos una clase (antes una funcion constructora)
class Automovil {

    constructor(color, transmision, tipo){ // su constructor como tal

        this.color = color;
        this.transmision = transmision;
        this.tipo = tipo;

    }

    // metodos dentro de la clase, en este caso si podemos definirlos dentro ya que estamos usando
    // las nuevas funcionalidades de ES6
    acelerar () {
        console.log("Acelerando...");
    }

    frenar () {
        console.log("Frenando...");
    }

    descripcion () {
        console.log(`Automovil ${this.color} de transmision ${this.transmision} y es tipo ${this.tipo}`);
    }

}

// heredando de clase Automovil
class Furgoneta extends Automovil {

    constructor (color, transmision, tipo, peso) { // su constructor propio como tal
        super(color, transmision, tipo); // con este metodo invocamos el constructor de clase Padre (Automovil)
        this.peso = peso;
    }

    // siempre se puede sobreescribir metodos heredados
    descripcion () {
        console.log(`Soy una furgoneta de ${this.peso}`);
    }

}

// objeto clase padre
const obj1 = new Automovil("Rojo", "Automatica", "Sedan");
console.log(obj1);
obj1.descripcion();

console.log("********************************************");

// objeto heredado
const obj2 = new Furgoneta("Gris", "Mecanica", "Camion", "8 toneladas");
console.log(obj2);
obj2.descripcion();