/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code

let num = 0;
let division =0;
while(division<20){
  if(division%2!==0){
    console.log(division);
   sum = sum+division; 
  }division=division+1;
}