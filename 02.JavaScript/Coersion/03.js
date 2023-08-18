// ToBoolean 
// undefined,Null,NaN,+0,-0,"",false   ==> False
// otherwise ---> True
let x=10;
console.log(!x);
let t=undefined;
console.log(!t);

console.log(true == "1");
// boolean -->  ToNumber(false)->0 for true ->1

console.log(null==false);
/**
 * y-> is a boolean false -> 0
 * null==0
 * false
 */

console.log("NaN"==NaN);

let obj={
    x:10,
    valueOf(){
        return 10;
    }
}
console.log(10==obj);


let obj1={x:10};
let obj2={x:10};
let obj3={y:10};
console.log(obj1==obj1);
console.log(obj1==obj2);
console.log(obj1==obj3);
console.log({x:1}=={x:1});