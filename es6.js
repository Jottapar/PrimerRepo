/* nuevas variables */

var nickname = 'carlos';
let nicknamelet = 'david';
const nickcon = 'pedro';

nickname= 'oscar';
nicknamelet = 'pablo';


console.log(nickname);
console.log(nicknamelet);
console.log(nickcon);



const names = () => {
    if(true){
        var name1 = 'johan';
        let name2 = 'pablo';
        const name3 = 'cesar';
    }
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

names();

/* arrow function */
var persona1='johan';

function saludo(persona){
    return `hola ${persona1}`;
}

var greetting= (persona)=>{
    return `hola ${persona1}`;
}

console.log(saludo());
console.log(greetting());
