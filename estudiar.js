var paises = ['Israel','Colombia', 'Venezuela', 'Australia', 'Austria', 'Alemania'];

let paisesAdicionales =  ['New Zeland', 'Ireland'];

const living =`Quiero vivir en ${paises[3]}`;


// saber la posicion de un elemento

console.log(paises.indexOf('Colombia'));


// saber si un elemento en la array comple con la  condicion de 5 letras

let paises5 = paises.some((pais) => {
    return pais.includes('I'); 
});

console.log(paises5);

//saber si todos los elementos cumplen con una condicion

let paiseString = paises.every((pais) => {
    return pais.includes('a');
    });

console.log(paiseString);

// retornar Australia
let buscarAustralia = paises.find((pais) => {
    return pais === 'Australia';
});

console.log(buscarAustralia);


//Retornar con at

console.log(paises[1]);
console.log(paises.at(1));
console.log(paises.at(-1));



//saber si un elemento esta en un array


console.log(paises.includes('Austria'));

let posicionAlemenia = paises.findIndex((pais) => {
    return pais === 'Alemania';
})
console.log(posicionAlemenia);

let years = [5,10,2,25,7];

years.sort((a,b) => {
    return a - b;
});

console.log(years);



let filtrara8 = paises.filter((pais) => {
    return pais.length < 8;
})

let viajar = filtrara8.map((destino) => {
    return `Opcion ${destino}`
});

console.log(viajar);

// sumar con reduce


let sumararray = years.reduce((acumulado,actual,index) => {
    return acumulado + actual;
})

console.log(sumararray);