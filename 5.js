const pow = (x, n) => {
    startX = x
    for(i = 1; i < n; i++) {
        x *= startX
    }
    return console.log(x)
}

let x = 20
let n = 4

pow(x,n)