// let nums = [8, 7, 2, 5, 3, 1]
// let target = 10
let nums = [5, 2, 6, 8, 1, 9];
let target = 12;

let fois = 0;
for (let i = 0; i < nums.length; i++) {

    for (j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            fois += 1;
            console.log('Pair found (' + nums[i] + ',' + nums[j] + ')');

        }
    }
}
if (fois === 0) {
    console.log('Pair not found');
}