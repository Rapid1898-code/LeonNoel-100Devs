function bouncingBall(h,  bounce,  window) {
    let countBounces = 0
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
        while (h > window) {
            countBounces += 2
            h = h * bounce
            // console.log(h)
        }
        return countBounces-1
    } else {
        return -1
    }
}

console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(30.0, 0.66, 1.5))

