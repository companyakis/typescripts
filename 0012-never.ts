//The never type is used when you are sure that something is never going to occur

//The function sayHi() never stops executing it continuously displays "Hi there!" and it returns nothing so never type is used

function sayHi(): never {
    while(true) {
        console.log("Hi there!")
    }
}

// Function call 

sayHi()
