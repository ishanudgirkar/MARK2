

var readlineSync = require("readline-sync");

var score = 0;

const chalk = require('chalk'); //standard used in node rather than import

//data of high score 
var highScores = [
  {
    name: "Ishan",
    score: 3,
  },

  {
    name: "Kishan",
    score: 2,

  }]

var questions = [{

  question: chalk.blue.italic("Which nation has won most FIFA World cups ?"),
  answer: "Brazil"
},

{
  question: chalk.blue.italic("Who has scored most goals in  tournament? "),
  answer: "Miroslav Klose"
},

{
  question: chalk.blue.italic("Which country is going to host the upcoming world cup in 2022 ? "),
  answer: "Qatar"
},

{
  question: chalk.blue.italic("Who was the winner of last world cup ?"),
  answer: "France"
},

{
  question: chalk.blue.italic("The first FIFA World Cup tournament was held in ? "),
  answer: "1930"
},

{
  question: chalk.blue.italic("The only team that doesn't have to qualify for the World Cup is the ? "),
  answer: "host country's team"
}




];

function welcome() {

  var userName = readlineSync.question("What is your name ? ");
  console.log(" ")
  console.log(chalk.inverse.bold("Welcome ") + chalk.bgGreen.bold(userName + " to") + chalk.bgCyan.bold.italic(" FIFA Quiz !"));
  console.log(" ")

}

function initiate() {

  options = ['YES', 'NO'];
  console.log('Are you ready to play the game ?');
  index = readlineSync.keyInSelect(options, '');

  if (options[index] === options[0]) {
    console.log(" ")
    readlineSync.keyInPause('HERE WE GOOOOO ! ')
    console.log(" ");
    game();
    displayScore();
  }

  if (options[index] === options[1]) {

    console.log(" ")
    console.log("OK you can play the game whenever you want !")
    console.log(" ")


  }




}


function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("RIGHT !"));
    score = score + 1;
  }
  else {
    console.log(chalk.bgRed("WRONG !"));
  }
  console.log("current score: ", score);
  console.log(" ")

}

function game() {

  for (var i = 0; i < questions.length; i++) {

    var currentQuestion = questions[i];

    play(currentQuestion.question, currentQuestion.answer)
  }



}

function displayScore() {

  console.log(chalk.inverse("Congratulations ! Your SCORE is : ", score + " "));
  console.log(" ")

  console.log("Check out the high scores, if you should be there then ping me and I'll update it");


  highScores.map(score => console.log(score.name, " : ", score.score))


}







welcome();
initiate();


