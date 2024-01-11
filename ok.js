var saludo='hola';

var sumar=1+1;

console.log(sumar);
console.log(saludo);

sumar-2;

console.log(sumar);

sumar++;

console.log(sumar);

/* Funcion Declarativa */
function newUser (name, age, country){
    var name = name || "Carlos";
    var age = age || 19;
    var country = country || "co";

    console.log(name, age, country);
}

newUser();
newUser('Johan',36,"ve");


/* funcion expresiva */
var viajar = function (country,dias) {
    var country = country || "austria";
    var dias = 15;

    console.log(country,dias);
}

viajar();

var numero = 3;

if (numero == 1) {
    console.log(`es ${numero}`);
    } 
    else if (numero == 2) {
        console.log(2);
    }
    else {
        console.log(3);
    }



    /* Funcion Ternaria */
numero == 4 ? console.log("es igual a 4"): console.log(5);


