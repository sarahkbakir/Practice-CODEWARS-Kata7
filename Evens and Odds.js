// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.

function evensAndOdds(num){
    //if num is even:
      if(num % 2 === 0) {
        return num.toString(2);
      } else {
        //if num is odd:
        return num.toString(16);
      }
    }