// Coding challenge #2

/*

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

tasks:
    1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 

*/


// From challenge #1
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

// Part of Challenge #2
if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John (${johnBMI})!`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


