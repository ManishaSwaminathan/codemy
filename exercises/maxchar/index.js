// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charMap={};
    var greater=0;
    var x;
    for(let char of str){
        charMap[char] = charMap[char] +1 || 1;
        if(greater < charMap[char]){
            x=char;
        }
    }
    return x;
}

module.exports = maxChar;
