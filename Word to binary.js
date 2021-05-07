// Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

// Example: 'man' should return [ '01101101', '01100001', '01101110' ]
//string => array [binary strings (8 digits) === ASCII of characters in string]

function wordToBin(str){
    let letters = str.split('')
    let letterToASCII = [];
    for(let i = 0; i < letters.length; i++) {
      let x = letters[i].charCodeAt(0);
  //for 8 digits binary numbers add 8 zeros to numbers converted to binary then slice the last 8 digits   
      letterToASCII.push(("00000000"+x.toString(2)).slice(-8))
    }
      return letterToASCII;
  }
  