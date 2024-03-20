//index.ts file

let nameOrAge: (string | number)[] = ["Mustafa", 18, "Hakan", 76, 85]

nameOrAge.push(45)

console.log(nameOrAge) //[ 'Mustafa', 18, 'Hakan', 76, 85, 45 ]

//nameOrAge.push(false) //Argument of type 'boolean' is not assignable to parameter of type 'string | number'

let multipleInfo: (string | number | boolean)[] = ["", 0, false]
