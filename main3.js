// Question #:3 Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of. 
function countVowels(string) {
    let vowels = 'aeiou';
    let count = 0;
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


let string = "Hello Tooba Khan how are you?";
console.log(countVowels(string)); 



