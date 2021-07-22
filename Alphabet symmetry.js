// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!


function solve(arr) {
    // letters lowerCase() 97 to 122 -
    // letters upperCase() 65 to 90 - (65 -> 1 66 -> 2, )
    //charCodeAt(letter) == num
    let x = [];
    
    const lToCode = (letter) => {
      return letter.charCodeAt(0);
    };
  
    for (let j = 0; j < arr.length; j++) {
          let word = 0;
      
  
      //loop over each string :
      for (let i = 0; i < arr[j].length; i++) {
        // check1: if letter is uppercase
        if (arr[j][i] === arr[j][i].toUpperCase()) {
          //get charcode at arr[j][i]
          let y = lToCode(arr[j][i]) - 65;
          //check if its in order wrt [i]
  
          if (y === i) {
            //if yes count++
             word = word + 1;
          } 
  
        }
        // check1: if letter is lowercase
        else if (arr[j][i] === arr[j][i].toLowerCase()) {
          //get charcode at arr[j][i]
          let y = lToCode(arr[j][i]) - 97;
          //check if its in order wrt [i]
          if (y === i) {
            //if yes count++
            
            word = word+ 1;
          }
  
        }
        
      }
     x.push(word)
    }
    return x
  }
  