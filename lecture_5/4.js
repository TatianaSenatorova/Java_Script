"use strict";

// let userAnswer = prompt('зимой и летом одним цветом?');

// if (userAnswer === 'елка') {
//     console.log('угадал');
// } else {
//     console.log('не угадал');
// }

// let  userAnswer2 = prompt('сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает');

// if (userAnswer2 === 'лук') {
//     console.log('угадал');
// } else {
//     console.log('не угадал');
// }

// А конструкция-то одна и та же. Следовательно, используем функцию
function ask(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLocaleLowerCase() === answer) {
    console.log("угадал");
  } else {
    console.log("не угадал");
  }
}

function puzzle() {
  ask("лук", "сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает");
  ask("елка", "зимой и летом одним цветом");
}
