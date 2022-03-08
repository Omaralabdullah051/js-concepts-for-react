//1.array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

//alternative version
const [x, y] = numbers

console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
console.log(first, second);

const student = {
    name: 'Salib khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);


//object destructuring
const { name, age } = { name: 'alu', age: 14 };
const { name: a, age: b } = { id: 32, name: 'alu', salary: 35000, age: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarKhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'gramin'
        }
    }
}
const { machine, ide } = employee;
const { weight, address } = employee.specification;
console.log(weight, address);
//or
const { specification: { weight: c, address: d } } = employee;
console.log(c, d);

const { brand } = employee.specification.watch;
console.log(brand);
//or
const { specification: { watch: { brand: e } } } = employee;
console.log(e);


//optional chaining
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer?.dog?.name;
console.log(dogName);