"use strict";

// For the random number
const secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess);

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})
// When there is no input
if (guess < 1){
    document.querySelector('.message').textContent = 'No Number ⛔';
}  
// when the input is the correct number guessed
else if (guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore)
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;

    
}  
// when the input is lesser than the random number
else if (guess < secretNumber){
    if (score > 1){
        document.querySelector('.message').textContent = 'Too low📉';
        score --;
        document.querySelector('.score').textContent = score;
    } else{document.querySelector('.message').textContent = "You've lost the game😥";
        document.querySelector('.score').textContent = 0; }
   
}  
// when the input is higher than the random number
else if (guess > secretNumber){
    if (score > 1){
        document.querySelector('.message').textContent = 'Too high📈';
        score --;
        document.querySelector('.score').textContent = score;
    } else{document.querySelector('.message').textContent = "You've lost the game😥";
    document.querySelector('.score').textContent = 0; }
}
})