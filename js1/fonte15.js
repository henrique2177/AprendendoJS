// escopo com let
/*
for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log("i = " ,i);
*/

//usando arrays e funcoes

const vetor = []
for (let i = 0; i < 5; i++){
    vetor.push(function(){console.log(i)});
        console.log(i);
   }


vetor[2]();
vetor[3]();