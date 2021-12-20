// GLOBAL VARIABLES
let lotteryIntervalId; //armazena o id do interval
let lotteryNumbers = []; //array para os valores sorteados

// ELEMENTS
const resultDisplay = document.getElementById('ballsDisplay');

const inputChosenNumbers = document.querySelectorAll('.selectedNumber');

const buttonStartGame = document.getElementById('play');

// EVENT LISTENERS
buttonStartGame.addEventListener('click', startGame);

//FUNCTIONS
function getNumber(array){
    let flag = true;

    while (flag){
        const number = Math.ceil(Math.random() * 60);

        if(!array.includes(number)){
            flag = false;
            array.push(number);
            //console.log(number)
            printBall(number);
        }
    }

    if (array.length == 6){
        clearInterval(lotteryIntervalId);
        lotteryIntervalId = null;
    };

    console.log(array);
}

function lottery () {

    lotteryIntervalId = setInterval(getNumber, 1000, lotteryNumbers); //atribui o id do intervalo à variável, para poder desativar, depois

}

function printBall (value) {
    resultDisplay.innerHTML += `
    <li class="ball">
        <p>${value}</p>
    </li>
    `;
    
}

function startGame() {
    //debugger;
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

    //O bloco do bet.foreach precisa ser sincrinizado para ser executado apenas após o fim da função lotery
    lottery ();

    bet.forEach(value => {
        if(lotteryNumbers.includes(value)){
            score++;
        }
    })

    console.log(score);


}

function resetGame() {
    resultDisplay.innerHTML = "";
    lotteryNumbers = [];

}