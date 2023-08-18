// ToPrimitive
let obj={
    toString(){
        // by deafult gives [object Object]
        return 10;
    },
    valueOf(){
        // by deafult gives same object
    }
}
console.log(obj.toString());
console.log(obj.valueOf());

let obj2={};  // ToPrimitive -> toString --> [object Object]
let obj3={};  // <-------------do--------------->
console.log(obj2+obj3);

