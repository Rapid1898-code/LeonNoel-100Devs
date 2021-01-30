function count (string) {
    ergObject = {}
    for (let i=0; i<string.length; i++) {
        if (string[i] in ergObject) {
            ergObject[string[i]] += 1
        }
        else {
            ergObject[string[i]] = 1
        }
    }
   return ergObject;
}
console.log(count("aba"))
console.log(count("abasdrfasdfafad"))
console.log(count(""))
