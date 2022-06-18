// ## Exercise 8: Zeros together stronger!

const arr = [6, 0, 8, 2, 3, 0, 4, 0, 1];
let arr1 = [];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr1.push(arr[i]);

    } else {
        arr2.push(0);
    }
}
//console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);