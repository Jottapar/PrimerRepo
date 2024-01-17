
var paises = ['Venezuela','Colombia','Austria', 'Alemania'];

var prendas = [
    {tipo: 'Camisa', color: 'Blanco'},
    {tipo: 'Franela', color: 'Gris'},
    {tipo: 'Chemise', color: 'Azul'}
];

var Colombia = {
    capital: 'Bogota',
    moneda: 'Pesos',
    comida: 'Bandeja paisa',
    musica: 'Vallenato'
};

const Austria = {
    capital: 'Viena',
    moneda: 'Euros',
    comida: 'El buñuelo',
    musica: 'Gaita'
};

function comida ({comida}) {
    console.log(comida);
};

comida(Austria); 

