function sum(a: number, b: number, c: number, d?: number) : number {
    if (typeof d !== 'undefined') {
        return a + b + c + d
    }
    return a + b + c
}

let result1 = sum(6, 8, 11, 14)

console.log(result1) //39

let result2 = sum(-100, 22, 11)

console.log(result2) //-67
