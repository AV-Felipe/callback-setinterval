// GLOBAL VARIABLES
let lotteryNumbers = []; //array para os valores sorteados
let playGameFlag = true;

// ELEMENTS
const resultDisplay = document.getElementById('ballsDisplay');

const inputChosenNumbers = document.querySelectorAll('.selectedNumber');

const buttonStartGame = document.getElementById('play');

// EVENT LISTENERS
buttonStartGame.addEventListener('click', startGame);

//FUNCTIONS

async function lottery(array){
    return await new Promise(resolve =>{
        const interval = setInterval(() => {
            
            let internalFlag = true;

            while (internalFlag){
                const number = Math.ceil(Math.random() * 60);

                if(!array.includes(number)){
                    internalFlag = false;
                    array.push(number);
                    //console.log(number)
                    printBall(number);
                }
            }

            if (array.length === 6){
                clearInterval(interval);
                console.log('game over');
                resolve('ok');
            };

            console.log(array);

        }, 1000);
    })
}

function printBall (value) {
    resultDisplay.innerHTML += `
    <li class="ball">
        <p>${value}</p>
    </li>
    `;
    
}

function resetGame() {
    resultDisplay.innerHTML = "";
    lotteryNumbers = [];

}

async function startGame(){

    //get user bet and validate options
    resetGame();

    let bet = [];
    let score = 0;
    
    inputChosenNumbers.forEach(element => {
        //debugger;
        if(element.value != '' && element.value != null){
            bet.push(Number(element.value));
        }
    })

    if(bet.length < 6) {
        alert('você precisa escolher 6 números distintos entre 1 e 60');
        return;
    }

    if(new Set(bet).size !== bet.length){
        alert('você não pode selecionar números iguais em campos diferentes');
        return;
    }

    console.log(bet);
    
    await lottery(lotteryNumbers);
    console.log('agora foi');

    bet.forEach(value => {
        if(lotteryNumbers.includes(value)){
            score++;
        }
    })

    if(score === 3){
        alert('trinca!');
    }else if(score === 4){
        alert('quadra!');
    }else if(score === 5){
        alert('quina! Por que você não foi em uma casa lotérica?!');
    }else if(score === 6){
        alert('sena!!! Se mata, vai...');
    }

    console.log(score);
}