//## Exercise 11: Compare triplets
let alice = [5, 6, 7];
let bob = [3, 6, 10];

let alice_Score = 0;
let bob_Score = 0;
for (let i = 0; i < 3; i++) {

    if (alice[i] > bob[i]) {
        alice_Score += 1;
    } else {
        if (alice[i] < bob[i]) {
            bob_Score += 1;
        }
    }
}
console.log([alice_Score, bob_Score]);