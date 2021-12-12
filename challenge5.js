// Challenge #5
/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team completes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 secores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

Test Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
Test Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

Hint: To calculate average of 3 values, and them all together and divide by 3;
Hint: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉 

Good Luck 😀 

*/

// Calculate average score
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Get average scores
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

// Check winners
const checkWinner = (averageScoreA, averageScoreB) => {
    if (averageScoreA >= averageScoreB * 2){
        return console.log(`Dolphins team win (${averageScoreA} VS ${averageScoreB}!)`);
    }else if (averageScoreB >= averageScoreA * 2){
        return console.log(`Korals team win (${averageScoreA} VS ${averageScoreB})!`);
    }else{
        return console.log("No team winner! 😂", averageScoreA, "VS", averageScoreB);
    }
}

checkWinner(scoreDolphins, scoreKoalas);