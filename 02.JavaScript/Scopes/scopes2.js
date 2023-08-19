var teacher="Sanket";
function fun(){
    var teacher="Pulkit";
    conent="JS"          // one scope out 
    console.log(teacher);
}
function gun(){
    var student="Sarthak";
    console.log(student);
}
fun();
gun();
console.log(teacher)
console.log(conent);
// if you want to assign value to variable which not present any of the 
// encloseing scope then it will automatically become global scope.
