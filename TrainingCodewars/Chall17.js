// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
    if (test.length != original.length) {
        return false
    }
    letterObjTest = {}
    letterObjOriginal = {}
    for (let i = 0; i < test.length; i++) {
        if (test[i] in letterObjTest) {
            letterObjTest[test[i]] += 1
        } else {
            letterObjTest[test[i]] = 1
        }
        if (original[i] in letterObjOriginal) {
            letterObjOriginal[original[i]] += 1
        } else {
            letterObjOriginal[original[i]] = 1
        }
    }

    erg = true
    for (let key in letterObjTest) {
        if (letterObjTest[key] != letterObjOriginal[key]) {
            return false
        }
    }
    return true
}

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("dumble", "bumble"))
