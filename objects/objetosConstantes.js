// pessoa -> 123  { ... }
const pessoa = { nome: 'Joao'}
pessoa.nome = "Pedro"
console.log(pessoa);

// congelando  objeto pessoa
Object.freeze(pessoa)

pessoa.nome = "Maria"
pessoa.end = "Rua tal"
console.log(pessoa.nome)// nao  exibe nada

const pessoaConst = Object.freeze({ nome: "Joao" });
pessoaConst.nome =  "Maria";
console.log(pessoaConst);