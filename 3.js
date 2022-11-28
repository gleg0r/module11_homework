function getSum(num) {
  return function sum(newNum){
    return num+newNum
  }
}

let result = getSum(50)

console.log(result(25))
