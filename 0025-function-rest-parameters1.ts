function sum(...numbers: number[]) : number {
    let total = 0

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    return total
}


console.log(sum(1, 2, 3)) //6

console.log(sum(2023, 2024, -50, 45, 68)) //4110
