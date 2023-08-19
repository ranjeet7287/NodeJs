/**
 * JavaScript Execute the code into two phases :-
 *   1. Parsing Phase
 *      - JS reads the whole code in the first go then for every varibles and 
 *        function that sees try to allocate a particular scopes.     
 *   2. Execution Phase
 *   
 */


/**
 * Type of Scopes : 
 *  1. Global
 *  2. Function
 *  3. Block
 */


var teacher="Sanket";
function fun(){
    var teacher="Pulkit";
    console.log(teacher);
}
function gun(){
    var student="Sarthak";
    console.log(student);
}
fun();
gun();
console.log(teacher)