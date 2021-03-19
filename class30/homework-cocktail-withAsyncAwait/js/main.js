//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click",funcRead)

// function funcRead() {
//     let inp = document.querySelector("input").value
//     // inp = inp.split(" ").join("-")
//     console.log(inp)
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inp)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.drinks[0])
//             document.querySelector("h2").innerText = data.drinks[0].strDrink
//             document.querySelector("img").src = data.drinks[0].strDrinkThumb
//             document.querySelector("h3").innerText = data.drinks[0].strInstructions
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
//
// }

async function funcRead() {
    let inp = document.querySelector("input").value
    console.log(inp)
	const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inp).catch(e => {
	    document.querySelector("h2").innerText = "Something bad happend - fetch not possible..."
    })
	const data = await res.json()
    console.log(data)
    if (!data) {
        document.querySelector("h2").innerText = "Something bad happend - json data wrong..."
    } else {
        console.log(data.drinks[0])
        document.querySelector("h2").innerText = data.drinks[0].strDrink
        document.querySelector("img").src = data.drinks[0].strDrinkThumb
        document.querySelector("h3").innerText = data.drinks[0].strInstructions
    }
}

async () => {
  const data = await fetchData().catch(e => {
    // Only errors from `fetchData` are caught.
  });
  if (!data) return;
  doSomethingComplex(data);
};
