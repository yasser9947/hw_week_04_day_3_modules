function sayHello(name){
    console.log(`Hi, ${name}!`)
}

function getOlder(age){
    return age+50
}
// module.export = getOlder;
// module.export = sayHello;
module.exports = {
    getOlder:getOlder,
    sayHello:sayHello
}

function multiply (num1 , num2) {
return num1 * num2
}
function subtractFive (num){

	var  diff = 5 - num; 
	console.log(diff);
}

 function printName(name) {
    console.log(name);
 }