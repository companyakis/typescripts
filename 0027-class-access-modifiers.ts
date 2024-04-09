//public, private and protected

class Employee {

    public id: number //public is default
    name: string
    lastName: string
    department: string
    isMarried: boolean
    private hasChildren: boolean
    protected birthYear: number

    constructor(id: number, name: string, lastName: string, department: string, isMarried: boolean, hasChildren: boolean, birthYear: number) {

        this.id = id
        this.name = name
        this.lastName = lastName
        this.department = department
        this.isMarried = isMarried
        this.hasChildren = hasChildren
        this.birthYear = birthYear
    }
}


