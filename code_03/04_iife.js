//Immediately invoked Function Experssions (TTFE)

(function javascript(){
             ////named iife

    console.log(`DB CONNECTED`);

})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);

})('suresh')