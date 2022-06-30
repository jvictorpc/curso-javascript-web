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
 * 
 * Na própria linguagem há um recurso fornecido para trabalharmos com eventos, esse recurso tá diretamente
 * atrelada a um evento,como no caso das funçòes anonimas, por exemplo
 */

function tocaSom (seletorAudio){
    const elemento =  document.querySelector(seletorAudio);

    if (elemento !== null && elemento.localName === 'audio'){        
               elemento.play();     
    }else {
     console.log("Elemento não encontrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador < listaDeTeclas.length; contador++){
     const teclas = listaDeTeclas[contador];
     const instrumentos = teclas.classList[1];
     

     teclas.addEventListener('click', () =>{
          tocaSom(`#som_${instrumentos}`);
     })

     teclas.addEventListener('keydown', (evento) =>{
          if(evento.code === "Space" || evento.code === "Enter" ){
               teclas.classList.add('ativa');
          }
     })
     teclas.addEventListener('keyup', () =>{
          teclas.classList.remove('ativa');
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