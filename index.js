let filmes= ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"]


function converterMaiusculas(array){
       
  for(let i=0; i < array.length; i++){
array [i] = array[i].toUpperCase();
  }
    return array
  };

 console.log(converterMaiusculas(filmes)); 


 function passagemDeElementos(array1,array2){
   for(let i =0; i< array2.length;i++){
     array1.push(array2.pop().toUpperCase())
   }
 }




let participanteA = [5,8,4,9,5]; // media = 6.2, e-tip = 9
let participanteB = [8,7,8,6,8]; //  media = 7.4, e-tip = 8 --> Vencedor por média
let participanteC =[7,5,10,8,3]; // media = 6.6, e-tip = 10 --> Vencedor por e-tip

function pontuacaoMedia(notas) {
  let soma = 0;
  for (let i = 0; i< notas.length;i++){
    soma = soma + notas [i]
  }
  return soma/notas.length;
}

console.log(pontuacaoMedia(participanteA));
console.log(pontuacaoMedia(participanteB));
console.log(pontuacaoMedia(participanteC));     



function pontuacaoMaior (notas){
  let maiorNota = 0;
  for (let i = 0; i < notas.length ;i++){
    //[5,8,4,9,5]
    //i = 0; notas [i] = 5; 5 > 0 --> sim --> maiorNota = 5;
    //i = 1; notas [i] = 8; 8 >5 --> sim --> maiorNota = 8;
if(notas [i] > maiorNota){
  maiorNota = notas[i];
}
  }

  return maiorNota;
}

// [5,8,4,9,5]
console.log(pontuacaoMaior(participanteA));
console.log(pontuacaoMaior(participanteB));
console.log(pontuacaoMaior(participanteC));



/*function competicao (participanteA,participanteB,participanteC){
  const mediaA = pontuacaoMedia (participanteA);
  const mediaB = pontuacaoMedia(participanteB);
  const mediaC = pontuacaoMedia (participanteC);

  const maiorA = pontuacaoMaior(participanteA);
  const maiorB = pontuacaoMaior(participanteB);
  const maiorC = pontuacaoMaior (participanteC);

  if (mediaA > mediaB && mediaA >mediaC){
    console.log("Participante A foi o vencedor na média");
  } else if (mediaB > mediaA && mediaB >mediaC) console.log ("Participante B foi o vencedor na médoa");
  else if (mediaC > mediaA && mediaC > mediaB) console.log("Participante C foi o vencedor na média");
}

if (maiorA > maiorB && maiorA >maiorC){
  console.log("Participante A foi o vencedor na maior nota");
 } else if (maiorB > maiorA && maiorB >maiorC) {

  console.log ("Participante B foi o vencedor na maior nota");
 } else if (maiorC > maiorA && maiorC > maiorB) {
  console.log("Participante C foi o vencedor na maior nota")};


competicao (participanteA,participanteB,participanteC); */