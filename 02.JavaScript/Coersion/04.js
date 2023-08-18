// CornerCase in Coercion
// ToString  --> "" + value
console.log(""+0);  // 0
console.log(""+(-0)); // 0

console.log(""+[])  // empty string
console.log(""+{})  // [onject Object]
console.log(""+[1,2,3,4,5])  // 1,2,3,4,5 remove the brackets
console.log(""+[null,undefined]) // remove null undifend bracket just get ,
console.log(""+[1,2,null,3,4,undefined,5]) // 1,2,,3,4,,5


// Octal number
// console.log( 0 - 010); 
console.log(0 -'0xb'); // hexadecimal number


console.log(1-[]);
console.log([]-1);
console.log(["1"]-2);
