/*

    ## Objetivo 01:
        => Quando passar o mouse em cima do personagem, temos que: 
            - Colocar a classe .selecionado no personagem que passamos o    mouse em cima, para adicionar a animação desejada nele;
            - Remover a classe .selecionado do personagem que está selecionado.

    ## Objetivo 02:
        => Quando passar o mouse em cima do personagem, queremos mudar a imagem e o nome do personagem grande, de acordo com o personagem que o mouse está em cima. 
            - Alterar imagem do personagem grande selecionado;
            - Alterar nome do personagem.



const chibiusa = document.getElementById('chibi');

// passando mouse em cima
// primeiro parâmetro é o evento
chibiusa.addEventListener('mouseenter', () => {
    // chamamos isto de callback function;

    //acessando a classe do HTML
    chibiusa.classList.add('selecionado');
});
*/

// criando lista de elementos (personagens) 

// realiza uma busca de todos os seletores que tiverem alguma característica em comum

const personagens = document.querySelectorAll('.personagem');

// iterando os personagens com o forEach
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        // valor dos atributos da TAG HTML
        const idSelecionado = personagem.attributes.id.value;
        // quando passamos o mouse em cima, ele pega o ID 

        // cláusula de guarda = guard clause;
        if (idSelecionado === 'venus') {
            return;
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        const imagemJogadorUm = document.getElementById('personagem__jogador-1');
        // trocando o SRC
        imagemJogadorUm.src = `src/Sailor Moon/${idSelecionado}.png`;

        // alterando o nome do personagem
        const nomeJogadorUm = document.getElementById('nome__jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogadorUm.innerHTML = nomeSelecionado;

    });
});

