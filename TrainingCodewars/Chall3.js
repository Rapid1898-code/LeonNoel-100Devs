function alphabetPosition(text) {
    let ergArr = []
    for (let i=0; i<text.length; i++) {
      if (text[i].toUpperCase().match(/[A-Z]/i)) {
          ergArr.push(text[i].toUpperCase().charCodeAt(0) - 64)
      }
    }
    text = ergArr.join(" ")
    return text;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))


