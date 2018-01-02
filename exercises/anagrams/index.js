// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
        return false;

    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char])
            return false;
    }

    return true;
}

function buildCharMap(arr){
    var charArray = [];
    for(let char of arr){
        charArray[char] = charArray[char]+1 || 1;
    }
    return charArray;
}
console.log("*******");
console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));

module.exports = anagrams;
/* 
function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
    stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
    return (stringA.split('').sort()).join('')===(stringB.split('').sort().join(''))
}
*/
/*
function anagrams(stringA, stringB) {
    console.log(stringA.replace(/[^\w]/g,""));
    stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
    stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
    //return (stringA.split('').sort()).join('')===(stringB.split('').sort().join(''));
    var charA = {};
    var charB = {};

    for(let char of stringA){
        charA[char] = charA[char]+1 || 1;
    }
    for(let char of stringB){
        charB[char] = charB[char]+1 || 1;
    }
    console.log(charA);
    console.log(charB);
    return true;
} 
*/