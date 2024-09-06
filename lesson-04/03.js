/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1,array2) {
const m1 = array1.filter((item,index) =>array1.indexOf(item) === index)
const m2 = array2.filter((item,index) =>array2.indexOf(item) === index)
const element1 = m1.concat(m2);
return element1.filter(item => element1.indexOf(item) !== -1);
}
console.log(findCommonElements([1,23,43,5,],[2,1,343,5]));

