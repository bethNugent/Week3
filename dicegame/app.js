let dice = document.getElementById("diceImage");
let remark = document.getElementById("remark1");
let score = document.getElementById("score");
let btn = document.getElementById("btn");

let totalScore = 0; //sets the totalScore to 0 to begin with. This means it will always start at 0

    btn.addEventListener("click", function() {
            remark.textContent = "Play Game"; //if the player has clicked and is playing this will be displayed
            btn.textContent ="Roll again..." //same for button

     
        function roll(){ //the button is clicked
            return Math.ceil(Math.random(1)*6); //ceil()rounds the number up. random()returns a random number between 0-1. *6 times the number by 6
        };
   
        let randomNum = roll(); // A variable has been assigned to call the function

      
        if (randomNum === 1) {  //corresponding images to numbers generated
            dice.src = '../images/dice-1.png';
        } else if ( randomNum === 2) {
            dice.src = '../images/dice-2.png';
        } else if (randomNum === 3) {
            dice.src = '../images/dice-3.png';
        } else if (randomNum === 4){
            dice.src = '../images/dice-4.png';
        } else if (randomNum === 5) {
            dice.src = '../images/dice-5.png';
        } else if (randomNum === 6){
            dice.src = '../images/dice-6.png';
        }
   

        totalScore = totalScore + randomNum; // totalScore = total score + random number generated everytime the button is clicked

        score.textContent = totalScore; //The new value of totalScore will be displayed in the textContent of score id

        
        if (randomNum === 1) {
            remark.textContent = "Loser!"; //as they play the textContent changes depending on their score
            btn.textContent = "Try again!";
            totalScore = 0;
          } else if (totalScore === 21) {
            console.log(totalScore);
            console.log("You hit 21, Well done!");
            remark.textContent = "Winner!";
            btn.textContent = "Another game?";
            totalScore = 0;
          } else if (totalScore >= 22) {
            console.log(totalScore);
            remark.textContent = "Ooops, not this time!";
            btn.textContent = "Start again...";
            totalScore = 0;
          }

        });


