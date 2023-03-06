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

function computeWinner(playerSelection, computerSelection)
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
        return "You win! Rock beats Scissors";
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

function playRound(playerSelection)
{   

    removeImages();

    let computerSelection = getComputerChoice();

    let result = computeWinner(playerSelection, computerSelection);    

    let playerWon = false;

    let tie = false;

    if (result.includes("win")) {playerWon = true; playerScore++;}
    else if (result.includes("lose")) {playerWon = false; computerScore++;}
    else if (result.includes("Tie")) {tie = true}
    
    showImages(playerSelection, computerSelection, playerWon, tie); 

    updateResultText(result);

    updateScores();

    //Update Tally
    
}

function isFinal()
{
   return (playerScore >= roundsToPlay || computerScore >= roundsToPlay) ? true : false;
}

function endGame() {

    removeImages();
    updateResultText("");
    computerScore = 0;
    playerScore = 0;
    updateScores();

    let rockButton = document.querySelector("#rock");
    rockButton.disabled = false;

    let paperButton = document.querySelector("#paper");
    paperButton.disabled = false;

    let scissorsButton = document.querySelector("#scissors");
    scissorsButton.disabled = false;

    let resetButton = document.querySelector(".reset");
    resetButton.style.visibility = "hidden";s

}

function showResetButton()
{
    let resetButton = document.querySelector(".reset");
    resetButton.style.visibility = "visible";

    let rockButton = document.querySelector("#rock");
    rockButton.disabled = true;

    let paperButton = document.querySelector("#paper");
    paperButton.disabled = true;

    let scissorsButton = document.querySelector("#scissors");
    scissorsButton.disabled = true;

}

function onButtonClick() {
    let id = this.id;
    playRound(id);
    if (isFinal()) showResetButton();
}

function removeImages()
{
    const playerImg = document.querySelector("#player-img");
    const computerImg = document.querySelector("#computer-img");

    if (playerImg == null || computerImg == null) return;    

    const playerFrame = document.querySelector("#frame-player");
    const computerFrame = document.querySelector("#frame-computer");

    playerFrame.removeChild(playerImg);
    computerFrame.removeChild(computerImg);
}

function showImages(playerChoice, computerChoice, playerWon, tie) {

    let playerImg = document.createElement('img');
    playerImg.id = "player-img";
    playerImg.style.width = "200px";
    playerImg.style.height = "200px";
    
    let computerImg = document.createElement('img');
    computerImg.id = "computer-img"
    computerImg.style.width = "200px";
    computerImg.style.height = "200px";
   

    switch (playerChoice)
    {
        case 'rock':
            if(playerWon)
                playerImg.src = "images/Rock-Final-Won.png";
            else if (!playerWon || tie)
                playerImg.src = "images/Rock-Final-Hover.png";
            break;
        case 'paper':
            if (playerWon)
                playerImg.src = "images/Paper-Final-Won.png";
            else if (!playerWon || tie)
                playerImg.src = "images/Paper-Final-Hover.png";
            break;
        case 'scissors':
            if (playerWon)
                playerImg.src = "images/Scissors-Final-Won.png";
            else if (!playerWon || tie)
                playerImg.src = "images/Scissors-Final-Hover.png";
            break;
    }

    switch (computerChoice)
    {
        case 'rock':
            if(playerWon || tie)
                computerImg.src = "images/Rock-Final-Hover.png";
            else
                computerImg.src = "images/Rock-Final-Won.png";
            break;
        case 'paper':
            if (playerWon || tie)
                computerImg.src = "images/Paper-Final-Hover.png"
            else
                computerImg.src = "images/Paper-Final-Won.png";
            break;
        case 'scissors':
            if (playerWon || tie)
                computerImg.src = "images/Scissors-Final-Hover.png";
            else
                computerImg.src = "images/Scissors-Final-Won.png";
            break;
    }

 const playerFrame = document.querySelector('#frame-player');
 playerFrame.appendChild(playerImg);

 const computerFrame = document.querySelector('#frame-computer');
 computerFrame.appendChild(computerImg);

}

function updateResultText(result)
{
    let text = document.querySelector("#result-text");
    //Make text element once
    if( text == null) 
    {
        text = document.createElement('h2');
        text.id = 'result-text';
        text.style.color = "white";
        text.style.fontSize = "30px";
        text.style.fontFamily = "chalkText";
        text.style.padding = "0";
        text.style.margin = "0";

        text.textContent = result;
        let div = document.querySelector(".result");
        if (div == null) return;
         div.appendChild(text);
         return;
        
    }

    text.textContent = result;

}

function updateScores()
{
    let playerScoreText = document.querySelector("#player-score");
    if (playerScoreText == null) return;

    playerScoreText.textContent = playerScore;

    let computerScoreText = document.querySelector("#computer-score");
    if (computerScoreText == null) return;

    computerScoreText.textContent = computerScore
}

let playerScore = 0;
let computerScore = 0;
let roundsToPlay = 5;

let buttons = Array.from(document.querySelectorAll(".options"));
buttons.forEach(button => button.addEventListener("click", onButtonClick));

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", endGame);
