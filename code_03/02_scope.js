
var c =300//Global scope this line is global scope 
let a=300
if(true){
    let a = 10 //this line is block scope.
    const b =20
    var c = 30
    console.log("INNER:",a );
}

// for(let i=0; i<Array.length;++){
//     const element= array[i];
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "suresh"

    function two(){
        const website = "javascript"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
// one()

if(true){
    const username = "suresh"
     
    if(username === "suresh"){
        const website = "javascript"
        console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);


//++++++++++++++++++++++++insteresitng +++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num +1

}


const addTwo = function(num){//Experation
    return num +2
}

addTwo(5)