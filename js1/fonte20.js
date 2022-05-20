// notação ponto
const obj1 = {}
obj1.nome = "teste";
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('execute');
    }
}

const obj2 = new Obj('mesa');
const obj3 = new Obj('cadeira');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec()
