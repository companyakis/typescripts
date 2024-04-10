class CircleRectangular {

    static pi: number = 3.14

    static circleArea(radius: number) {
        return this.pi * radius * radius
    }

    static rectangularArea(weight: number, height: number) {
        return height * weight
    }
}

console.log(CircleRectangular.pi) //3.14

let rectArea = CircleRectangular.rectangularArea(15, 12)

console.log("Rectangular area:", rectArea) //Rectangular area: 180

console.log("Circle area:", CircleRectangular.circleArea(10)) //Circle area: 314
