//Exercise 1

5 >= 1
//Prediction :True
//Actual :True

0 === 1
//Prediction :False
//Actual :False

4 <= 1
//Prediction :False
//Actual :False

1 != 1
//Prediction :False
//Actual :False

"A" > "B"
//Prediction :NaN
//Actual :False

"B" < "C"
//Prediction :False
//Actual :True

"a" > "A"
//Prediction :NaN
//Actual :True

"b" < "A"
//Prediction :False
//Actual :False

true === false
//Prediction :False
//Actual :False

true != true
//Prediction :False
//Actual :False

//Exercise 2
const str = ("10, 15, 20, 25, 30, 35, 40, 45, 50, 55");
const sumStringNum = str => {
   const strArr = str.split(",");
   let res = 0;
   for(let i = 0; i < strArr.length; i++){
      if(+strArr[i]){
         res += +strArr[i];
      };
   };
   return res;
};
//console.log(sumStringNum(str)); = 325

//Exercise 3
let msgbox
let text = "I love the movie named Nemo";
let position = text.search("Nemo");
let message_to_display = "I found Nemo at the " + position + " position"


if (position >= 1) {
  msgbox = "Nemo can't be found";
}

//Exercise 4
let o = "o"

let insert_num = prompt('Please select a number');
alert(`You have chosen ${insert_num}!`);

if (insert_num <2) {
  alert(`Boom!`);
}

if (insert_num >2) {
alert(`b${o.repeat(insert_num)}m`);
}
