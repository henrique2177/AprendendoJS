// destructuring
// recurso novo ES 2015

const pessoa = {
    nome: "Paulo",
    idade: 25,
    endereco: {
        rua: "SQP 12",
        casa: 15
    }
}

// sinal de = não e de atribuição, ele indica a funçao destructuring
const {nome, idade} = pessoa;
console.log(nome, idade);