/*
// usando var em looping - laço for

for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log("i = " ,i);
*/


//usando array
const vetor = []
for (var i = 0; i< 5; i++){
    vetor.push(function(){console.log(i)});
        console.log(i);
   }


vetor[2]();
vetor[3]();