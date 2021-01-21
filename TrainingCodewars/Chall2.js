function descendingOrder(n){
    let strNum = n.toString()
    let tmpArray = strNum.split("")
    tmpArray = tmpArray.sort((a,b) => a > b ? -1 : 1)
    strNum = tmpArray.join("")
    erg = Number(strNum)
    return(Number(erg))
}
console.log(descendingOrder(3421))


