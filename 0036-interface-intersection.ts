interface Person {
    name: string
    surname: string
    birthYear: number
}

interface ContactInfo {
    eMail: string
    phoneNumber: string
}

type AdultPerson = Person & ContactInfo

let aygun: AdultPerson = {
    name: "Aygün",
    surname: "Derelioğlu",
    birthYear: 1990,
    eMail: "aygun.derelioglu@yahoo.com",
    phoneNumber: "05059876543"
}

console.log(aygun)

/*

{
  name: 'Aygün',
  surname: 'Derelioğlu',
  birthYear: 1990,
  eMail: 'aygun.derelioglu@yahoo.com',
  phoneNumber: '05059876543'
}

*/
