 array = [1, 2, 3, 4, 2];


 let dupl = array => array.filter((prev, next) => array.indexOf(prev) !== next);
 console.log(dupl(array));