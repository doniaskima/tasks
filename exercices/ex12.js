//Exercise 12: Add Two Numbers

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
let st1 = l1.join('');
st1 = st1.slice();
arr1 = st1.split('');
arr1 = arr1.reverse();
st1 = arr1.join('');
let st2 = l2.join('');
st2 = st2.slice();
arr2 = st2.split('');
arr2 = arr2.reverse();
st2 = arr2.join('');

let sum = Number(st1) + Number(st2);

sum = sum.toString();
arr3 = sum.split('');

arr3 = arr3.reverse();

console.log(arr3);
// masta lmethode