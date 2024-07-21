//Question #:1   Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function reverseArray(array){
    let reverseArray = [];
    for(let i = array.length - 1;i >=0; i--) {
reverseArray.push (array[i])
    } 
    return reverseArray
}
let a = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArray(a));
