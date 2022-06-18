//## Exercise 13: Water container
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let area = 0;
let i = 0;
let j = height.length - 1;

while (i < j) {
    area = Math.max(area, Math.min(height[i], height[j]) * (j - i))
    if (height[i] <= height[j]) {
        i += 1;

    } else { j -= 1; }

}
console.log(area);