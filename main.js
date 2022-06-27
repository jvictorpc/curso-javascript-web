/**
 * O objeto document serve como um ponto de entrada para acessar o conteúdo da página(a árvore DOM)
 *  - E também oferece algumas funções globais ao documento
 * 
 * função QuerySelector
 *  - retorna o primeiro elemento do documento que corresponde ao que foi especificado 
 * 
 */

function tocaSomPom (){
     document.querySelector('#som_tecla_pom').play();
}
let teclaPom = document.querySelector('.tecla_pom');

teclaPom.addEventListener('click', tocaSomPom);


