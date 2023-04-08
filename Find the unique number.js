// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
// Solution

function findUniq(arr) {

    let uniqueNums = [...new Set(arr)];
    let res = 0;
    
   for(let i = 0; i < arr.length; i++) {
     
     if(arr[i] === uniqueNums[1]) {
      
       res+=1;
     }
   }
    
    if(res > 1) {
      return uniqueNums[0]
    }
    else if(res === 1) {
      return uniqueNums[1]
    }
  }
  