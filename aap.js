function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container'); 
    let catao = document.createElement('article'); 
    catao.className = 'cartao';

    catao.innerHTML = `
     <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergnta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${resposta}</p>
                    </div>
                </div>
    `
    container.appendChild(cartao);
}