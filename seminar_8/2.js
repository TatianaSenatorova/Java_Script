'use strict';

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте 
// каждый элемент массива на единицу.

const arrNum = [1, 2, 3];
for (let i = 0; i < arrNum.length; i++) {
    arrNum[i] == arrNum[i]++;
    
}
console.log(arrNum);

// 2. Узнайте длину следующего массiива и объясните почему такое значение:
// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

const arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr);

// ```
// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

const num = [1, 2, 3];
num.push(4, 5);
console.log(num);



// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

const newArr = [1, 2, 3, 4, 5];
// newArr.pop();
// newArr.shift();
// newArr.splice(0, 2);
newArr.splice(1, 0, 5);
console.log(newArr.length);
console.log(newArr);