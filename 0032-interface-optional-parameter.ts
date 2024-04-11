interface Employee {
    id: number
    firstName: string
    lastName: string
    title? : string //title is OPTIONAL!
    department: string
}

let aydinUcar: Employee = {
    id: 4296,
    firstName: "Aydın",
    lastName: "Uçar",
    title: "Director",
    department: "Investor Relations"
}

let aygunKaplan: Employee = {
    id: 6587,
    firstName: "Aygün",
    lastName: "Kaplan",
    department: "Sales Operations"
}

function employeeInfo(employee: Employee) {
    if (employee.title) {
        return `Employee id: ${employee.id}, employee title: ${employee.title} and employee department: ${employee.department}`
    }

   return `Employee id: ${employee.id} and employee department: ${employee.department}`
}

console.log(employeeInfo(aydinUcar)) //Employee id: 4296, employee title: Director and employee department: Investor Relations

console.log(employeeInfo(aygunKaplan)) //Employee id: 6587 and employee department: Sales Operations
