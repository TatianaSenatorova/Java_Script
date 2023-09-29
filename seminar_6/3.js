'use strict';

// Задание 3: 
 
// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную 
// сумму в консоль. 



// function root(num) {
//     return Math.sqrt(num);
    
// }

// const root = (num1, num2) => Math.sqrt(num1) + Math.sqrt(num2);

// console.log(root(3, 4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных 
// аргументов функции и вернет найденное значение.

const minNum = (num1, num2) => num1 < num2 ? console.log(num1) : console.log(num2);
const minNumber = (a, b) => console.log(Math.min(a, b));
minNum(3, 4);
minNumber(5, 10);