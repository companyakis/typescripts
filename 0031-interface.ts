interface Employee {
    id: number
    firstName: string
    lastName: string
    department: string
}

let aydinUcar: Employee = {
    id: 4296,
    firstName: "Aydın",
    lastName: "Uçar",
    department: "Investor Relations"
}

function employeeInfo(employee: Employee) {
    console.log(`Employee name and surname: ${employee.firstName} ${employee.lastName}`)
}

employeeInfo(aydinUcar) //Employee name and surname: Aydın Uçar
