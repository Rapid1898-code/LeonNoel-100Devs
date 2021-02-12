document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&format=json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

