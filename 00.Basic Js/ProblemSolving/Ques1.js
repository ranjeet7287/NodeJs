// Write a function whether the number is prime or not
function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return "Not Prime"
        }
    }
    // loop complete we didn't see a number which able to divide in the range 2 to num-1
    return "Prime";
}
console.log(isPrime(9))