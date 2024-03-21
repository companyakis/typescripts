type Employee = {
    firstName: string,
    lastName: string,
    id: number,
    startingYear: number,
    department: string,
}

let mustafa: Employee

mustafa = {
    firstName : "Mustafa",
    lastName : "Buyukdereli",
    id : 1,
    startingYear : 2024,
    department : "Boarding Member"
}

console.log(mustafa)

console.log(mustafa.lastName)


/*
{
  firstName: 'Mustafa',        
  lastName: 'Buyukdereli',     
  id: 1,
  startingYear: 2024,
  department: 'Boarding Member'
}
Buyukdereli

*/
