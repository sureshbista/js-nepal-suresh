

function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("r");
    console.log("e");
    console.log("s");
    console.log("h");
}
// sayMyName()
// number1 is parameter 
// null is argument

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }



function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 +number2
}
const result = addTwoNumbers(4,6)
// console.log("Result:", result);



function    loginUserMessage(username = "Rajesh"){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("suresh"))

console.log(loginUserMessage("suersh"))