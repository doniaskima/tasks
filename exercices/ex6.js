const nums = [8, 7, 4, 3, 1, 0];
const target = 4;


let find = nums.findIndex(element => element === target);
console.log("The target found in index " + find);