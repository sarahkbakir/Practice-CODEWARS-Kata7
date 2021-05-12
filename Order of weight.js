// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.

function arrange(arr){
    let ton = []
    let Kg =[]
    let g = []
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].includes('KG')) {Kg.push(arr[i])}
      else if(arr[i].includes('G')) {g.push(arr[i])}
      else if(arr[i].includes('T')) {ton.push(arr[i])}
    }
    let y = g.sort((a,b) => {return a.replace('G', '') - b.replace('G', '')})
    let x = Kg.sort((a,b) => {return a.replace('KG', '') - b.replace('KG', '')})
    let z = ton.sort((a,b) => {return a.replace('T', '') - b.replace('T', '')})
    return y.concat(x).concat(z)
  }