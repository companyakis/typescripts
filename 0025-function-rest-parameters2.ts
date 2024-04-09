function greetingPeople(greet: string, ...names: string[]) {

    console.log(greet + " " + names.join(", ") + "!")
}

greetingPeople("Hi", "Mustafa", "Aygün") // Hi Mustafa, Aygün!

greetingPeople("Hello and welcome", "Bilge", "Kültigin", "Mete", "Kutluk") //Hello and welcome Bilge, Kültigin, Mete, Kutluk!
