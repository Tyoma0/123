/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

// your code
 // your code


let isWinningDouble =false

 Math.floor(Math.random()  *  6) + 1; 
let dice1 = 2;
let dice2 = 5;
while (isWinningDouble === true) {
  
}
if (dice1 === dice2 && dice1 > 3) {
  console.log("Выпавший дубль выигрышный!");
  isWinningDouble = true
} else {
  console.log("Не выпал выигрышный дубль.");
  
}
