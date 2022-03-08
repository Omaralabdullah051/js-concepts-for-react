const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
}
//1.template string
const about = `My name is ${student.name}. My age is ${student.age}. My roll number is ${numbers[2]}. Also liked movies ${student.movies[1]}`;
console.log(about);

//2.arrow function
const getFiftyFive = () => 55;
const addSixtyFive = number => number + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum;
}

//3.spread operator(immutably copied the array in a new array)
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(78);
console.log(newNumbers);
console.log(numbers);

//create a new array from an older array and add an element
const currentNumbers = [78, ...numbers, 55];
console.log(numbers);
console.log(currentNumbers);





