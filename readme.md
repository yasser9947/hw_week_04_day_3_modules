## Arrow functions
Practice arrow function syntax by converting regular function declarations to arrow function expressions, and debugging arrow functions.

### Convert

```js
function sayHello(name){
    console.log(`Hi, ${name}!`)
}

function getOlder(age){
    return age+50
}
```
### Debug

```js
const multiply = num1, num2 => console.log(num1 * num2); 

const subtractFive = num => 
	const diff = 5 - num; 
	console.log(diff);


const printName = name = function() {
	console.log(name)
```

---

## Exporting JS files with Node

Export your arrow functions into the main.js file and run your functions from there.

```js
person.sayHello("Anoud") //should return Hi, Anoud!

person.getOlder(12) //should return 62 
```
---
