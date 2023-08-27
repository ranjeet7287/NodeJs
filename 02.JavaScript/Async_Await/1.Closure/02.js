function DO(task){  // task is local to DO function
    setTimeout(function exec(){  // trigger in Runtime
        console.log(task);  // 
    },2000);
}
DO("Love YOU");

console.log("Love you a lot"); // JS moved ahead still able to  