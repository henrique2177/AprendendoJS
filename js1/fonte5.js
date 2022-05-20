//Strings

const escola = "senac";
console.log(escola.charAt(3));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));
console.log(escola.substring(1));
console.log(escola.substring(0,3));

//aceita o . eo + como metodo de concatenação
console.log("estudo no " .concat(escola).concat(" todo dia"));
console.log("estudo no " + escola);

console.log(escola.replace(3 , 'e'));
console.log("ana, mariana , joana " .split(","));