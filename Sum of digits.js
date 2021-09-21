// It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

// Digits can be a number or a string, and you should control it is no undefined and return an empty string.
// Digits can be a number or a string, and you should ensure it is not None and return an empty string.
// To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.

//solution 1
function sum(digits) {
    let sum = digits.split('').join(' + ')
    let res = eval(sum)
    return `${sum} = ${res}`;
  }

  //solution 2
  function sum(digits) {
    if(!digits && digits !== 0) {
      return ``;
    } else if(digits === 0) {
      return `0 = 0`
    } else {
      let nums = `${digits}`;
      let equation = nums.split('')
      let res = eval(equation.join(' + ')) ;
    
      return `${equation.join(' + ')} = ${res}`;
    }

  }