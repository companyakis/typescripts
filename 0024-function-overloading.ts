function finalResult(x: number, y: number, z: number) : number

function finalResult(x: string, y: string, z: string) : string

function finalResult(x: any, y: any, z: any) : any {
    return x + y + z
}

console.log("x + y + z = " + finalResult(5, 22, 14)) // x + y + z = 41

console.log(finalResult("Mustafa ", "Buyukdereli ", "was here...")) //Mustafa Buyukdereli was here...
