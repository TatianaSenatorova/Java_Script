'use strict';

let count = 0;
alert(`вы нажали на кнопку${count} раз`);
function counterClickButtons(){
    alert(++count);
    console.log(count);
}