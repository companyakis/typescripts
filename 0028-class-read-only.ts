class Employee {

    id: number
    readonly name: string //readonly
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

}

let aygul = new Employee(23, "Aygül", "Biricik", "Sales", true)

//let's change id number

aygul.id = 123

console.log(aygul.id) //123

//read only? error!

aygul.name = "xxxx" //Cannot assign to 'name' because it is a read-only property
