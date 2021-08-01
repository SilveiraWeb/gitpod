const sequencia = {
    _valor: 1,// convecao simullando propriedade privada
    get valor(){ return this._valor++ },
    set valor(valor){
        if(valor > this._valor) {// validando
            this._valor = valor 
        }

    }
}
console.log(typeof sequencia);
console.log(sequencia.valor, sequencia.valor)

sequencia._valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);

