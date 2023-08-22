// HOF --> Higher Order Function
// function which take another function as arguments these are called HOF.
function f(x,fn){
    /**
     * x -> number
     * fn -> function
     */
    console.log(x);
    fn();
}
f(10,function exec(){
    console.log("I am an expression passed to a HOF");
})

let arr =[1,2,3,9,100,10,1200,400,500]; // unsorted array 
arr.sort(); // it sort the given array 
// [expection] -> this might arrange elements in incserese order
// default implementation of arr.sort() is going to sort my array in lexicographical order
/**
 * Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
 */
/**
 * 0 -> A
 * 1 -> B
 * 2 -> C
 * 
 * . . . . . . . . 
 * 
 * 
 * [B,C,D,J,BAAA,BA,BCAA,EAA,FAA]
 * [B,BA,BAAA,BCAA,C,D,EAA,FAA,J]    Arrange it according to dictionary
 */
console.log(arr);

let b = [1,10,9,100,1000,11,13,2];

// sort is a HOF ,, the sort function takes a comparator function as argument  
b.sort(function(a,b){
    return a - b;
// if a < b -> a - b will be negative -> if comparator function gives negative then a is placed before b (a < b)
// if a > b -> a - b will be positive -> if comparator function gives positive then b is placed before a (a > b)
}); 
console.log(b);