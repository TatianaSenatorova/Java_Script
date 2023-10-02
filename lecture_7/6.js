'use strict';

const word = 'example';

const arrWord = word.split('');

console.log(word.split(''));

const upWord = arrWord.pop();
console.log(upWord.toLocaleUpperCase());
arrWord.push(upWord.toLocaleUpperCase());
console.log(arrWord.join(''));
