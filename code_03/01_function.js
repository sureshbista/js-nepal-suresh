

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

// console.log(loginUserMessage("suersh"))


function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500))//paramater to the pass in the section 

const user ={
    username: "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username  is ${anyobject.username}and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username:"suresh",
    price:399
})
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

