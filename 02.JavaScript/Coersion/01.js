// ToNumber(10);   
// Will give error beacouse this function not vaild for user  beacouse javascript
// internally use it asbstract operation.

console.log(2 - 9);   
console.log(4 - null);  // 4 - Null --> 4 - 0 --> 4 
console.log(4 - NaN);   //  4 - Nan  --> NaN  -> NaN
console.log(5 - undefined)  // 5 - undefined  --> 5 - NaN --> NaN

console.log(67 - "87");
console.log("ranjeet7287" - 7777);


console.log(1-'0xa'); // -9 😵☠️

/**
 * 
 * 
    '0xa' is a hexadecimal string representation, which is equivalent to the   decimal number 10.

    When you try to subtract a string from a number, JavaScript will attempt to convert the string to a number. In this case, it will convert '0xa' to the number 10.
    
    So, the operation becomes 1 - 10, which results in the value -9.

    Here's a step-by-step breakdown:

    1 (number) - 10 (converted from '0xa') = -9
    That's why you're getting -9 as the result.
    
*/