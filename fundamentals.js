//1.How to declare a variable using let and const 
const hisName = 'Arnold';
let season = 'Rainy';
season = 'winter';

//2.conditions
//6 basic condition >,<,===,!==,<=,>=
//multiple condition: && ,||

if (hisName === 'arnold' || season === 'Rainy') {

}
else if (hisName === 'Arnold') {

}
else {

}

//3.array declare
//index
//length,push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

//4.for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
let i = 0;
while (i < numbers.length) {
    const number = numbers[i];
    i++;
    console.log(number);
}

//5.function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);

//6.object
//3 ways to access property by key
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
}
console.log(student.age);//direct by property
console.log(student['age']);//access via property name string
const age = 'age';
console.log(student[age]);//access via property name in a variable

