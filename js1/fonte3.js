// numeros com tipo number
// media ponderada

const peso1 = 2.0;
const peso2 = 3.5;

console.log(peso1 , peso2);

const prova1 = 9.4;
const prova2 = Number ("5.0"); // numeber com N maiusculo e uma function
const total = prova1 * peso1 + prova2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed sao quantas casas depois do ponto
console.log(media.toString(2)) // imprime em codigo binario
console.log(typeof media);
console.log(typeof Number);
