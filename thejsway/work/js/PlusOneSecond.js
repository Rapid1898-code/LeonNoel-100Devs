let time = prompt("Give me time in format XXhXXmXXs")
let hour = Number(time.slice(0,2))
let minute = Number(time.slice(3,5))
let second = Number(time.slice(6,8))
// alert(hour)
// alert(minute)
// alert(second)

if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
  alert("Wrong input - pls use format XXhXXmXXs!")
}
else if (hour > 23) {
  alert("Wrong input - only numbers between 00 and 24 are allowed for hour!")
}
else if ((minute > 59) || (second > 59)) {
  alert("Wrong input - only numbers between 00 and 60 are allowed for minute / second!")
}
else {
  if (second === 59) {
    second = 0
    if (minute === 59) {
      minute = 0
      if (hour === 23) {
        hour = 0
      } else {
        hour++
      }
    } else {
      minute++
    }
  } else {
    second++;
  }
  if (String(hour).length === 1) {
    hour = "0" + hour
  }
  if (String(minute).length === 1) {
    minute = "0" + minute
  }
  if (String(second).length === 1) {
    second = "0" + second
  }
  erg = "Result is with +1sec is: " + String(hour) + "h" + String(minute) + "m" + String(second) + "s"
  alert(erg)
}






