//singleton

//object literals
//Object.create

const mySym = Symbol("key1")
const jsUser = {
    name : "suresh",
    [mySym] :"mykey1",
    age :20,
    location : "ktm",
    email : "suershbista@gmail.com",
    isLoggedIn :false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser.email);
// console.log(jsUser);
// console.log(jsUser[mySym]);

jsUser.email = "sureshjack@gmail.com"
//Object.freeze(jsUser)
jsUser.email= "suresh@microsfot.com"
//console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting);


jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




