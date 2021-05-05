// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// solution 1:

function average(scores) {
    let x = scores.join('+')
    return Number((eval(x)/scores.length).toFixed())
  }

//   solution 2:
function average(scores) {
    return Math.round(scores.reduce((first,next)=>(first+next),0)/scores.length)
  
  }