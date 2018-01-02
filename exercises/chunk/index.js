// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
var chunked=[];
let index=0;
while(index < array.length){
         chunked.push(array.slice(index,index+size));
         index=index+size; 
 }
return chunked;
}

chunk1([1,2,3,4,5,6,7],2);
console.log(chunk1([1,2,3,4,5,6,7],2));
module.exports = chunk;
/*
function chunk(array, size) {
    debugger;
    var mainArray = [];
    var subArray =[];
    var k=0;
     while(k<array.length){
         subArray=[];
     for(var j=0;j<size && k<array.length;j++){
        if(k<array.length) {
        subArray.push(array[k]);
        k++;
        }
     }
     mainArray.push(subArray);
    } 
return mainArray; */

function chunk1(array, size) {
    debugger;
    const chunked = [];

    for(let element of array){
        console.log("element -> "+element);
        const last = chunked[chunked.length - 1];
        console.log("last -> " +last);
        if(!last || last.length === size) {
            chunked.push([element]);
            console.log("inside if -> "+chunked);
        } else{
            last.push(element);
            console.log("inside ELSE -> "+chunked+" last "+last);
        }
    }

    return chunked;
}


/* function chunk(array, size) {
    var chunked=[];
    let index=0;
    while(array.length !=0){
             chunked.push(array.splice(0,size));
     }
    console.log(chunked);
    return chunked;
    } */
    
