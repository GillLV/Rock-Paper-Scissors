function getComputerChoice()
{
    let index = Math.floor(Math.random()*3) + 1;
    switch (index)
    {
        case 1: 
            return "rock";
            break;
        case 2:
            return  "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "Whoops";
            break;
    }

}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock" &&  computerSelection == "rock")
    {
        return "Tie! You both chose Rock";
    }

    else if ( playerSelection == "rock" && computerSelection == "paper")
    {
        return "You lose! Paper beats Rock";
    }

    else if ( playerSelection == "rock"  && computerSelection == "scissors")
    {
        return "You lose! Rock beats Scissors";
    }

    else if (playerSelection == "paper" && computerSelection == "rock")
    {
        return "You win! Paper beats Rock";
    }

    else if (playerSelection == "paper" && computerSelection == "paper")
    {
        return "Tie! You both chose Paper";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        return "You lose! Scissors beats Paper";
    }

    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        return "You lose! Rock beats Scissors";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper")
    {
        return "You win! Scissors beats Paper";
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors")
    {
        return "Tie! You both chose scissors";
    }

    else
    {
        return "Oh no! Something went wrong!"
    }
}


function game()
{

    let playerScore = 0;
    let computerScore = 0;

    let playerSelection = "";
    

    while(playerScore < 5 && computerScore < 5)
    {
        let invalid = true;
        
        while(invalid)
        {
            playerSelection = window.prompt("Make your pick");
            if(playerSelection != null)
            {
                playerSelection = playerSelection.toLowerCase();
                if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")
                {
                    invalid = false;
                }   
            }
        }

    
        let computerSelection = getComputerChoice();
   
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) playerScore++;
        else if (result.includes("lose")) computerScore++;
    }

    if (playerScore > computerScore)
    {
        console.log("Game over! You win!");
    }

    else if(playerScore < computerScore)
    {
        console.log("Game over! You lose!");
    }

    else 
    {
        console.log("Game Over! It's a tie!");
    }
    
}


game();