"use strict";

const arr = [1, 1, 2, 5, 7];

for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  if (elem >= 5) {
    console.log(elem);
  } else {
    continue;
  }
}

console.log(arr.lastIndexOf(3));