const prompt = require('prompt-sync')()

let consumidores = {}

while(true){

    console.log("\\----- MENU -----/")
    console.log("1-> Adicionar Consumidor")
    console.log("2-> Verificar Consumidor")
    console.log("3-> Listar Consumidores")
    console.log("4-> Remover Consumidor")
    console.log("5-> Sair")

    let menu = parseInt(prompt("Insira a opcao escolhida: "));

    switch(menu){
        case 1:
            adicionarConsumidor()
            break;
        case 2:
            verificarConsumidor()
            break;
        case 3:
            listarConsumidores()
            break;
        case 4:
            removerConsumidor()
            break;
        default:
            process.exit()
            break;
    }
}


function adicionarConsumidor(){
    let consumidor = criarConsumidor()
    let id = consumidor.numeroMedidor + consumidor.mes
    consumidores[id] = consumidor;
}


function criarConsumidor(){

    let numeroMedidor = parseInt(prompt("Insira o numero do medidor de consumo: "))
    let nomeResponsavel = prompt("Insira o nome do responsavel pelo medidor: ")
    let mes = prompt("Insira o nome do mes a ser calculado: ")
    let volume = parseFloat(prompt("Insira o volume consumido no mes de " + mes + ": "))

    let preco = calcularPreco(volume)

    return {
        numeroMedidor: numeroMedidor,
        nomeResponsavel: nomeResponsavel,
        mes: mes,
        volume: volume,
        preco: preco
    }
}

function verificarConsumidor(){

    let numeroMedidor = prompt("Insira o numero do medidor: ")
    let mes = prompt("Insira o nome do mes a ser verificado: ")

    let id = numeroMedidor + mes

    try{
        let consumidor = consumidores[id]

        console.log("Numero Medidor: " + consumidor.numeroMedidor)
        console.log("Nome Responsavel: " + consumidor.nomeResponsavel)
        console.log("Mes: " + consumidor.mes)
        console.log("Volume: " + consumidor.volume + " m³")
        console.log("Preco: R$ " + consumidor.preco)
    }catch{
        console.log("ERRO 404: Numero medidor ou mes nao registrado.")
    }

}

function listarConsumidores(){
    
    for(let consumidor in consumidores){
        if (Object.prototype.hasOwnProperty.call(consumidores, consumidor)) {
            console.log(`Numero medidor: ${consumidores[consumidor].numeroMedidor} | Mes: ${consumidores[consumidor].mes}`)
        }
    }
}

function removerConsumidor(){
    
    let numeroMedidor = prompt("Insira o numero do medidor a ser removido: ")
    let mes = prompt("Insira o nome do mes a ser removido: ")

    let id = numeroMedidor + mes

    try{
        delete consumidores[id]
        console.log("Consumidor removido com sucesso!")
    }catch{
        console.log("Consumidor nao encontrado!")
    }

}

function calcularPreco(volume){

    let preco

    if(volume < 21){
        preco = volume * 1.6
    }
    else if(volume <= 50){
        preco = volume * 2.8
    }
    else{
        preco = volume * 4.2
    }

    if(preco < 100){
        preco = preco * 0.95
    }
    else if(preco > 200){
        preco = preco * 1.1
    }

    return preco
}
