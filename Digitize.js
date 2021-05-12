// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]


function digitize(n) {
    let x = n.toString();
    let res = [];
    for(let i = 0; i < x.length; i++) {
      res.push(Number(x[i]));
    }
    return res;
  }