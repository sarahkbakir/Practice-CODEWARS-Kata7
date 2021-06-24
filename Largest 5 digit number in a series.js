// // Largest 5 digit number in a series
// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function solution(digits){
    let x;
    let zero = '0'
  
    
    
    if(digits.length % 5 === 0) {
      x = digits.match(/.{1,5}/g)
    } else if (digits.length % 5 != 0){
    let count = 15 - digits.length;
    let num = zero.repeat(count);
      x = `${num}${digits}`.match(/.{1,5}/g)
    console.log(digits, x, num, count)
    }
  
    let z = x.sort((a,b) => {return b-a })
    return Number(z[0])
    
  