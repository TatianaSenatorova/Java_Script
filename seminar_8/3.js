"use strict";

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }
// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.

let num = 5;
let count = 0;

while (num <= 1000){
   num = num * 3;
  count++;
}


console.log(num);
console.log(count);