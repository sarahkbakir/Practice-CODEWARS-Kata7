// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
    let start  = (n*(n-1) + 1);
    let count = Number(start);
    let y = [start];
    let x = 1;
    let res = 0;
    
    if(n === 1) {
      return 1
    } else {
      
    while(x <= n) {
    count = count +2
      y.push(count)
    
      
      x++;
      
    }
    }
    
    for(let i = 0; i < y.length -1; i++) {
    res+= y[i];  
    }
    return res
  
  }