
//Hoisting Exercises
name = 'Niki';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
};

console.log('some text'); 
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = ( a + b) / 2;
    return answer;
}

let a;
let b;
function myAvg() {
    let total = (a + b);
    return total;
    
}
myAvg(3, 5);


console.log('This is the end!');

// Scoping Exercises

var fruits = ['Apple', 'Watermelon', 'Peach', 'Kiwi'];
let favFruit;
let leastFav = (fruits[0])
function printFruit() {
    console.log(fruits[3]);
    favFruit = (fruits[1]);
}

function printFavFruit() {
    console.log(favFruit);
} 
printFruit();
printFavFruit();
console.log(leastFav);

function sayHello() {
    console.log('Hello Niki');
}
sayHello();


function myAlert() {
    alert('hi!');
};

myAlert();