let playerScore= 0
let computerScore= 0
const buttons = document.querySelectorAll('input')






function game() {
    let text
    let playerSelection= prompt("What is your weapon of choice rock,paper or scissors?", "rock")
    switch (playerSelection) {
    
    
    case "rock":
    text= 'Rock';
    return playRound(playerSelection);
        
    
    
    case "scissors":
    text= "Scissors";
    return playRound(playerSelection);
   
   
    case "paper":
    text= "Paper";
    return playRound(playerSelection);


    default:
    text= "Please insert your weapon of choice !!! This is a duel, sir !";

    }

}
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}



function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result=""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) 
    
    {
    
    playerScore += 1
    result = ('You won! ' + playerSelection + ' beats ' + computerSelection
        + "Player score: " + playerScore + "Computer score: " + computerScore)

           if (playerScore == 2) {
            result += 'You won the game!'
            
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('You are tied for the win. You both chose ' + playerSelection
            + "Player score: " + playerScore + "Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose!' + computerSelection + ' beats ' + playerSelection
            + "Player score: " + playerScore + "Computer score: " + computerScore)

        if (computerScore == 2) {
            result += 'You Lost!'
            
        }
    }


    



    document.getElementById('result').innerHTML = result
    return
    }

    
buttons.forEach(button =>{
        button.addEventListener('click', function(){
            playRound(button.value)
        })
    })