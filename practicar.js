/* promises */

const partido = () => {
    return new Promise ((resolve, reeject) => {
        if (true) {
            resolve('gano el barcelona');
        } else {
            reeject('gano el madrid');
        }
    })
};

partido()
    .then(response => console.log(response))
    .catch(err=>console.log(err));

/*  clases */

class presentacion {
    constructor (name, apellido) {
        this.name = name;
        this.apellido = apellido;
    }
    saludar () {
        return 'Hola';
    }
    Preguntar () {
        return 'Como estas?';
    }
    greeting () {
        return `${this.saludar()} ${this.name} ${this.Preguntar()}`;
    }
    get verapellido () {
        return this.apellido;
    }
    set cambiarApillido (nuevoapellido) {
        this.nuevoapellido = 'Pardo';
    }
}

const saludisimo = new presentacion('Johan','Escobar');

console.log(saludisimo.greeting());
console.log(saludisimo.verapellido);
console.log(saludisimo.cambiarApillido = 'Pardo');

