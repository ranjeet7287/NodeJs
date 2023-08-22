const f = function fun(){
    console.log("How much fun ?");
}
// fun(); // error not fun is not defined beacouse it's function expression
// fun () gets the scope of coressponding expression
// console.log(f); // [Function : fun]
f();  // calling a function Expression "How much fun ?"