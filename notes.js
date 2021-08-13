// To create a variable you need to write 'let'
let x = 5;
// After, you can change the value
x = 7;
// Const means value cannot change 
const y = 9;
// === means a boolean and retur True or False 
1 + 1 === 2;

let name = "Bob";
// Creates a block statement to contain a scope
{
    let name = "Derek";
    console.log(name);
}

// If else statement 
if (name === "Bob"){
    console.log("Hi Bob!");
} else if (name === "Tyler"){
    console.log("Wait is Tyler here?")
} else{
    console.log("Is Derek here?")
}