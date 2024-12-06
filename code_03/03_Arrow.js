const user = {
    username:"suresh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "suresh"
// user.welcomeMessage()
// user.welcomeMessage()

// console.log(this);//empti


// function java(){
//     let username = "suresh"
//     console.log(this.username);
//     console.log(this);
// }
// java()



// const javascript =function(){
//     let username ="suresh"
//     console.log(this.username);
// }

const javascript = () => {
    let username = "suresh"
    console.log(this.username);
}

// javascript()

//  const addTwo=(num1, num2)=>{
//     return num1 +num2
//  }

//  console.log(addTwo(3, 4))

const addTwo = (num1, num2 ) => {username:"suresh"}

console.log(addTwo(50,50))

// const myArray =[1,2,3,4,5,6,7,8]
// myArray.forEach()