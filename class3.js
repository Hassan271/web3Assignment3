"use strict";
//Web-3 Class-3    8-Aug-203		Assignment-3  
// Hassan Farooq 
// Q-1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
//Celsius to Fahrenheit  c2f = celsius*9/5+32
var celsius = 25;
var c2f = celsius * 9 / 5 + 32;
console.log("Temperature from Celcous to Fahrenheight = " + c2f);
//Fahrenheit to Celsius f2c = (Fahrenheit-32)*5/9
var Fahrenheit = 98;
var f2c = (Fahrenheit - 32) * 5 / 9;
console.log("Temperature from Fahrenheit to Celcous is = " + f2c);
//Q2 - Write a program that calculates the percentage.
var total = 500;
var obtained = 400;
var Percentage = obtained / total * 100;
console.log("Percentage  = " + Percentage);
//  Q-3- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var Days = 25;
var weeks = Math.floor(Days / 7);
var reaminigDays = Days % 7;
console.log("if Days = " + Days + " Weeks are = " + weeks + " and Remaining Days are = " + reaminigDays);
//Q 4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var productPrice = 122; // price in Dollar  , And it will not work on -ve price .
var discount = productPrice * (10 / 100); //10% of discount 
var discountedPrice10per = "if prince is above 100$ Discounted price is = " + (productPrice - discount);
var discount5per = productPrice * (5 / 100); //5% of discount 
var discountedPrice5per = "5% Discounted price is = " + (productPrice - discount5per);
if (productPrice >= 100) {
    console.log(discountedPrice10per);
}
else if (productPrice > 0 && productPrice <= 99) // in dollar 
 {
    console.log(discountedPrice5per);
}
else {
    console.log("Error");
}
//Q 5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age = 13;
if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teen Ager");
}
else if (age > 19) {
    console.log("Adult");
}
else {
    console.log("Undefined/Error");
}
//Q-6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 26;
if (temperature <= 20) {
    console.log("it is cold we suggest the user to wear warm clothes");
}
else if (temperature > 20) {
    console.log("You should wear hot clothes");
}
else {
    console.log("Undefined");
}
//Q-6 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var num = 45;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("the number is divisible both 3 and 5.");
}
else if (num % 3 == 0) {
    console.log("the number is divisible only on 3.");
}
else if (num % 5 == 0) {
    console.log("the number is divisible only on 5.");
}
else {
    console.log("Undefined");
}
//Q-7- Write a program that checks if the given year is leap year or not.
var year = 2000;
var year2 = 2020;
if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    console.log("The year will be leap year");
}
else {
    console.log("Year will not leap year");
}
if (year2 % 4 == 0 && year2 % 100 != 0 && year2 % 400 != 0) {
    console.log("It will also Leap Year");
}
else {
    console.log("Else it will not");
}
// Q-8- Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var givenDayNum = 3;
switch (givenDayNum) {
    case 1:
        console.log("no 1: Monday");
        break;
    case 2:
        console.log("no 2:Tuesday");
        break;
    case 3:
        console.log("no 3: Wednesday");
        break;
    case 4:
        console.log("no 4: Thursday");
        break;
    case 5:
        console.log("no 5: Friday");
        break;
    case 6:
        console.log("no 6: Saturday");
        break;
    case 7:
        console.log("no 7: Sunday");
        break;
    default:
        console.log("No day selected");
        break;
}
// 9 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//    Where the tax amount will be calculated by the amount of bill.
var units = 556;
var priceOfunit = 40;
var calculated = (units * priceOfunit);
if (units <= 0 && units <= 100) {
    // formula to add tax
    var billCalculation = calculated + (10 / 100) * calculated;
    console.log(`Total units Consumed: ${units} and total bill with 10% tax:${billCalculation}`);
}
else if (units > 100 && units <= 200) {
    // formula to add tax
    var billCalculation = calculated + (15 / 100) * calculated;
    console.log(`Total units consumed: ${units} and total bill with 15% tax: ${billCalculation}`);
}
else if (units > 200 && units <= 500) {
    var billCalculation = calculated + (25 / 100) * calculated;
    console.log(`Total units consumed ${units} and total bill with 25% tax: ${billCalculation}`);
}
else {
    var billCalculation = calculated + (35 / 100) * calculated;
    console.log(`Total units consumed ${units} and total bill with 35% tax: ${billCalculation}`);
}
