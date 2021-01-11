const readlineSync = require('readline-sync');
const chalk = require('chalk')
console.log(chalk.yellow.bold("Do You Know About Me?\n"))

function QuizAboutMe(questions,answer){
  let response = readlineSync.question(chalk.yellow("\n"+questions))

  if(answer === response){
    console.log(chalk.green ("\nCorrect"))
  }else{
    console.log(chalk.red (" \nWrong"))
  }
  
}

qa_arr =[
  {
      q: "What is my Nickname? ",
      a: "Maddy"
  },
   {
      q: "How Old Am I? ",
      a: "32"
  },
   {
      q: "Chess is My favourite Game, Yes or No? ",
      a: "Yes"
  },
   {
      q: "I am Single, Yes or No ",
      a: "Yes"
  }
]

for(let i =0; i<qa_arr.length;i++){
 QuizAboutMe(qa_arr[i].q,qa_arr[i].a)
}