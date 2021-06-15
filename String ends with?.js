// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let arr1 = str.split('');
    let arr2 = ending.split('');
    let start = arr1.length - arr2.length;
    let common = arr1.splice(start, arr2.length)
  
    if(arr2.join`` === common.join``) {
      return true
    } else {
      return false
    }
  }