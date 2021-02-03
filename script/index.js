
let playerScore=0;
let computerScore=0;

document.getElementById('play').onclick=function(){
    document.getElementById("play").className="play1"; 
    
}

document.getElementById('play').onanimationend=function(){
    document.getElementById('play').className="game-none"; 
    document.getElementById('game').className="game";
    document.getElementById('navigation').style.visibility="visible";
    document.getElementById('text').style.visibility="visible";
    document.getElementById('player').style.visibility="visible";
    document.getElementById('computer').style.visibility="visible";
    document.getElementById('result').style.visibility="visible";
    document.getElementById('outside').style.justifyContent="flex-start";
    document.getElementById('outside').style.alignItems="flex-start";
    document.getElementById('result').textContent="0:0";
    document.getElementById('qm').className="rps";
    document.getElementById('rockC').className="rps-non";
    document.getElementById('paperC').className="rps-non";
    document.getElementById('scissorsC').className="rps-non";
    document.getElementById('text').textContent="Player vs Computer";

    
}

function change(){
    if(document.getElementById('rock').className==="rps"){
        document.getElementById('rock').className="rps-non";
        document.getElementById('paper').className="rps";
    } else if(document.getElementById('paper').className==="rps"){
        document.getElementById('paper').className="rps-non";
        document.getElementById('scissors').className="rps";
    } else{
        document.getElementById('scissors').className="rps-non";
        document.getElementById('rock').className="rps";
    };
}

document.getElementById('change').onclick=change;

function computerPlay(){
    let choise = Math.random();
    return (choise<1/3)? 'paper': (choise >= 1/3 && choise < 2/3)? 
    'rock':'scissors';
}

function playRound(playerSelection,computerSelection){
    let result;
    if(playerSelection===computerSelection){
        return 'Tie.';
    } else if (playerSelection.toLowerCase() ==='paper' && computerSelection==='rock'){
        return 'You win. Paper beats rock.';
    } else if (playerSelection.toLowerCase() ==='paper' && computerSelection==='scissors'){
        return 'You lose. Scissors beats paper.';
    } else if (playerSelection.toLowerCase() ==='rock' && computerSelection==='paper'){
        return 'You lose. Paper beats rock.';
    } else if (playerSelection.toLowerCase() ==='rock' && computerSelection==='scissors'){
        return 'You win. Rock beats scissors.';
    } else if (playerSelection.toLowerCase() ==='scissors' && computerSelection==='rock'){
        return 'You lose. Rock beats scissors.';
    } else {
        return 'You win. Scissors beats paper.';
    }
}




function game(){
    document.getElementById('text').textContent="";
    document.getElementById('accept').onclick="";
    document.getElementById('change').onclick="";
    
    for(let i=1; i<20;i++){
    setTimeout(() => {
        if(document.getElementById('rockC').className==="rps"){
            document.getElementById('qm').className="rps-non";
            document.getElementById('rockC').className="rps-non";
            document.getElementById('paperC').className="rps";
        } else if(document.getElementById('paperC').className==="rps"){
            document.getElementById('qm').className="rps-non";
            document.getElementById('paperC').className="rps-non";
            document.getElementById('scissorsC').className="rps";
        } else{
            document.getElementById('qm').className="rps-non";
            document.getElementById('scissorsC').className="rps-non";
            document.getElementById('rockC').className="rps";
        };
        },i*100+800);
    }
    
    let computerSelection=computerPlay();
    let playerSelection;
    if(document.getElementById('rock').className==="rps"){
        playerSelection='rock';
        document.getElementById('rock').style.boxShadow="0 0 4vmin lawngreen";
        document.getElementById('paper').style.boxShadow="";
        document.getElementById('scissors').style.boxShadow="";
    } else if(document.getElementById('paper').className==="rps"){
        playerSelection='paper';
        document.getElementById('paper').style.boxShadow="0 0 4vmin lawngreen";
        document.getElementById('rock').style.boxShadow="";
        document.getElementById('scissors').style.boxShadow="";
    } else{
        playerSelection='scissors';
        document.getElementById('scissors').style.boxShadow="0 0 4vmin lawngreen";
        document.getElementById('paper').style.boxShadow="";
        document.getElementById('rock').style.boxShadow="";
    };

    setTimeout(() => {

    if(document.getElementById(computerSelection + 'C').className==="rps-non" && document.getElementById('rockC').className==="rps"){
        
            document.getElementById(computerSelection + 'C').className="rps";
            document.getElementById(computerSelection + 'C').style.boxShadow="0 0 4vmin lawngreen";
            document.getElementById('rockC').className="rps-non";
    
    } else if(document.getElementById(computerSelection + 'C').className==="rps-non" && document.getElementById('paperC').className==="rps"){
        
            document.getElementById(computerSelection + 'C').className="rps";
            document.getElementById(computerSelection + 'C').style.boxShadow="0 0 4vmin lawngreen";
            document.getElementById('paperC').className="rps-non";
    
    } else if(document.getElementById(computerSelection + 'C').className==="rps-non" && document.getElementById('scissorsC').className==="rps"){
        
            document.getElementById(computerSelection + 'C').className="rps";
            document.getElementById(computerSelection + 'C').style.boxShadow="0 0 4vmin lawngreen";
            document.getElementById('scissorsC').className="rps-non";
    
    } else{
            document.getElementById(computerSelection + 'C').style.boxShadow="0 0 4vmin lawngreen";    
    };
    }, 2800);
    
    setTimeout(() => {

        document.getElementById('scissors').style.boxShadow="";
        document.getElementById('paper').style.boxShadow="";
        document.getElementById('rock').style.boxShadow="";

        document.getElementById('scissorsC').style.boxShadow="";
        document.getElementById('paperC').style.boxShadow="";
        document.getElementById('rockC').style.boxShadow="";

        document.getElementById('accept').onclick=game; 
        document.getElementById('change').onclick=change;

    }, 5000);
    
    let result=playRound(playerSelection,computerSelection);
    let resultSlice=result.slice(4,5);


    
    if(resultSlice==='w'){
        playerScore++;
    } else if (resultSlice==='l'){
        computerScore++;
    };

    setTimeout(() => {
    document.getElementById('text').textContent=result;
    document.getElementById('result').textContent=playerScore +':'+computerScore;

    }, 3300);

    if(playerScore==3 || computerScore==3){
        
        setTimeout(() => {
            document.getElementById('navigation').style.visibility="hidden";
        }, 6000);

        setTimeout(() => {
            document.getElementById('text').style.visibility="hidden";
        }, 7000);

        setTimeout(() => {
            document.getElementById('player').style.visibility="hidden";
            document.getElementById('computer').style.visibility="hidden";
        }, 8000);

        setTimeout(() => {
            document.getElementById('result').style.visibility="hidden";
            

        }, 9000);
        
        setTimeout(() => {
            document.getElementById('game').className="game-none";
            document.getElementById('end').className="end";
            document.getElementById('outside').style.justifyContent="center";
            document.getElementById('outside').style.alignItems="center";
            if(playerScore>computerScore){
                document.getElementById('end').textContent="GAME OVER - YOU WIN!";
            } else{
                document.getElementById('end').textContent="GAME OVER - YOU LOSE!";
            };
            playerScore=0;
            computerScore=0;
        }, 9000);

        setTimeout(() => {
            document.getElementById('end').className="endA";
            
            
        }, 10000);
        document.getElementById('end').onanimationend=function(){
        document.getElementById('end').className="end-non";
        document.getElementById('play').className="play";
        };
    };

}

document.getElementById('accept').onclick=game;
