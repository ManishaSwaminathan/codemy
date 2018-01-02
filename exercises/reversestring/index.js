// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
    debugger;
   return str.split('').reduce((rev,char) => char+rev,'');
}

reverse('asdf'); */

module.exports = reverse;

/*
function reverse(str) { 
var rev="";
    for(var i=str.length-1;i>=0;i--){
        rev+=str[i];
    } 
    return str;
    Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.805s
}
*/
/* function reverse(str) {
    const arr = str.split('');//Split the String with the arugument given [''->split each and every element in an Array]
    arr.reverse();
    return arr.join('');//3.732s 
    //return str.split('').reverse().join('');
} */
function reverse(str) {
    debugger;
    let reversed='';
    for(let character of str){
        debugger;
        reversed = character + reversed;
    }
    return reversed;
}
reverse('asdf');

/* cd exercises/
cd reversestring/
node inspect index.js
debug> c or cont
debug> repl
to inspect a variable => after giving repl -> type the variables to be debugged.
 */