// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let x = s.split('');
    let y = []
    for(let i = 0; i < x.length; i++) {
      let z = x[i].toLowerCase().repeat(i)
      let k = x[i].toUpperCase()
      y.push(`${k}${z}`)
    }
  return y.join('-')
  }