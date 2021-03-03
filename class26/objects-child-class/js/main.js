//Create an a class and extend it - Can be anything you would like it to be! 

class Human {
    constructor(color, age, name) {
        this.color = color
        this.age = age
        this.name = name
    }
    saySomething (text) {
        console.log(`The human says ${text}...`)
    }
}

class Man extends Human {
    constructor(color,age,name,beard) {
        super(color,age,name)
        this.beard = beard
    }
}
class Woman extends Human {
    constructor(color,age,name,hairLength) {
        super(color, age, name)
        this.hairLength = hairLength
    }
}
let humanOne = new Human("white",34,"Lars")
let manOne = new Man("white", 65, "John",true)
let manTwo = new Man("black", 42, "Max",  false)
let womanOne = new Woman("white",23,"Silvie",55)

console.log(humanOne)
humanOne.saySomething("blablabla")
