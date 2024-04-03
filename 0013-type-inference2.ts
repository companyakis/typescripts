function sum1 (a, b, c) {
    return a + b + c
}

function sum2 (a: number, b: number, c: number) {
    return a + b + c
}

let result1 = sum1(20, 10, 3)

console.log(result1) //33

console.log(typeof(result1)) //number

let something1 = sum1("20", "10", "3") //20103

console.log(typeof(something1)) //string

let result2 = sum2(20, 10, 3)

console.log(result2) //33

console.log(typeof(result2)) //number

//let something2 = sum2("20", "10", "3") //throw an error
