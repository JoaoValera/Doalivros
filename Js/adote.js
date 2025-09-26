// Local: /Js/adote.js

import { db } from './Firebase.js'; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Pegando a referência da lista de livros no HTML
const listaLivros = document.getElementById('listaLivros');

// Inicia a função de carregamento assim que o script é executado
document.addEventListener('DOMContentLoaded', carregarLivros);

async function carregarLivros() {
    // Exibe uma mensagem de carregamento inicial
    listaLivros.innerHTML = '<h2>Carregando livros disponíveis...</h2>'; 
    
    try {
        // Acessa a coleção 'livros' no Firestore
        const querySnapshot = await getDocs(collection(db, "livros"));
        
        // Limpa a lista antes de começar a adicionar os cards
        listaLivros.innerHTML = ''; 
        
        // Verifica se a coleção está vazia
        if (querySnapshot.empty) {
            listaLivros.innerHTML = '<h2>Nenhum livro disponível para adoção no momento.</h2>';
            return;
        }

        // Itera sobre cada documento (livro) encontrado
        querySnapshot.forEach((doc) => {
            const livro = doc.data(); 
            
            // Cria o elemento HTML do card
            const card = document.createElement('div');
            card.classList.add('card-livro'); 
            
            // Monta o HTML do card
            card.innerHTML = `
                <img src="../ImgLogo/ImgDoalivros2.png" alt="Capa do Livro"> 
                
                <h3>${livro.nome}</h3>
                <p>Autor: ${livro.autor}</p>
                <p class="sinopse-texto">${(livro.sinopse || '').substring(0, 100)}...</p> 
                <button class="botao">Quero Adotar</button>
            `;
            
            // Adiciona o card à lista na página
            listaLivros.appendChild(card);
        });

    } catch (error) {
        // Em caso de erro (como permissão negada), exibe uma mensagem no console e na tela
        listaLivros.innerHTML = '<h2>Erro ao carregar livros. Verifique o Console (F12) para detalhes.</h2>';
        console.error("Erro ao buscar documentos (VERIFIQUE AS REGRAS DO FIRESTORE!): ", error);
    }
}
// Remove o "carregarLivros();" que estava solto para usar o evento DOMContentLoaded