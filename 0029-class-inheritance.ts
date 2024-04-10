//parent class
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

    printNameAndLastName() {
        console.log(`Employee name and surname: ${this.name} ${this.lastName}.`)
    }

}

//child class
class Citizen extends Employee {

    address: string 

    constructor(id: number, name: string, lastName: string, department: string, isMarried: boolean, address: string) {
        super(id, name, lastName, department, isMarried)
        this.address = address
    }
}

let citizenAygun = new Citizen(90, "Aygün", "Derelioğlu", "Finance", true, "X Street Y city")

//child class can use parent method

citizenAygun.printNameAndLastName() //Employee name and surname: Aygün Derelioğlu.

//print citizenAygun

console.log(citizenAygun)

/*
Citizen {
  id: 90,
  name: 'Aygün',
  lastName: 'Derelioğlu',
  department: 'Finance', 
  isMarried: true,       
  address: 'X Street Y city'
}
*/
