var encryptThis = function(text) {
    let tmpArr = text.split(" ")
    let tmpASCII = ""
    let ergStr = ""
    tmpArr.forEach((elem,idx) => {
        tmpASCII = elem.charCodeAt(0)
        tmpArrElem = elem.split("")
        if (elem.length > 2) {
            tmpVal = tmpArrElem[1]
            tmpArrElem[1] = tmpArrElem[elem.length - 1]
            tmpArrElem[elem.length - 1] = tmpVal
        }
        tmpArrElem.splice(0,1)
        tmpArr[idx] = tmpASCII + tmpArrElem.join("")
    })
    ergStr = tmpArr.join(" ")
    return(ergStr)
}
console.log(encryptThis("A wise old owl lived in an oak"))
console.log(encryptThis("A"))
