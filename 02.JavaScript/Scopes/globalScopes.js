// console.log(name);  // Error when let name ="Ranjeet"  // undefined when var  
// // let name="Ranjeet";
// var name="Ranjeet";  
// function Fun(){
//     console.log(name);
// }
// Fun();
// console.log(name)

// var x=1;
// if(x==1){      //  Block Scope
//     var x=2;   //  Block only Scopes let and const but not var deceleration
//     console.log(x);
// }
// console.log(x)

let x = 1;
if(x == 1){
    //  new  x 
    let x = 2;
    console.log(x);
}
console.log(x);

// var x=1;
// function fun(){   // Function Scope
//     var x=2;
//     console.log(x);
// }
// fun();
// console.log(x);