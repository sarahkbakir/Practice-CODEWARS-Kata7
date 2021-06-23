// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(str){
    let x = []
    //turn each item in array from string to Number (num)
    for(let i = 0 ; i < str.length; i++) {
    //push num to new array (x)
      x.push(Number(str[i]))
    }
    //return new array (x)
  return x;
  }