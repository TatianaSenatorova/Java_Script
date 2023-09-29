"use strict";

// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
// let clientName = prompt('введите ваше имя');
// let clientLastName = prompt('введите вашу фамилию');
// let clientAge = Number(prompt('введите ваш возраст'));

// function hello(userName, userLastName, userAge) {
//     console.log(`Привет, ${userName}  ${userLastName} . Вы уже большой, вам ${userAge}`);
// }

// hello(clientName,clientLastName, clientAge);

// function hello(userName, userLastName, userAge) => {
//     return console.log(`Привет, ${userName}  ${userLastName} . Вы уже большой, вам ${userAge}`);
// }
// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// const square = num => num ** 2;
// console.log(square(5));
// const square = function () {
//   return num ** 2;
// };
// console.log(square(5));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// проверяем, что это число и конечное число, т.к. бесконечность это тоже число. isFinite как раз проверяет, что это число конечное.
// const func = (num) => {

//   if (Number.isFinite(num)) {
//     if (num > 0) {
//       return console.log("+++");
//     } else if (num < 0) {
//       return console.log("---");
//     }
//   }
// };

// func(100);

// переделываем, так как преподавателю не понравился if в if. чтобы этого избежать, сразу проверяем Number.isFinite(num) НЕ соответствует, то делаем return тут же, чтобы дальше не идти
const func = (num) => {
  if (!Number.isFinite(num) || num === 0) {
    return; /* сразу прерываем, если не конечное число*/
  }
  if (num > 0) {
    return console.log("+++");
  } else {
    return console.log("---");
  }
};
func(Infinity);
