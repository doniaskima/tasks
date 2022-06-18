//## Exercise 9: Do not Push Each Other There is Space!
let array = [1, 2, 3, 4, 5];
const n = 2;
let arr1 = [];
let arr2 = [];
arr1 = array.slice(0, n);
arr2 = array.slice(n, array.length);
console.log([...arr2, ...arr1]);