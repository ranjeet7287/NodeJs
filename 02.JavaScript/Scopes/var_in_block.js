function fun(){
    var i = 0;
    while(i <= 10){
        let y=i;
        var x = i;
        i++;
    }
    console.log(x); // var x will available in whole function scope
    console.log(y); // but let i only accessible in post block scope of while
}
fun();

// var ko block scope se kio farak nhi padtha hai lakin function scope s padtha hai ☠️
// let ko bolck scope se farak padtha hai 😵

let i=0;          // Globally Scoped 
console.log(y);  // undefined y - > don't care about block scope
while(i<=5){ 
    var y = 10;
    i++; 
}
console.log(i);  // 6
console.log(y);  // 10

// redecleration is not allowed in var but allowed in with var

function jai(){
    function love(){
        var i=1      //  here i is love fun scoped it will only available in this fun block
        console.log(i);
    }
    love();
    console.log(i); 
}
jai();
