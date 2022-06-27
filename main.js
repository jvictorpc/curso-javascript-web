/**
 * O objeto document serve como um ponto de entrada para acessar o conteúdo da página(a árvore DOM)
 *  - E também oferece algumas funções globais ao documento
 * 
 * função QuerySelector
 *  - retorna o primeiro elemento do documento que corresponde ao que foi especificado 
 * 
 */

function tocaSom (som){
     document.querySelector('#som_tecla_pom').play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('audio');
console.log(listaDeSons)