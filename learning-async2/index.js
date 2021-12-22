// asynchronous
//setTimeout is a n asynchronous function
/*
console.log('Eu');

setTimeout (()=>{
    console.log('como');
}, 4000);

console.log('sorvete');

//callback

function one (call_two){
    console.log('um, agora vem o ...');
    call_two();
}

function two (){
    console.log('dois');
}

one(two);
*/
//example

let stocks = {
    fruits: ['morango', 'uva', 'banana', 'maçã'],
    liquid: ['água', 'gelo'],
    holder: ['casquinha', 'copo', 'palito'],
    topings: ['chocolate', 'amendoim']
}

/*
//inferno das callbacks
function order(fruit_name, call_production){
    
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} foi a fruta escolhida`);
        call_production();
    }, 2000);

};

function production () {
    setTimeout(()=>{
        console.log('inciada a produção')

        setTimeout(()=>{
            console.log('a fruta foi cortada');

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} e ${stocks.liquid[1]} foram adicionados`);

                setTimeout(()=>{
                    console.log('ligamos as máquinas');

                    setTimeout(()=>{
                        console.log(`colocado no/a ${stocks.holder[0]}`);

                        setTimeout(()=>{
                            console.log(`a cobertura de ${stocks.topings[0]} foi colocada`);

                            setTimeout(()=>{
                                console.log('o sorvete foi servido! Aproveite este inferno de callbacks!');
                            },2000)

                        },3000)

                    },2000);

                },1000)

            },1000)

        },2000)

    },0)
};

order(0, production);
*/

//PROMISSES

/*
    promisse is made
    it is PENDING
    it may finish as:
        RESOLVE -> whcich will take to a .then block on the caller
        or
        REJECT -> which will take to a .catch block on the caller
    last, on the caller, we have a .finally block
*/

let is_shop_open = true;

/*
function order2 (time, work){

    return new Promise ((resolve, reject)=>{//para uma promessa, nós temos 2 estados: resolve e reject, trataremos cada no if
        
        if(is_shop_open){
            
            setTimeout(()=>{
                resolve(work());
            },time);
            
        }
        else{
            reject(console.log('a loja está fechada'));
        }
    });

};

//primeiro pedido, para iniciar um encadeamento de .then
//não podemos ter nada entre ele e os .then (nem o ponto e virgula)
//a sintaxe é função().then(()=>{return(função())}).then(then(()=>{return(função())})).catch()
order2(2000, ()=>{console.log(`${stocks.fruits[1]}`)})

.then(()=>{
    return order2(0, ()=>console.log('a produção foi iniciada'))//em cada uma das etapas de .then, é essencial termos um return, sempre
})

.then(()=>{
    return order2(2000, ()=>console.log('a fruta foi cortada'))
})

.then(()=>{
    return order2(1000, ()=>console.log(`${stocks.liquid[0]} e ${stocks.liquid[1]} foram adicionados`))
})

.then(()=>{
    return order2(1000, ()=>console.log('ligamos as máquinas'))
})

.then(()=>{
    return order2(2000, ()=>console.log(`colocado no/a ${stocks.holder[0]}`))
})

.then(()=>{
    return order2(3000, ()=>console.log(`a cobertura de ${stocks.topings[0]} foi colocada`))
})

.then(()=>{
    return order2(1000, ()=>console.log('o sorvete foi servido! Aproveite esta cadeia de promessas'))
})

.catch(()=>{//se a variável is_shop_open for false, o primeiro chamado da order2 vai cair no else e todoso os then serão pulados até aqui
    console.log('o cliente foi embora')
})

.finally(()=>{
    console.log('fim do dia')
});
*/


//ASYNC AWAIT

/*
async function order3 () {
    try{}
    catch(error){}

    finally{

    }
}
*/

function topping_choice(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve (
                console.log('qual cobertura vocÊ vai querer, meu bom?')
            )
        },3000)
    })
};

//o await só pode ser chamado em uma função async,
//ele pressupõe que a função chamada por ele retornará um resolve ou um reject,
//o que, por sua vez, pressupões que seja uma função que retorna uma promise
//a função async, no entanto, não precisa ter qualquer promise
async function kitchen() {
    console.log('A');
    console.log('B');
    console.log('C');

    await topping_choice(); //se a função chamada não tiver um resolve, a execução para aqui

    console.log('D');
    console.log('E');
};

kitchen();

console.log('galera limpando as mesas');
console.log('povo lavando a louça');
console.log('pessoal vendendo');

function time (ms) {
    return new Promise ((resolve, reject)=>{
        
        if(is_shop_open){
            setTimeout(resolve ,ms);
        }else{
            reject(console.log('loja fechada'));
        }
        
    })
};

async function kitchen2 (){
    try{
        
        await time(2000); //estamos passando o tempo que será esperado antes de recebermo o resolve
        console.log(`${stocks.fruits[2]}`);

        await time(0);
        console.log('a produção foi iniciada');

        await time(2000);
        console.log('a fruta foi cortada');

        await time(1000);
        console.log(`${stocks.liquid[0]} e ${stocks.liquid[1]} foram adicionados`);

        await time(1000);
        console.log('ligamos as máquinas');

        await time(2000);
        console.log(`colocado no/a ${stocks.holder[0]}`);

        await time(3000);
        console.log(`a cobertura de ${stocks.topings[0]} foi colocada`);

        await time(1000);
        console.log('o sorvete foi servido! Aproveite esta cadeia de promessas');

    }

    catch(error){
        console.log('o cliente partiu', error);
    }

    finally {
        console.log('Final do expediente, cozinha fechada.')
    }
};

//kitchen2()