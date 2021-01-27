function arrayDiff(a, b) {
  let erg = []
  a.forEach((elem,idx) => {
      if (!b.includes(elem)) {
          console.log("DRinnen!")
          erg.push(elem)
      }
  })
  return(erg)
}

console.log(arrayDiff([3,4], [3]))
