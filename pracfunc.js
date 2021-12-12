const retirementAge = 65; // Define total retirement age
// Calculate age function
const calcAge = (birthYear) => 2021 - birthYear;

// Calculate rember yers of retirement
const yearsUntilRetirement = (firstName, birthYear) => {
    const age = calcAge(birthYear)
    const retYear = retirementAge - age;
    if(retYear > 0){
        console.log('Age of ', firstName, 'is', age);
        return `${firstName + 's'} Go to Retirement after ${retYear} years.`;
    }else{
        console.log('Age of ', firstName, 'is', age);
        return `${firstName + 's'} had gone retirement`;
    }
}

console.log( yearsUntilRetirement('Hridoy', 2004)); // Call, execute or invoked the fanction

