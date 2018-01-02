// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//Recursive solution...
function pyramid(n, row = 0, level = '') {
    const middle = Math.floor(((2 * n) - 1) / 2);
    //console.log("n => "+n+" level => "+level+" limit => "+limit);
    if (n === row) {
        return;
    }
    if (((2 * n) - 1) === level.length) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    if (middle - row <= level.length && middle + row >= level.length) {
        level += '#';
    }
    else {
        level += ' ';
    }
    pyramid(n, row, level);
}

for (var i = 1; i < 6; i++) {
    pyramid(i);
    console.log("******************");
}

module.exports = pyramid;

/* function pyramid(n) {
    var middle = Math.floor(((2 * n) - 1) / 2);
    for (var row = 0; row < n; row++) {
        var level = '';
        for (var column = 0; column < (2 * n) - 1; column++) {
            if (middle - row <= column && middle + row >= column) {
                //if(column <= middle+row && column >= middle-row){}
                level += '#';
            }
            else {
                level += ' ';
            }
        }
        console.log(level);
    }
}
 */