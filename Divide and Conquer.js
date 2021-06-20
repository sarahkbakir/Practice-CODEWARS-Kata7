// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    let strings = 0;
      let nonStrings = 0;
      for(let i = 0; i < x.length; i++) {
        if(typeof x[i] === 'string') {
          strings += (Number(x[i]))
        } else {
          nonStrings += (Number(x[i]))
        }
      }
      return nonStrings - strings;
    }