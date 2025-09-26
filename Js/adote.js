// Local: /Js/adote.js

// 1. Imports do Firebase e Firestore
import { db } from './Firebase.js'; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 2. Referência ao local onde os cards serão exibidos
const listaLivros = document.getElementById('listaLivros');

// 3. Inicia a função de carregamento após o HTML carregar
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
        // Em caso de erro
        listaLivros.innerHTML = '<h2>Erro ao carregar livros. Verifique o Console (F12) para detalhes.</h2>';
        console.error("Erro ao buscar documentos (VERIFIQUE AS REGRAS DO FIRESTORE!): ", error);
    }
}