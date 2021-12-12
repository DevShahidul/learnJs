// Coding challenge # 4

/* 

Steven wants to build a very simple tip calculator for whenever he hoes eating in a resturant. I his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Test Data: Test for bill values 275, 40, 430

*/



const bill  = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
const subTotal = bill + tip;

console.log('tip', tip, `The bill wass ${bill}, the tip was ${tip}, and the total value ${subTotal}`);
