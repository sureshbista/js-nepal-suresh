
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




console.log(a);
// console.log(b);
// console.log(c);

