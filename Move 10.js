// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

//Solution 1:
function moveTen(s){
    //   // loop over s and push to x : char at (s) + 10
    //   // if char code + 10 > 122 : code + 10 - 122 + 97 (to start again from 'a')
    //   // loop over x and push to y : from char code ()
    //   console.log(s, s.charCodeAt(0)+10)
      let x = []
    let a = 'a'.charCodeAt(0)
    let z = 'z'.charCodeAt(0)
    for(let i = 0; i < s.length; i++) {
      if(s.charCodeAt(i) + 10 > z) {
        x.push(String.fromCharCode(s.charCodeAt(i)+10-z+a -1))
      }
      else if( s.charCodeAt(i)+10 >= a && s.charCodeAt(i) <= z) {
        x.push(String.fromCharCode(s.charCodeAt(i)+10))
      }
      else if(s.charCodeAt(i)+10 < a) {
        x.push(String.fromCharCode(s.charCodeAt(i)+10 + a))
      }
      }
      return x.join('')
    }

    //Solution 2:
    function moveTen(s) {
        return s.split('').map(c => {
          let code = c.charCodeAt(0);
          
          code -= 'a'.charCodeAt(0);
          code += 10;
          code %= 26;
          code += 'a'.charCodeAt(0);
          
          return String.fromCharCode(code);
          
        }).join('');
      }