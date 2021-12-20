let lotteryInterval; //armazena o id do interval
let lotteryNumbers = []; //array para os valores sorteados

function getNumber(array){
    
    const number = Math.ceil(Math.random() * 60);
    //console.log(number);
    

    array.push(number);

    if (array.length == 6){
        clearInterval(lotteryInterval);
        lotteryInterval = null;
    };

    console.log(array);
}

function lottery () {

    lotteryInterval = setInterval(getNumber, 1000, lotteryNumbers); //atribui o id do intervalo à variável, para poder desativar, depois

}