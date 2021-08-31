// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive


const splitInParts = function(str, parts){
  
    let x=[];
    for (let i = 0; i < str.length; i +=parts){
      
    x.push(str.slice(i ,i+parts))
      
    }
    return x.join(' ')
  }