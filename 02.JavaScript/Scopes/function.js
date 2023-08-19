function fun(){
    var x = 1; // var is enclosed inside a function
    // vsibility or scoped is inside a function not outside
}
// console.log(x);

function funvar(){
    console.log(y);
    var y = 1;
    // var visible anywhere in the function but let not see funlet function
}
funvar();


function funlet(){
    console.log(z); // give error in case of let beacouse let not visible before intialisation
    let z = 1;
    console.log(z); // visible after decelration of variable
}
funlet();