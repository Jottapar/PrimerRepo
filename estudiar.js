var paises = ['Israel','Colombia', 'Venezuela', 'Australia', 'Austria', 'Alemania'];

let paisesAdicionales =  ['New Zeland', 'Ireland'];

const living =`Quiero vivir en ${paises[3]}`;




// iterar con forEach
let opcionesPaises = paises.forEach( (pais, index, originalArray) => {
    
    console.log(`${index+1} opcion es ${pais} --- forEach`);
});



//iterar con while

let i = 0;

while (i < paises.length) {
    i++
    console.log(`${i} opcion es ${paises[i-1]} --- while`);
};


//iterar con for

for ( let j = 1; j < paises.length; j++) {
    console.log(`${j} opcion es ${paises[j-1]} --- for`);
};

