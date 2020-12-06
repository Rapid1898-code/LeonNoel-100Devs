document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day === "Saturday" || day === "Sunday") {
    alert("Weekend!")
  }else if (day === "Tuesday" || day === "Thursday") {
    alert("Classtime!")
  }else {
    alert("Boring Day!")
  }
}
