//const tinderUser = new Object()  //signal tinderUser ho

const tinderUser = {} //nonsingal tinderUser


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggendId = false
//console.log (tinderUser);


const regularUser = {
    emil : 'Anomal@gmail.com',
    fullname :{
        userfullname :{
        firstname : "Suresh",
        lastname :"Bistaa"

    }
}
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);

const  obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"S@gmail.com",
    },
    {
        id:1,
        email:"S@gmail.com",
    },
    {
        id:1,
        email:"S@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
