function callback (value) {
    console.log(value);
}

function passvalue(valueToPass, functionToRecieve) {
    functionToRecieve(`Você digitou: ${valueToPass}`);
}

passvalue(prompt('digite algo'), callback);