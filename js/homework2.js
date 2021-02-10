//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i =0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = (addAge) => {
        return `This person's name is ${name} and they are ${age} years old, almost going to be ${addAge}`;
    }
    
}
let my_person = new Person('Gregor', 25)
console.log(my_person.printInfo(28))
let my_person2 = new Person('Barry', 30)
console.log(my_person2.printInfo(33))

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length > 10){
            resolve(console.log('Big word'))
        } else {
            reject(console.log('Small Number'))
        }
    })
}
