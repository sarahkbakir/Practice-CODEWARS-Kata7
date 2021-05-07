// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    let res = [];
    let x = s.split('');
    
  for(let i = 0; i < x.length; i++) {
    if(x[i] === x[i].toLowerCase()) {
      res.push(x[i].toUpperCase())
    } else if(x[i] === x[i].toUpperCase()) {
      res.push(x[i].toLowerCase())
    }
  }  
    return res.join('');
  }
  