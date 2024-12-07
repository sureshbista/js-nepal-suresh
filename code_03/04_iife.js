//Immediately invoked Function Experssions (TTFE)

(function javascript(){
             ////named iife

    console.log(`DB CONNECTED`);

})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);

})('suresh')



//*****************java Execution Context***************
{}//global Ec 
     //this
     //1 Global Execution context
     //2 Funcation Execution context
     //3 Eval Execution context

     //{}=>Memory creation phase
        //Execution phase

        let val1 = 10
        let val2 = 5
        function addNum(num1, num2){
            let total =num1 + num2
            return total
        }

        let result1 =addNum(val1,val2)
        let result2 =addNum()

        ///Global Execution
        //Memory phase
        //val1 undefined
        //val2 undefined 
        //addNum defination

        //3 Execution Phase
        //val1 =>10
        //val2 =>5
        //addNum

        
// Again
// Memory phase
// val1 =undefined
// val2 =undefined
// total =undefined


// Execution 
// num1= 10
// num2 =5
// total =15

