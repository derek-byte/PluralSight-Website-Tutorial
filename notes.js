// To create a variable you need to write 'let'
let x = 5;
// After, you can change the value
x = 7;
// Const means value cannot change 
const y = 9;
// === means a boolean and retur True or False 
1 + 1 === 2;

// Creates a block statement to contain a scope
{
    let name = "Derek";
    console.log(name);
}

// If else statement inside a function
function greet(name) {
    let result = "";

    if (name === "Bob"){
        result = "Hi Bob!";
    } else if (name === "Tyler"){
        result = "Wait is Tyler here?";
    } else{
        result = "Is Derek here?";
    }
    return "Is that you", name + "?";
}
// Calling the function and inputting a name
let name = "Bob"
let message = greet(name);
console.log(message);

// Object literal
let person = {
    firstName: "Derek",
    lastName: "Sheen",
    email: "derek55003",
    greet: function() {
        console.log("My name is " + this.firstName);
    }
};
console.log(person.greet);

// array
let array = [100,true,"JavaScript"];
console.log(array[0]);

array.reverse()
array.length
array.push("New item")

// While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
}

// For loop
let numbers = [1,2,3]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// ForEach Loop 
let days = ["Mon", "Tues", "Wed"];
days.forEach(function(day, index){
    // iterates through array printing out the value/day and the index 
    console.log(`day: ${day} index: ${index}`);
});