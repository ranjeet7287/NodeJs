function* fetchNextElement(){
    const x = 10;
    yield 11;
    console.log("Entering after a yield");
    const y = x + (yield 30);              // yield 30 replace by 19 in thrid iter.next()
    console.log("Value of y is ",y);
}
const iter = fetchNextElement();
console.log("first",iter.next());
console.log("second",iter.next()); 
console.log("third",iter.next(19)); // value in object always by yiled returning value //