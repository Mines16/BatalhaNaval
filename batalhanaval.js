var posicaoAleatoria = 1 + Math.floor(Math.random() * 5); /* esta linha significa que o computador procura uma posição que tenha no mínimo 5 lugares vazios ao lado*/ 

/*as 4 linhas seguintes são o código que o computador usa para escolher o valor inicial e daí escolher os outros 3*/

var parte1 = posicaoAleatoria;
var parte2 = parte1+1;
var parte3 = parte2 +1;
var parte4 = parte3 +1;


var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;


while (foiAfundado == false) { /* aqui cria-se um loop, ou seja, enquanto o valor que colocármos não for o valor onde está o barco, o jogo volta a pedir valores */

   jogada = prompt("Vamos jogar! - Escolhe um numero entre 1 e 10:");

   if (jogada < 1 || jogada > 10) { /*estas são as jogadas que não são aceites*/

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3 || jogada == parte4) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 4) { /*se o jogador acertar as quatro peças do barco corta o loop criado na linha 18 e ganha o jogo*/

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);