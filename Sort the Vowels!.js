// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "Codewars" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Case doesn't matter
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

function sortVowels(s){
    let res =[];
  if (typeof s !== 'string' || s === '' || s === undefined) return '';
      
    for(let i = 0; i < s.length; i++) {
      if(s[i].match(/[aeiou]/ig)) {
        res.push(`|${s[i]}`)
        } else {
        res.push(`${s[i]}|`)
        }
    } 
    return res.join('\n');
  }