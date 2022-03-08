/**
 1.1.variable(let,const) three common types of variables(num,str,boo)
 1.2.condition (<,>,===,!==,<=,>=)&& ||,if,else-if,else
 1.3.array: declare,length,index,push,pop,indexOf,includes,slice,splice,etc.
 1.4.for loop,while loop
 1.5.function and return parameter
 1.6.Object property,including array, object
------------------------
ES6
1.template string ${},string interpolation
2.spread operator(...)
2.1.copy immutably an array and add elements in new array )
2.2.Use filter to remove an element from an array
3.Arrow function
3.1.no parameter ()
3.2.single parameter 
3.3.multiple parameters ()
3.4.multi line
4.destructuring: object destrucaturing,array destructuring
5.object declaration shorthand
6.function default parameter 
7.optional chaining (?.)
-------------------------------
Browser API
1.local storage and session storsage
2.location API
3.History API
4.fetch
--------------------------------
1.array methods: map,forEach,filter,find
2.ternary operator
3.logical and, logical or (&& ||),logical not (!),double not(!!)
4.JSON (stringify,parse) 
5.convert string to Number,number to string.toggle boolean(invert boolean)
 */


//object declaration shorthand
const x = 50;
const y = 100;
const obj = { x: x, y: y };
console.log(obj);
//shortcut
const obj1 = { x, y };
console.log(obj1);

const name = 'solimullah';
const area = 'Dhaka';
const nobab = { name: name, area: area };
console.log(nobab);
//shortcut
const nobab2 = { name, area };
console.log(nobab2);

const firstName = 'farhan';
const middleName = 'uddin';
const lastName = 'jovan';
const age = 36;
const employee = { firstName, middleName, lastName, age };
console.log(employee);

