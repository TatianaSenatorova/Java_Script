'use strict';

function helloName(name) {
    console.log(name);
}

helloName("alex");

let count = 5; 

function counter() {
    let count = 0;
    count++;
}

console.log(count); //не выводит из функции, выводит 5. почему? область видимости 