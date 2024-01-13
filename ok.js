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


/* SWITCH */

var country = "AS";

switch (country) {
    case "CO":
            console.log('Colombia');
        break;
    case "AU":

            console.log("Australia");
        break;
    case "AS":

        console.log("Austria");
    break;
    default:
        console.log("colombia");
}

/* for */

var estudiante= ['Maria','Juan','Pedro'];

function saludarEstudiante (estudiante){
    console.log(`hola ${estudiante}`);
}

for (i=0;i<estudiante.length;i++){
    saludarEstudiante(estudiante[i]);
}

/* for of */

var countries=["colombia","Austria","Alemania"];

function nombrarpaises(country){
    console.log(`${country}`);
}

for (var country of countries) {
    nombrarpaises(country);
}


/* while */

var objetos= ['balon','mesa','silla'];

function decircosas(palabra){
    console.log(`Esto es ${cosa}`);
}

while (objetos.length > 0) {
    var cosa=objetos.shift();
    decircosas(cosa);

}

/* array */

var cosaOficina = ['lapiz', 'computadora', 'borrador'];

console.log(cosaOficina[1]);
console.log(cosaOficina.push("cuaderno"));
console.log(cosaOficina.pop());
console.log(cosaOficina[3]);
console.log(cosaOficina.unshift('primera cosas'));
console.log(cosaOficina.shift());
console.log(cosaOficina[0]);


console.log(cosaOficina.indexOf("computadora"));


    /* array .filter() */

    var articulos = [
        {nombre: 'bici', costo: 3000 },
        {nombre: 'tv', costo: 2500 },
        {nombre: 'Libro', costo: 320 },
    ];

    var artifiltrados = articulos.filter(function (articulo){
        return articulo.costo <= 500
    });

    console.log(artifiltrados);

    /* array map() */

    var nomarti = articulos.map(function(arti){
        return arti.nombre
    });

    console.log(nomarti);

    /* array find */

    var encuarti = articulos.find(function (arti) {
        return arti.nombre === 'bici'
    });

    console.log(encuarti);

     /*  array some */

     var artibaratos = articulos.some(function (arti) {
        return arti.costo <= 2700;
     });

     console.log(artibaratos);


    /* array for each  */

    articulos.forEach(function (por){
        console.log(por.nombre);
    });

   


    