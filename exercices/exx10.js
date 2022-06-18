//Exercise 10: Simple Array Sum
const array = [1, 2, 3, 4, 10, 11];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

const reduced = array.reduce((total, current) => total + current);
console.log(reduced);