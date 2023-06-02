const getUserChoice = (userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
        return userInput;
    }
    else{
        console.log("Invalid Input!");
    }
}
const getComputerChoice = () =>{
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
const determineWinner = (userChoice,computerChoice)=>{
    if(userChoice==='bomb'){
        return "User Wins!";
    }
    if(userChoice===computerChoice){
        return "It's a tie!";
    }
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return "Computer Wins!";
        }
        else{
            return "User wins!";
        }
    }
    if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            return "Computer Wins!";
        }
        else{
            return "User wins!";
        }
    }
    if(userChoice==='scissors'){
        if(computerChoice==='rock'){
            return "Computer Wins!";
        }
        else{
            return "User wins!";
        }
    }
}

const playGame = () =>{
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`User Choice is ${userChoice} and Computer Choice is ${computerChoice}.`);
    console.log(determineWinner(userChoice,computerChoice));
}

playGame();
