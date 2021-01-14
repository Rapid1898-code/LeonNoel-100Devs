//Create an array of movie titles. Loop through the array and each element to the h2.
let films = ["Terminator","Rocky","Rambo"]
films.forEach((elem,idx) =>
    document.querySelector("h2").innerText += ` ${elem}`
)


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1,2,3,4,5]
nums.forEach((elem,idx) =>
    nums[idx] += 3
)

//Find the average of all the numbers from question three
let sum = 0
nums.forEach((elem,idx) =>
    sum += elem
)
const avg = sum / nums.length

