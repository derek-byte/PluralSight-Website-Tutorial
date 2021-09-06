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


window.addEventListener("orientationchange", function(e) {
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;
    console.log(`angle ${angle}, type: ${type}`);
});

// Uses to store information with a key and value
let value = localStorage.setItem(" ", {});
// Call on storage value by using key
let othervalue = localStorage.getItem(" ");

// Asks for location of user
window.navigator.geolocation.getCurrentPosition(
    // function when you get location
    function(position) {
        console.log(`latitude: ${position.coords.latitude}`)
        console.log(`longitude: ${position.coords.longitude}`)
    },
    // function for when you don't get location 
    function(error) {
        console.log("Error or user did not share location")
    });