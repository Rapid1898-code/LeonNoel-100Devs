function checkNum(n1) {
    for (let i=1; i<=n1; i++) {
        if ((i * 3) % 2 !== 0) {
            console.log(i)
        }
    }
}
checkNum(50)

arr.forEach((elem,idx) => {						// Iterate through array by elements and index (with shortform)
	console.log(idx)							// Outputs index
	console.log(elem)							// Outputs element of array
})
