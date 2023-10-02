"use strict";

// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

const arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.round(Math.random() * 100);
  if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
    console.log(arr[i]);
  }
}

console.log(arr);

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.

const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) {
    count++;
  }
}
console.log(count);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

const newArray = [1, 2, 3, 4, 5];
newArray.splice(1, 2);
console.log(newArray);
