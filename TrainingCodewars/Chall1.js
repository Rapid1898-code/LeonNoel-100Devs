String.prototype.toJadenCase = function () {
    let arr1 = str.split(" ")
    arr1.forEach((elem,idx) => {
        arr1[idx] = arr1[idx][0].toUpperCase() + arr1[idx].slice(1)
    })
    str = arr1.join(" ")
    console.log(str)
};

var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase()
