function callback (value) {
    console.log(value);
}

function passvalue(valueToPass, functionToRecieve) {
    functionToRecieve(`Você digitou: ${valueToPass}`);
}

passvalue(prompt('digite algo'), callback);

//Variável global
let flag = true;

// 1 criar um objeto promise
//esse tipo de objeto é uma função com dois argumentos, resolve e reject
//esses determinam os retornos do objeto em caso de sucesso ou falha
//nesta sintaxe, o objeto está sendo criado ao carregar a página,
//após o que, alterar a flag não surtirá qualquer efeito
const promessa = new Promise(function(resolve, reject) {
    if(flag){
        const resolveu = {nome: 'felipe', idade:'muitos anos'};
        resolve(resolveu);
    } else{
        reject(new Error('não deu pra desempirocar'));
    }
});

// 2 usando a promessa para execução sincronizada
//pelo uso do .then(função(retorno_da_função_anterior)) nós conseguimos sincronizar a execução de
//uma função com o retorno de uma função anterior (se essa retornar uma promessa)

const emOrdem = function() {
    promessa
    .then(function(deu_certo){
        console.log(deu_certo.nome)
    })
    .catch(function(deu_errado){
        console.log(deu_errado.message)
    })
};

//se executarmos, no console, emOrdem() teremos como retorno 'felipe' caso flag seja true

//o .then opera sobre uma função assincrona, ele recebe seu output e passa para o parâmetro
//da função passada em seu argumento.
//podemos encadear multiplas funções nessa sequencia, mas todas (salvo a última) devem ter um
//retorno do tipo promise, o qual será passado para o próximo then ou, nocaso de reject, tratado pelo catch

//Async await
//é um syntatic sugar para para a sistematica de promise vista acima
//uma função marcada como async, seu valor de retorno padrão será associado ao resolve
//se ela jogar um erro, esse será associado ao reject
async function meuCarro() {
    return('up altas aventuras');
}
//essa função tem um resolve em 'up altas aventuras'

//outra forma de escrever o mesmo é:
function meuCarro2() {
    return Promise.resolve('up altas aventuras');
}

//o await é utilizado para receber retornos de promisses
//assim, utilizamos o async para determinar o retorno de uma promessa e
//o await para solicitarmos um retorno no formato de uma promessa

function temporizador(ms) {
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
            resolve(true);
        }, ms)
    });
}

temporizador(2000).then(()=>{console.log('agora sim')})
