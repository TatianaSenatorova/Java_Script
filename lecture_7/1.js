'use script';

// вывести три раза слово hello

// выполняется, но нам не подходит, потому как только видим счетчик, то используем цикл for
let count = 0;
while (count < 3) {
    console.log('hello');
    count++;
}

for (let i = 0; i < 3; i++) {
    console.log('hello');
}
