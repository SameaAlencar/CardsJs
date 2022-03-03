'use strict'

const bd = [
    {
        id: 1, 
        nome: 'Microfone Kingston', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 5,  
        preco: 77.90, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/microfone_kingston_hyperx_quadcast.png'
    },
    {
        id: 2, 
        nome: 'Monitor AOC', 
        descricao: "Monitor Gamer Curvo 240Hz Full HD 27” AOC", 
        avaliacao: 3,  
        preco: 2500, 
        parcelamento: 'ou 10x de 250 sem juros',
        imagem: './img/monitor_gamer_curvo.png'
    },
    {
        id: 3, 
        nome: 'Mouse Logitech', 
        descricao: "Mouse Sem Fio M170 Nano LOGITECH Prata", 
        avaliacao: 2,  
        preco: 350, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/mouse.png'
    },
    {
        id: 4, 
        nome: 'Teclado Gamer', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 3,  
        preco: 100.00, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/teclado-gamer-standard.png'
    },
    {
        id: 5, 
        nome: 'Mousepad Gamer', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 3,  
        preco: 100.00, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/mousepad-gamer.png'
    },
    {
        id: 6, 
        nome: 'Microfone Kingston', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 5,  
        preco: 77.90, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/microfone_kingston_hyperx_quadcast.png'
    },
    {
        id: 7, 
        nome: 'Monitor AOC', 
        descricao: "Monitor Gamer Curvo 240Hz Full HD 27” AOC", 
        avaliacao: 3,  
        preco: 2500, 
        parcelamento: 'ou 10x de 250 sem juros',
        imagem: './img/monitor_gamer_curvo.png'
    }

]

const definirAvaliacao = (valor) =>{
    const estrelaCheia = valor
    const estrela = 5 - valor

    return "&starf;".repeat(estrelaCheia) + "&star;".repeat(estrela)
    
}

const criarCard = (produtos) => {
    
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML= 
    `
    <div class="card">
    <div class="card-imagem-container">
    <img src="${produtos.imagem}" alt="Mouse" class="card-image">
    </div>
    <span class="card-descricao">
        ${produtos.descricao}
    </span>
    <span class="card-avaliacao">
       ${definirAvaliacao(produtos.avaliacao)}
    </span>
    <span class="card-preco">
        ${produtos.preco}
    </span>
    <span class="card-parcelamento">
        ${produtos.parcelamento}
    </span>
    
    `

    return card
}

const carregarProdutos = (produtos) => {
    const container = document.querySelector('.card-container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos(bd)