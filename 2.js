const isSimple = function(num) {
  for(i = 2; i < num/2+1; i++) {
    if(num % i !== 0) return false
    else return true
  }
}

let rand = Math.random() * 100
rand = Math.round(rand)

console.log(isSimple(rand))