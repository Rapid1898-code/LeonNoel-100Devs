function checkNum(n1) {
    for (let i=1; i<=n1; i++) {
        if ((i * 3) % 2 !== 0) {
            console.log(i)
        }
    }
}
checkNum(50)
