var teacher="Sanket";  //  Global
function fun(){        // Global
    console.log(teacher);  // no error // undefined
    console.log(content); // thrown an error  ......TEMPORAL DEAD ZONE......
    // Reagion before the declaration of a variable which is having block scope made by let is called
    // Temporial Dead zone
    var teacher="Bawalu";  // Scope of fun
    let content="JS";      // content will be access only post declaration
    if(content=="JS"){
        let hours="120+";
        console.log(hours);
    }
    console.log(teacher,content);
}

fun();
console.log(teacher);