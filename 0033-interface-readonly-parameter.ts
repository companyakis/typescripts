interface Employee {
    readonly id: number //id is READONLY
    firstName: string
    lastName: string
    title? : string //title is OPTIONAL!
    department: string
}

let aygunKaplan: Employee = {
    id: 6587,
    firstName: "Aygün",
    lastName: "Kaplan",
    department: "Sales Operations"
}

aygunKaplan.lastName = "Büyükdereli" //reassign

console.log(aygunKaplan)

aygunKaplan.id = 4558 //Cannot assign to 'id' because it is a read-only property.ts(2540)

/*
{
  id: 6587,
  firstName: 'Aygün',
  lastName: 'Büyükdereli',
  department: 'Sales Operations'
}
*/
