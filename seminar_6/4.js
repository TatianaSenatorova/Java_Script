"use strict";

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.
// function days(num) {
//   switch (num) {
//     case 1:
//       return "пн";
//     case 2:
//       return "вт";
//     case 3:
//       return "ср";
//     case 4:
//       return "чт";
//     case 5:
//       return "пт";
//     case 6:
//       return "суб";
//     default:
//       return "вск";
//   }
// }

// console.log(days(3));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

function hello(userName) {
    const time = new Date().getHours;
if (time < 6){
    console.log(`доброе утро ${userName}`);
} else if (time < 12) {
    console.log(`добрый день ${userName}`);
} else if (time < 18) {
    console.log(`добрый вечер ${userName}`);
}else  {console.log(`доброй ночи ${userName}`);
}
}
hello('петя');

