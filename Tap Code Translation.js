// Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

// The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

//    1  2  3  4  5
// 1  A  B C\K D  E
// 2  F  G  H  I  J
// 3  L  M  N  O  P
// 4  Q  R  S  T  U
// 5  V  W  X  Y  Z
// Input:
// A lowercase string of a single word (no whitespaces or punctuation, only letters).

// Output:
// The encoded string as taps and pauses.

function tapCodeTranslation(text) {
    //97 to 122
   //each char has (x,y)
    let codeArr = [];
    let dots = []
    const getCode = (text) => {
      let arr = text.split('');
      for(let i = 0; i < arr.length; i++) {
        codeArr.push(arr[i].charCodeAt(0))
      }
    }
  getCode(text)
    for(let i = 0; i <codeArr.length; i++) {
      let y = Math.floor(codeArr[i] - 97) ;
      //c and K situation 
      if(codeArr[i] === 99 || codeArr[i] === 107) {
        dots.push(1, 3)
      }
      //from a to E {97 to 101}
      else if(codeArr[i] >= 97 && codeArr[i] <=101) {
        dots.push(1, `${y+1}`)
      }
      //from F to J {102 to 106}
      else if(codeArr[i] >= 102 && codeArr[i] <= 106) {
        dots.push(2, `${y-4}`)
      }
      //from L to p {108 to 112}
      else if(codeArr[i] >= 108 && codeArr[i] <= 112) {
        dots.push(3, `${y-10}`)
      }
      //from Q to U {113 to 117} 
      else if(codeArr[i] >= 113 && codeArr[i] <=117) {
        dots.push(4, `${y-15}`)
      }
      //from v to z {118 to 122}
      else if(codeArr[i]>= 118 && codeArr[i] <=122) {
        dots.push(5, `${y-20}`)
      }
      }
    
    let res = [];
    const dotting = (arr) => {
      for(let i =0; i < arr.length; i++) {
        let dots = ('.').repeat(Number(arr[i]))
          res.push(dots)
          }
    }
    
  dotting(dots)
    return res.join(' ')
    
  }