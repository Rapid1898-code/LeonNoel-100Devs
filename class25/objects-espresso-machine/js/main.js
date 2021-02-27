//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class MakeMachine {
    constructor (color,beans,filter,water) {
        this.color = color
        this.beans = beans
        this.filter = filter
        this.water = water
    }
    brew() {
        console.log("Brew!")
    }
    turnOn() {
        console.log("Turn On!")
    }
    turnOff() {
        console.log("Turn Off!")
    }
}
