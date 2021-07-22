// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum( a,b )
{
  //return sum of [from a to b] including a and b
  //if a===b return a || b
  let nums = []
  if(a < b) {
    let x = a;
    while(x <= b) {
      nums.push(x)
      x++;
      }
  } else if(b < a) {
      let x = b;
      while(x <= a) {
      nums.push(x)
        x++;
      }
  } else if(a === b) {
      return a;
      }
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
      sum+=nums[i];
    }
  
    console.log('A :'+a,'B :'+b,'nums :'+nums, "Sum :"+sum)
  return sum;
}