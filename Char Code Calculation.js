// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
    let res = []
    for(let i = 0; i <x.length; i++) {
      let ASCII = x[i].charCodeAt(0);
      res.push(ASCII)
    }
    let z = /7/gi
    let total1 = res.join('');
    let total2 = total1.replace(z,1)
    let count = 0;
    let t = total1.split('')
    for(let j = 0; j < t.length; j++) {
      if(t[j].includes(7)) {
        count++
      } 
    }
    return count*6
  }