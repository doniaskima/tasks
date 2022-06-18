// method 1
staircase = 8;
for (let i = 0; i < staircase; i++) {

    let line = '';
    let space = staircase - i;

    for (let j = space; j--;) {
        line += ' ';
    }

    for (let j = i; j--;) {
        line += '#';
    }

    console.log(line);
}