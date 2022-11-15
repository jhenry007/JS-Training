const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.join(",");

let sentence = "I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence;

//["black mirror", "money heist", "the big bang theory"]
myWatchedSeries.splice(2, 1, "friends");

//["black mirror", "money heist", "friends"]
myWatchedSeries.push("the walking dead");

//['black mirror', 'money heist', 'friends', 'the walking dead']
myWatchedSeries.splice(3,1 , "black mirror");
myWatchedSeries.splice(0,1 , "the walking dead");

//['the walking dead', 'money heist', 'friends', 'black mirror']
myWatchedSeries.splice(3,1);

const money_heist = myWatchedSeries[1];
let char_3 = money_heist.substring(0, 3);
//console.log(char_3)

