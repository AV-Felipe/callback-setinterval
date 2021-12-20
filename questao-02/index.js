let lotteryIntervalId; //armazena o id do interval
let lotteryNumbers = []; //array para os valores sorteados

function getNumber(array){
    let flag = true;

    while (flag){
        const number = Math.ceil(Math.random() * 60);

        if(!array.includes(number)){
            flag = false;
            array.push(number);
            //console.log(number)
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