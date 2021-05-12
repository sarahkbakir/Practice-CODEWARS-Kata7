// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    let even = 0 ;
    let odd = 0; 
    for(let i = 0; i < str.length; i++) {
      if(str[i] % 2 === 0) {
        even = even + Number(str[i])
      } else if(str[i] % 2 !== 0) {
        odd = odd + Number(str[i])
      }
    }
    if(even > odd) {return "Even is greater than Odd"}
    else if(even < odd) {return "Odd is greater than Even"}
    else if(even === odd) {return "Even and Odd are the same"}
  }