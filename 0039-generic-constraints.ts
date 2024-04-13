function executeSomething<T extends number[], U extends string>(aList: T, aName: U) {

    let listLength = aList.length
    let greeting = "Hi " + aName

    return "List length is " + listLength + " and greeting is " + greeting + "..."
}

console.log(executeSomething([1, 2, 3], "Mustafa")) //List length is 3 and greeting is Hi Mustafa...

//executeSomething([1, 2, 3], true) //Argument of type 'boolean' is not assignable to parameter of type 'string'
