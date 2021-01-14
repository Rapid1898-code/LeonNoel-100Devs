let nameList = []
function addName(name) {
    nameList.push(name)
    console.log(`Position from ${name}: ${nameList.length}`)
}
addName("Hugo")
addName("Mark")
addName("Tom")
console.log(nameList)

