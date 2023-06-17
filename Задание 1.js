// Задание 1
let num = + prompt('Введите число')
console.log(typeof (num))
if (Number.isNaN(num)) { console.log('Упс, кажется вы ошиблись') }
else  if (num % 2 == 0 && num != NaN) { console.log('чётное') }
else { console.log('нечётное') }