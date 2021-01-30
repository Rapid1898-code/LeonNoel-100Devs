function squareDigits(num){
    num = String(num)
    let erg = ""
    for (let i=0; i<num.length; i++) {
        erg += String(Number(num[i]) * Number(num[i]))
    }
    return(Number(erg))
}
console.log(squareDigits(9119))
