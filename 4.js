let firstNum = 5 // если подключить в html то нужно использовать prompt тогда будет задавть пользоатель, написал значение для простоты проверки
let secondNum = 15

let interval = setInterval(function(num1, num2){
  if(firstNum <= secondNum) {
    console.log(firstNum)
    firstNum++
  }
}, 1000);
