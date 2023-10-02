"use strict";

// Задание 1:

// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.

const arrRandom = [Math.random(0, 10), Math.random(0, 10), Math.random(0, 10)];

console.log(arrRandom.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.

const arrLetters = ['a', 'b', 'c'];

for (let i = 0; i < arrLetters.length; i++) {
    arrLetters[i] = i + 1;
}
console.log(arrLetters);
