// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"


//Solution 1:

function calculate(string) {
    let nums = [];
    let str = string.split('')
    
    for(let i =0; i < str.length; i++) {
      if(!isNaN(str[i])) {
        nums.push(Number(str[i]))
      }
      if(str[i] === 'p') {
         nums.push('+')
      }
      else if(str[i] === 'm') {
        nums.push('-')
      }
  }
    let x = nums.join``; 
      return eval(x).toString();
  }

//   Solution 2:
function calculate(string) {

return (eval(str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-'))).toString()
}