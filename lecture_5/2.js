'use strict';

let age = Number(prompt('сколько вам лет')); //

// const lvUpAge = ()=>{
//     return age + 5;
// } 

// запись можно сократить
const lvUpAge = ()=> age + 5;
    
 



console.log(`через 5 лет Вам будет ${lvUpAge()}`); //а вот здесь уже будет больше на 5
console.log(age); //эта переменная не поменялась
