type myType = number | string

function add(a: myType, b: myType, c: myType) {

    if (typeof a === "number" && typeof b === "number" && typeof c ==="number") {

        return a + b + c
    }

    if (typeof a === "string" && typeof b === "string" && typeof c ==="string") {

        return a + " " + b + " " + c + "..."
    }

    throw new Error("Please, use correct data types!")
}


console.log(add(21, 10, -5.2)) //25.8

console.log(add("Mustafa", "Büyükdereli", "2024")) //Mustafa Büyükdereli 2024...

console.log(add("Mustafa", 2024, 2)) //Error: Please, use correct data types!
