
//Arrow functioon, for y for of

var cosas = ['limpion', 'escoba', 'trapero', 'canasta'];

let nombrar = (cosa) => {
    console.log(`la cosa es ${cosa}`);
};

for ( var i = 0; i < cosas.length; i++ ) {
    nombrar(cosas[i]);
}

for ( var cosa of cosas) {
    nombrar(cosa);
}


//while
var ropa = ['pantalon', 'camisa', 'chaqueta', 'franela'];

function seleccionar (prenda){
    console.log(`${prenda} fue sacada del armario`);
}

while (ropa.length > 0) {
    var prenda = ropa.shift();
    seleccionar(prenda);
}

// switch

var paises = ['Colombia', 'Venezuela','Salvador','Italia','Austria','Tokio'];

function capitales(pais) {
    switch (pais) {
        case 'Colombia':
            console.log('Bogota');
            break;
        case 'Venezuela':
            console.log('Caracas');
            break;
        case 'Salvador':
            console.log('San Salvador');
            break;
        case 'Italia':
            console.log('Roma');
            break;
        case 'Austria':
            console.log('Viena');
            break;
        default:
            console.log('No es un pais');
    }
}

for (var pais of paises) {    
    capitales(pais);
}


//arrays

var marcas = ['ferrari', 'toyota', 'lamborguini', 'honda', 'Mclaren'];

console.log(marcas.shift());
marcas.unshift('Ford');
console.log(marcas);
marcas.pop();
console.log(marcas);
marcas.push('Kia');
console.log(marcas);

var buscarMarca = marcas.filter(function (marca){
    return marcas[1];
})
console.log(buscarMarca);
