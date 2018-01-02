// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi); //i- case insensitive; g-find all occurance 
    /*match -> returns "no" if there are no matches and returns an "Array" if it contains...*/
    /* console.log(str.match(/[aeiou]/gi));
    console.log(matches); */
    return matches ? matches.length : 0;
}

console.log(vowels('Hi There!'));
console.log(vowels('wrty'));

module.exports = vowels;

/* function vowels(str) {
    var arr=['a','e','i','o','u'];
    var count =0;
    for(let characters of str.toLowerCase()){
        //console.log(str1+" => char -- "+characters+" %% "+arr.includes(characters));
        if(arr.includes(characters))
            count++;
    }
    return count;
}
 */