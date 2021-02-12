function twoSum(numbers, target) {
    let erg = false
    numbers.forEach((elem,idx) => {
        for (let idx2=idx+1; idx2<numbers.length; idx2++) {
            // console.log(`Elem: ${elem}, ${typeof elem}`)
            // console.log(`IDX2: ${idx2}, ${typeof idx2}`)
            // console.log(`SecNum: ${numbers[idx2]}`)
            if (elem + numbers[idx2] === target) {
                // console.log("Drinnen!")
                erg = [idx,idx2]
            }
        }
    })
    return erg
}

console.log(twoSum([1,2,3], 4))
console.log(twoSum([1234,5678,9012], 14690))
