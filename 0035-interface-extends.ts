interface Person {
    name: string
    surname: string
    birthYear: number
}

interface Employee extends Person {
    department: string
}

interface Teacher extends Person {
    lesson: string
    school: string
}

let citizenAysel: Person = {name: "Aysel", surname: "Günebakan", birthYear: 1990}

console.log(citizenAysel.birthYear) //1990

let employeeHakan: Employee = {name: "Hakan", surname: "Küçükbey", birthYear: 1978, department: "HR"}

console.log(employeeHakan.department) //HR

let teacherAyhan: Teacher = {name: "Ayhan", surname: "Büyükay", birthYear: 1965, lesson: "Math", school: "Talas High School"}

console.log(teacherAyhan)

/*

{
  name: 'Ayhan',
  surname: 'Büyükay',
  birthYear: 1965,
  lesson: 'Math',
  school: 'Talas High School'
}

*/
