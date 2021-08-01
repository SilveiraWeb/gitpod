const a = 1
const b = 2
const c = 3

const obj1  = { a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(a, b, c, obj1, obj2);

const nomeAttr = 'nota'
const valorAttr = 5.68

const obj3  = {}
obj3[nomeAttr]  = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4)

const obj5 = {
    funcao1: function(){// funcao tradicional js
        // ...
    },
    funcao2(){//  versao nova JS
		// ...
	}
}
console.log(obj5)