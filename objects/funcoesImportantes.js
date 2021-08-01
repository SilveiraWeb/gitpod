const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 3

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`);

})

// desestruturando
Object.entries(pessoa).forEach((chave, valor) => {
    console.log(`${chave}:${valor}`);

})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/05/2000'
});
pessoa.dataNascimento  = '05/05/5545'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));
