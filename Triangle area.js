// Task.

// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

// Hints

// Ignore dots.

// All triangles will be right isoceles.

// Example:

// .
// .      .  
// .      .       .      ---> should return 2.0

// .
// .      .  
// .      .       .     
// .      .       .      .      ---> should return 4.5


function tArea(dots) {
  
    const arrOfDots = dots.trim().split('\n'); 
    const base = Math.floor(arrOfDots[arrOfDots.length - 1].length / 2);
    const height = arrOfDots.length - 1;
    const area = (0.5) * base * height;
    
    return area;
  }