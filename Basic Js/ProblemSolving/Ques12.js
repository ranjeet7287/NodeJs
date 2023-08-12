// Calculate the sum of digit of the n.
// 1234 -: 1+2+3+4 -> 10
function SumOfDigit(n){
    let sum=0;
    while(n>0){
        // n%10 --> last digit of number
        sum+=n%10;
        // n/10 --> reducing number elimenate the last digit 
        // 1234/10 --> 123.4 --> Math.floor(123.4) --> 123 
        n=Math.floor(n/10);
    }
    return sum;
}
console.log(SumOfDigit(1234));