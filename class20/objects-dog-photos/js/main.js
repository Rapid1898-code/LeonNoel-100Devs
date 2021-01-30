//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")										// Reading / Fetching the informations from an API-url
	.then(res => res.json())
	.then(data => {
	    // console.log(data)
		document.querySelector("img").src = data.message
	})
	.catch(err => {
		console.log("error ${err}")
	});
