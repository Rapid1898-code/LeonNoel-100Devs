let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

function isEmpty(obj) {
    console.log(obj)
    if (obj != {}) {
        console.log("NICHT leer")
        return true
    } else {
        console.log("Leer")
        return false
    }
}

user2 = {}
console.log(isEmpty(user2))
