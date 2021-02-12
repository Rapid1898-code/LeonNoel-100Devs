//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

// https://www.dnd5eapi.co/api/spells/acid-arrow/

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
            // console.log(data.subclasses)
            data.subclasses.forEach((elem,idx) => {
                console.log(elem.name)
                var li = document.createElement("li")
                li.textContent = elem.name
                document.querySelector("ul").appendChild(li)
            })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

