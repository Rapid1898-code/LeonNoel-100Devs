//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class CreateNetflixShow{
    constructor(Name, Length, Genre, FSK) {
        this.Name = Name
        this.Length = Length
        this.Genre = Genre
        this.FSK = FSK
    }
    startFilm() {
        console.log("Starting the film...")
    }
    pauseFilm() {
        console.log("Pause the film...")
    }
    stoppFilm() {
        console.log("Stop the film...")
    }
}
let film1 = new CreateNetflixShow("NiceFilm",90,"Action",16)
let film2 = new CreateNetflixShow("FunnyFilm",120,"Comedy",0)

console.log(film1)
film1.startFilm()
console.log(film1.Length)
