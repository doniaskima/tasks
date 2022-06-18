//## Exercise 14: Jump number of steps
const nums = [2, 3, 1, 1, 4];


let curr = -1;
let next = 0;
let N_jumps = 0;
for (let i = 0; next < nums.length - 1; i++) {
    if (i > curr) {
        N_jumps++;
    }
    curr = next;
    next = Math.max(next, nums[i] + i);
}
console.log(N_jumps);