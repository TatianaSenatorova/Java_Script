"use strict";
// пользователь вводит пароль. но допустим, нам надо подсказать.
// но не сразу, а допустим, с 3-й попытки.

let pass = Number(prompt("введите пароль"));

for (let index = 0; index < 10; index++) {
  
  if (pass === 234) {
    alert("верно");
    break;
  }
  if (index >= 3) {
    alert("неверно");
    pass = Number(prompt("введите пароль"));
  }
}
