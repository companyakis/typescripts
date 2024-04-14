interface Employees<U, V> {
    id: U
    nameAndLastName: V
}

let employee1: Employees<number, string> = {
    id: 4296,
    nameAndLastName: 'Aydın Uçar'
}

console.log(employee1) //{ id: 4296, nameAndLastName: 'Aydın Uçar' }
