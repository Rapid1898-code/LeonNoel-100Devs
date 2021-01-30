console.log("a".charCodeAt(0))
console.log("e".charCodeAt(0))
console.log("s".charCodeAt(0))
console.log("z".charCodeAt(0))
console.log(String.fromCharCode(106))

function vowelBack(s){
  let ergStr = ""
  let movedLetter = ""
  let vowels = ["a","i","u"]
  let exceptions = ["c","o","e","d"]
  let newASCICode = 0
  let diff = 0
  for (let i=0; i<s.length; i++) {
    let asciCode = s[i].charCodeAt(0)
    if (vowels.includes(s[i])) {
      newASCICode = asciCode - 5
      if (newASCICode < 97) {
        newASCICode = 123 - (97 - newASCICode)
      }
    } else if (exceptions.includes(s[i])) {
        if (s[i] === "c" || s[i] === "o") {
          diff = 1
        } else if (s[i] === "d") {
          diff = 3
        } else if (s[i] === "e") {
          diff = 4
        }
        newASCICode = asciCode - diff
        if (newASCICode < 97) {
          newASCICode = 122 - (97 - newASCICode)
        }
    } else {
        newASCICode = asciCode + 9
        if (newASCICode > 122) {
          newASCICode = 97 + (newASCICode - 123)
        }
    }
    movedLetter = String.fromCharCode(newASCICode)
    console.log(movedLetter)
    if (exceptions.includes(movedLetter)) {
      ergStr += s[i]
    } else {
      ergStr += movedLetter
    }
  }
  return(ergStr)
}
console.log(vowelBack("exampletesthere"))
