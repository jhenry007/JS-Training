//Exercise 1
let sentence = ["my","favorite","color","is","blue"];
let joining_sentence = sentence.join(" ")

//Exercise 2
let str1 = "mix";
let str2 = "pod";

let first_charac = str1.charAt(0);
let second_charac = str1.charAt(1);
let last_charac = str1.charAt(2);

let new_str1 = second_charac + first_charac + last_charac;

let first_charac2 = str2.charAt(0);
let second_charac2 = str2.charAt(1);
let last_charac2 = str2.charAt(2);
let new_str2 = second_charac2 + first_charac2 + last_charac2;

let mix_str = str1 + " " + str2;

//Calculator
let num1 = prompt('Please select a number');
alert(`You have selected the number ${num1} !`);
let num2 = prompt('Please select another number');
alert(`You have selected the number ${num2} !`);

//converting to numbers
let sum = (+num1)+(+num2);
alert(`The sum of the 2 numbers is ${sum}`);