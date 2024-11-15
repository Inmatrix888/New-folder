"use strict";
let celsius = prompt ("temperature in Celsius:");

let fahrenheit = (celsius * 9/5) + 32;

alert (`${celsius}°C is equal to ${fahrenheit}°F`);











function minorAdultseniorCitizen(age){
    
    if (age<18){
        return 'Minor'

    } else if (age>=65){
        return 'Senior Citizen'

    } else {
        return "Adult"
    }



} 

let test = minorAdultseniorCitizen(76);

console.log (test)





function addNumbers(){
    let num1 = (prompt('enter first num'))

    let num2 = (prompt ('enter second number'))

    let result = num1 + num2

    alert ("The sum is:" +result)
    addNumbers()
    
}



