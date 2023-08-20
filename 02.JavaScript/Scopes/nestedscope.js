function fun(){  //  fun - > Global
    var x=10;   //    x -> fun scope
    function gun(){  // gun -> fun scope
        var y=20;    // y -> gun scope
        console.log(x); // one scope up
        console.log(y); 
    }
    console.log(x);  //  10
    console.log(y);  // error 
}
fun();