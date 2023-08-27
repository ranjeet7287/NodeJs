function process(){
    let i = 1;
    let j = [1,2,3];
    let k = 10;
    function innerprocess(){
        i += 1;
        console.log(j);
        return i;
    }
    return innerprocess;
}
let x = process();