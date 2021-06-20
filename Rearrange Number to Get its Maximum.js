// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer. Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

// maxRedigit(123); // returns 321

var maxRedigit = function(num) {
    if(num > 999 || num <= 0 || num < 100) {return null}
    let y = num.toString().split('')
    let x = y.sort((a,b)=> {return b-a})
    return Number(x.join(''))
  };