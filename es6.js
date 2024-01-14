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

var greetting = (persona)=>{
    return `hola ${persona1}`;
}

console.log(saludo());
console.log(greetting());

/* default paraments */

function newUser (name, age, country){
    var name = name || 'Oscar;'
    var age = age || 19;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();
newUser('david',15,'Austria');

function newAdmin (name = 'Johan', age = 36, country = 'Colombia') {
    var name1 = name;
    var age1 = age;
    var country1 = country;
    console.log(name1, age1, country1);
}

newAdmin();
newAdmin('Juan',33,'Colombia');


/* Rest Spread */
                 /*  arrays */

let fruits = ['apple','banana'];
let [ a, b] = fruits;
console.log( a, b);

                 /* objects */

let user = {username: 'johan', age: 36};
let {username, age} = user;
console.log(username, age);


            /* Spread Operator */

let person = {name: 'oscar', age: 24};
let country = 'Mexico';

let data = {...person, country};
console.log(data);

             /* Rest Parameteres */

function sum (num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3);

/* exmaple */

function solution(json1 = {name: "Mr. Michi", food: "Pescado"}, json2 = { age: 12, color: 'blanco'}) {

    return {...json1, ...json2};
  }
  
  console.log(solution());
  console.log(solution({name: 'bigotes', food: 'pollito'}));

/* obejects literals */

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
};

console.log(newUser('johan',36,"Colombia",1));