//Create a Tony Hawk Pro Skater constructor that makes
// fighting game characters with 4 properties and 3 methods

function MakeSkater (skaterName, skaterCountry, skaterTricks, skaterSpeed) {
    this.skaterName = skaterName,
    this.skaterCountry = skaterCountry,
    this.skaterTricks = skaterTricks,
    this.skaterSpeed = skaterSpeed,
    this.jump = function () {
        console.log('Jump!')
    },
    this.flip = function () {
        console.log('Flip!')
    },
    this.slide = function () {
        console.log('Slide!')
    }
}

let skater1 = new MakeSkater("Rob", "England", "Top", 100)
let skater2 = new MakeSkater("Marvy", "US", "Medium", 150)
console.log(skater1)
skater1.jump()
