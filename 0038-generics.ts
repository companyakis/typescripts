function selectRandomItem<T>(items: T[]) : T {

    let randomIndex = Math.floor(Math.random() * items.length)

    return items[randomIndex]
}


let cities: string[] = ["izmir", "ankara", "istanbul", "adana", "kayseri"]

let years: number[] = [2024, 1990, 1923, 2020, 2018, 2025]

let conditions: boolean[] = [true, false, false, true, true, false]

console.log(selectRandomItem(cities))

//console.log(selectRandomItem<string>(cities))

console.log(selectRandomItem(years))

console.log(selectRandomItem(conditions))
