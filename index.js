/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */


function saldoVitorias(vitorias, derrotas) {
    return vitorias + derrotas;
  }
  
  let resultado = saldoVitorias(220, 5); 
  //console.log("O saldo de vitorias é : " + resultado); 

  let nivel = resultado

  if (nivel <= 10){
    console.log("O Herói tem saldo " + resultado + " e está no nível Ferro")
  }
  else if (nivel > 11 && nivel <=20){
    console.log("O Herói tem saldo " + resultado + " e está no nível Bronze")
  }
  else if (nivel > 21 && nivel <=50){
    console.log("O Herói tem saldo " + resultado + " e está no nível Prata")
  }
  else if (nivel > 51 && nivel <=80){
    console.log("O Herói tem saldo " + resultado + " e está no nível Ouro")
  }
  else if (nivel > 81 && nivel <=90){
    console.log("O Herói tem saldo " + resultado + " e está no nível Diamante")
  }
  else if (nivel > 91 && nivel <=100){
    console.log("O Herói tem saldo " + resultado + " e está no nível Lendário")
  }
  else {
    console.log("O Herói tem saldo " + resultado + " e está no nível Lendário")
  }

