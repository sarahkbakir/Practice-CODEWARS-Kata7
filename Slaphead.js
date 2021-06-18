// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

function bald(x){
    let count = 0;
    let head = '';
    let y = '-'.repeat(x.length);
    let res = []
    
    for(let i = 0; i < x.length; i++) {
      if(x[i] === '/') {
        count++
      }
    }
    if(count === 0) {
      head = 'Clean!'
    } else if(count === 1) {
      head = 'Unicorn!'
    } else if(count === 2) {
      head = 'Homer!'
    } else if(count >= 3 && count <= 5) {
      head = 'Careless!'
    } else if(count > 5) {
      head = 'Hobo!'
    }
    res.push(y, head)
    return res
  }