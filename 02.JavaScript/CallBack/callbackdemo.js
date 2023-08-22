
// setTimeout - > HOF
// fun exec - > callback fun
setTimeout(function exec(){
    console.log("Running after sometimes")
},2000)

/**
 * Problem with in callback function
 * 1.Inversion of control
 * 2.CallBack hell -> readbility problem
 */