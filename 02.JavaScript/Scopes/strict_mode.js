"use strict"
var teacher="Sanket";
function fun(){
    var teacher="Pulkit";
    conent="JS"         // strict not allowed autoglobaling to variable
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

