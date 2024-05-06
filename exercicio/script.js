const Fila = (_localSaida) => {
    let localSaida = _localSaida;
    let dados = [];
    const tamanho = () => dados.length;
    const estaVazia = () => dados.length < 1;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const desenfileirar = () => {
        dados.splice(0,1);
        imprimir();
    }
    const imprimir = () => {
        console.log(dados);
        dadoSaida = "";
        for(let i = 0; i < tamanho(); i++){
            dadoSaida += dados[i].id + "(" + dados[i].itens + ") ";
        }
        document.getElementById(localSaida).innerHTML = dadoSaida;
    }
    return {
        enfileirar, desenfileirar
    }
}

const filaGeral = Fila('saidaFilaGeral');

const Cliente = (_id,_itens) => {
    return {
        id: _id,
        itens: _itens
    }
}

const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
const tamanhoInicialFila = 15;
(function(){
    for(let i = 1; i <= tamanhoInicialFila; i++){
        filaGeral.enfileirar(Cliente("P" + i, gerarItens()));
    }
})();


