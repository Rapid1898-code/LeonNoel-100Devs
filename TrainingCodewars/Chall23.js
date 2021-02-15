function longestConsec(strarr, k) {
    let ergArr = []
    if (k > strarr.length || k < 0) {
        return ""
    }
    for (let i = 0; i <= strarr.length - k; i++) {
        tmpErg = strarr.slice(i,i+k).join("")
        ergArr.push(tmpErg)
    }
    let countErg = 0
    let stringErg = ""
    ergArr.forEach((elem,idx) => {
        if (elem.length > countErg) {
            countErg = elem.length
            stringErg = elem
        }
    })
    return(stringErg)
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
