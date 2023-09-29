'use strict';

function hello(){
    console.log('hello function');
}
hello();
// если недо чтобы функция что-то возвращала, то стрелочная
const salary = (money) => {
money = money * 0.87;
return money * 0.75; //сюда уже окончат вычисление, кот надо вернуть
}

const userMoney = Number(prompt('сколько ты зарабатываешь'));

let moneyMonth = salary (userMoney);

console.log(`для расходов можно использовать ${salary(userMoney)}`);

console.log(`на еду желательно потратить не более чем  ${moneyMonth * 0.3}`);
