// arrays

const valores = [7.0, 8.5, 9.3, 2.5];

console.log(valores);
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = "texto";
console.log(valores);
console.log(valores.length);

valores.push({id: 3 }, false, "teste" , null);
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);
console.log(typeof valores);