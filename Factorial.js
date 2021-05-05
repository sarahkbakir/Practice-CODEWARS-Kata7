// Your task is to write function factorial.

function factorial(n){
    let i = 1;
    let num = 1;
    while(i <= n) {
      num *=i;
      i++
    }
    return num
  }