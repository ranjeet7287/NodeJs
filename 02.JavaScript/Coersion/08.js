// neagative zero
let x = -0;
console.log(x == 0);           // true
console.log(Object.is(x,-0));  // true
console.log(Object.is(x,0));   // false


console.log(Math.sign(-3));    // -1
console.log(Math.sign(3));     //  1
 
console.log(Math.sign(-0));    // -0


