/**
 * O objeto document serve como um ponto de entrada para acessar o conteúdo da página(a árvore DOM)
 *  - E também oferece algumas funções globais ao documento
 * 
 * função QuerySelector
 *  - retorna o primeiro elemento do documento que corresponde ao que foi especificado 
 * 
 */

function tocaSom (idElementoAudio){
     document.querySelector(idElementoAudio).play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


while (contador < listaDeTeclas.length){
     listaDeTeclas[contador].addEventListener('click', function (){
          tocaSom('#som_tecla_pom');
     });

     contador++;
}
