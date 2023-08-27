function process(){
    let i=0;
    function innerprocess1(){
        i += 1;
        return i;
    }
    function innerprocess2(){
        i += 1;
        return i;
    }
    return {innerprocess1 , innerprocess2};
}
let y = process();
y.innerprocess1();

// it doesn't snapshot the value i it remeber the memory and changes their
