// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

//Solution

\function alphabetWar(fight) {
  
    console.log('fight : ' + fight)
    
    //left side letters (w=4, p=3, b=2, s=1)
    //right side letters (m=4, q=3, d=2, z=1)
    
    let leftLetters = ['s', 'b', 'p', 'w'];
    let rightLetters = ['z', 'd', 'q', 'm'];
    
    let len = fight.length;
    
    
    let leftSide = fight.slice(0, (len/2)-1);
    let rightSide  = fight.slice((len/2), len-1) ;
  
    let RW = 'Right side wins!';
    let LW = 'Left side wins!';
    let EQ = 'Let\'s fight again!';
    
    let midFight = (len/2)-1;
    let leftScore = 0;
    let rightScore = 0;
    
  
    for(let i = 0; i < fight.length; i++) {
     //diffferntiate between left and right sides
     //left side
      if(i <= midFight) {
        
      }
      
      //right side
      else {
        
      }
    }
    
    console.log(rightSide, leftSide, EQ)
    
   
    
  }