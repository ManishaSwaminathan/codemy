// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   // debugger;
    //var rev = str.split('').reduce((rev,char)=> rev+char,"");
    /* var rev='';
    for(let char in str){
        rev=rev+char;
    } */
    //return (str === str.split('').reduce((rev,char)=> rev+char,""))? true: false;

    //return (str === str.split('').reverse().join(''))? true: false;//TIME:1.389s,
    return str.split('').every((char,i) => {
        return char === str[str.length - i - 1];
    });
    //return (rev === str)? true: false;
}
/* palindrome('aba ');
palindrome('Fish hsif');
palindrome('greetings'); */

module.exports = palindrome;
