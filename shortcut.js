//'almas',5,true,{},[] or anything else that isn't falsy is will be truthy.
//'',0,false,null,undefined (falsy values are limited)

//check truthy
let myVar = 5;
//check any truthy
if (myVar) {
    myVar = myVar * 5;
}
else {
    myVar = 0;
}

//check negative or falsy anything
let myMoney = 50;
if (!myMoney) {

}

const money = 800
let food;
if (money > 100) {
    food = 'birani';
}
else {
    food = 'cha biscuit';
}

//ternary operator
let food1 = money > 100 ? 'birani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);

//number to string conversion
const num1 = 52;
console.log(num1);
const numString = num1 + '';
console.log(numString);

//string to number
const input = '560';
const inputNumber = +input;
console.log(inputNumber);


let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser;
//use && if the left side is true then right side will be executed
isActive && showUser();
//use || if the left side is false then the right side will be executed
isActive || hideUser();

//toggle boolean(inverted boolean)
isActive = !isActive;
console.log(isActive);




const myVariable = '';
if (!myVariable) {
    console.log('hello');
}
else {
    console.log('hi');
}
//by using ternary operator
console.log(!myVariable ? 'hello' : 'hi');
//use && if the left side is true then the right side will be executed
console.log(myVariable && 'hello');
//use || if the left side is false then the right side will be executed 
console.log(myVariable || 'hello');

// string to number convertion 
const string1 = '560';
const number1 = +string1;
console.log(number1);