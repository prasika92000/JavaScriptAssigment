//variable declaration
// const c=7
// console.log(c,5,8)
// //c=9  //Error
// var a
// console.log(a)
// a="Rasika"
// console.log(a)

// let b="Patil"
// console.log(b)

// {
//    // console.log(a)
//    let b="xyz"
//    console.log(b)
//    var a="abc"       
//    console.log(a)
// }
// console.log(b)
// console.log(a)

//data types
// let a=null
// console.log(a,typeof a)

// let c=[1,2,3,4,5]
// let b=[5,6,7,8,9]
// console.log(c==b);
// console.log(c)
// console.log(b)
// c=b
// c[0]=200
// console.log(c[0])
// console.log(b[0]);
// const c=[1,2,3,4,5]
// c[0]=8
// console.log(c);

// let addition=(num1,num2)=> {
//     return num1,num2;
//     console.log("addition")
// }
// let sub=(num1,num2)=>  {
//     console.log("sub");
//     console.log(num1+num2);
// }

// subctraction=sub

// const randomfun=(param) => {
//     param(10,20)
// }
// randomfun(sub)
// randomfun(addition)

// let addition = (number1 , number2)=>{ 
 
//     console.log(number1+number2); 
// } 
 
// let subtraction = (number1,number2)=>{ 
//     console.log("subtraction"); 
// } 
 
// const randomof = (param)=>{ 
//     param() 
// } 
 
// // randomof(subtraction()) 
// let userin1 =Number (prompt("Enter num1:")) 
// let userin2 =Number (prompt("Enter num2:")) 
// console.log(userin1,typeof userin1); 
// // randomof(userin) 
 
// addition(userin1,userin2)

let functionGenerator = (functionName) => {
    switch(functionName){
        case "addition" : return ["",addition]
        case "subtraction" : return ["", subtraction]
        default : return ["Invalid",null]
    }
}

let addition = (number1, number2) => {
    if(typeof number1 == "number" && typeof number2 == "number"){
        console.log("Additon is  ", number1+number2);
    }
}

let subtraction = (number1,number2) => {
    if(typeof number1 == "number" && typeof number2 == "number"){
        console.log("Subtraction is ",number1-number2);
    }
}

let [msg,add] = functionGenerator("addition")
add(10,4)

let [msg1,sub] = functionGenerator("subtraction")
sub(10,4)