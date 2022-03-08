//1.JSON(javascript object notation)
const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
};
//stringify
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
//parse
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//2.fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

//keys,values
const keys = Object.keys(student);
const values = Object.values(student);

//forEach() ,map(),find(),filter() on array.
const numbers = [23, 54, 67, 87, 23, 55];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//for of on array/string/array-like-object(arguments,nodelist,htmlcollections,etc) (note: for of loop works on any iterable object)

//loop through on an object using for in loop.


//add or remove from an array 
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 4000, brand: 'canon', color: 'gray' },
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

//copy products array and add newProduct 
const newProducts = [...products, newProduct];
console.log(newProducts);

//create a new array without one specific item
//remove phone means create a new array without the phone product
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);
