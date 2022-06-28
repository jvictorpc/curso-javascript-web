/**
 * O objeto document serve como um ponto de entrada para acessar o conteúdo da página(a árvore DOM)
 *  - E também oferece algumas funções globais ao documento
 * 
 * função QuerySelector
 *  - retorna o primeiro elemento do documento que corresponde ao que foi especificado 
 * 
 * Propriedade classList 
 *  - retorna uma lista dos nomes de classe de algum elemento do documento
 *  - conveniente para acessar a lista de classes de algum elemento
 * 
 * Função Anônima
 *  - São funções que não dependem de nomes, são apenas declaradas e armazenadas em uma variável
 *  - geralmente não está acessível após a sua criação 
 *  - é possível passar funções anônimas como parâmetros de outras funções   
 */

function tocaSom (idElementoAudio){
     document.querySelector(idElementoAudio).play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador < listaDeTeclas.length; contador++){
     const teclas = listaDeTeclas[contador];
     const instrumentos = teclas.classList[1];
     console.log(teclas.attributes)

     teclas.addEventListener('click', () =>{
          tocaSom(`#som_${instrumentos}`);
     })
}




/*while (contador < listaDeTeclas.length){
     const teclas = listaDeTeclas[contador];
     const instrumentos = teclas.classList[1];
     console.log(instrumentos);
     
     teclas.addEventListener('click', function () {
          tocaSom(`#som_${instrumentos}`);
     });

     contador++;
}
*/