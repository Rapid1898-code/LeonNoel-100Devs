function checkWord(n1, word) {
    const erg = word.length * n1
    if (erg > 100) {
        alert("WINNER")
    }
}

checkWord(30,"testword")
