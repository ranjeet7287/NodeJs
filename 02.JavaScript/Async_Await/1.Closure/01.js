function process(){
    let i = 0;
    function innerprocess(){
        i += 1;
        return i;
    }
    return innerprocess;
}
let res = process(); // this line calls the function, which return another function

console.log(res);

console.log("first time calling res",res());
console.log("seconde time calling res",res());
console.log("third time calling res",res());

