const nums = [1, 1, 2];

const Permutation = (i, y) => {
    const s = nums.slice();

    let a = s[i];
    s[i] = s[y];
    s[y] = a;

    return s;

}

const UniquePermutation = () => {
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        for (let y = i + 1; y < nums.length; y++) {
            if (nums[i] != nums[y]) {
                console.log(Permutation(i, y));
            }
        }
    }
}

UniquePermutation();