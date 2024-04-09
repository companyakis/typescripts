class Employee {

    id: number
    name: string
    lastName: string
    department: string
    isMarried: boolean

    constructor(id: number, name: string, lastName: string, department: string, isMarried: boolean) {

        this.id = id
        this.name = name
        this.lastName = lastName
        this.department = department
        this.isMarried = isMarried
    }

    employeeMarriageInfo() {

        if (this.isMarried === true) {
            console.log(`${this.name} ${this.lastName} is married.`)
        }

        console.log( `${this.name} ${this.lastName} is single.`)
    }
}

let ayhan = new Employee(132, "Ayhan", "Doğan", "FinTech", false)

console.log(ayhan.id) //132

ayhan.employeeMarriageInfo() //Ayhan Doğan is single.
