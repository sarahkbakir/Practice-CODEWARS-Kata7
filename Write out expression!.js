// Math hasn't always been your best subject, and these programming symbols always trip you up! I mean, does ** mean "Times, Times" or "To the power of"? Luckily, you can create the function to write out the expressions for you!

// The operators you'll need to use are:

// "+"   -->  "Plus"
// "-"   -->  "Minus"
// "*"   -->  "Times"
// "/"   -->  "Divided By"
// "**"  -->  "To The Power Of"
// "="   -->  "Equals"
// "!="  -->  "Does Not Equal"
// Notes:

// the input will always be given as a string, in the following format: number space operator space number; for example: "1 + 3" or "2 - 10"
// the numbers used will be 1 to 10
// the valid operators and the relevant texts are stored in the preloaded dictionary/hash OPERATORS
// invalid operators will also be tested, to which you should return "That's not an operator!"
// Examples
// "4 ** 9"  -->  "Four To The Power Of Nine"
// "10 - 5"  -->  "Ten Minus Five"
// "2 = 2"   -->  "Two Equals Two"
// "2 x 3"   -->  "That's not an operator!"

function expressionOut(expr) {
    let x = expr.split(' ')
    x = x.filter(function(str) {
      return /\S/.test(str); })
    
    let nums = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    let operator = ['Plus', 'Minus', 'To The Power Of', 'Times', 'Divided By', 'Does Not Equal', 'Equals']
    let res = [];
    for(let i = 0; i <x.length; i++) {
      if(x[i] >= '1' && x[i] <= 10) {
       res.push(nums[x[i] - 1]) 
      }
      else {
        switch(x[i]) {
            case '+':
             res.push(operator[0]);
            break;
            case '-':
             res.push(operator[1]);
            break;
            case '**':
             res.push(operator[2]);
            break;
            case '*':
             res.push(operator[3]);
            break;
            case '/':
             res.push(operator[4]);
            break;
            case '!=':
             res.push(operator[5]);
            break;
            case '=':
             res.push(operator[6]);
            break;
            default:
             return res = 'That\'s not an operator!';
            break;
        }
      }
    }
    
    if(nums.includes(res[1])) {
      return res = 'That\'s not an operator!';
    }
    else {
    return res = res.join(' ').toString(' ');
    } 
    return res;
  }