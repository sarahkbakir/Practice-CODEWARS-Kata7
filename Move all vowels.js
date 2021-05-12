// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

function moveVowel(input) {
    let res = []
    let vow = []
    let vowels = /a|e|o|u|i/
    for(let i = 0; i < input.length; i++) {
      if(!input[i].match(vowels)) {
      res.push(input[i])
      } else {vow.push(input[i])}
    }
    return res.concat(vow).join('')
  }