// notacao literal
const obj1  = {}
console.log(obj1)

// Object JS
console.log(typeof Object, typeof  new Object);
const obj2 = new Object;
console.log(obj2)

// Funcoes contrutoras
function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.getPrecoDesconto  = () => {
        return preco * (1 - desc)
    }
}

const p1  = new Produto('Caneta',7.99, 0.15)
const p2  = new Produto('Lapis',2.99, 0.10)
console.log(p1,  p2)
console.log(p1.getPrecoDesconto, p2.getPrecoDesconto);

// function Factory
function criarFuncionario(nome,  salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario( ) {

            return (salarioBase  / 30) * (30 - faltas)
        }
    }
}
const f1  = criarFuncionario('John',1500.55,4)
const f2  = criarFuncionario('Doe',1356.48,0)
console.log(f1, f2)
console.log("Salario f1: " + f1.getSalario(), "Salario f1: "+ f2.getSalario())

// Uma funcao famoa retorna objetos
const fromJSON = JSON.parse('{"info": "Sou uma info"}')
console.log(fromJSON.info)