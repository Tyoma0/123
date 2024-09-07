/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// function findUniqueElements(array) {
//     const newAllay =  {
//         "Duplicate Numbers": [],
//         "Unique Numbers": []
//       };
//     for (let index = 0; index < array.length; index++) {
//         if (array[i] !== array[i-1] && array[i] !== array[i+1]) {
//             newAllay["Unique Numbers"].push(array[i]);
//           } else {
//             newAllay["Duplicate Numbers"].push(array[i]);
//           }
          
//     }
//     return newAllay
    
// }



function findUniqueElements(array) {
    return Array.from(new Set(array))
}
findUniqueElements([1,2,3,2,1,4])
