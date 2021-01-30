function reverseWords(strVar) {
  let tmpArr = strVar.split(" ")
  tmpArr.forEach((elem,idx) => {
    let newElem = elem.split("").reverse().join("")
    tmpArr[idx] = newElem
  })
  let ergStr = tmpArr.join(" ")
  return(ergStr)
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
