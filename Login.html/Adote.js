import { db } from './Firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const lista = document.getElementById('listaLivros');

async function carregarLivros() {
  const querySnapshot = await getDocs(collection(db, 'livros'));
  querySnapshot.forEach(doc => {
    const dados = doc.data();
    const card = document.createElement('div');
    card.className = 'card-livro';
    card.innerHTML = `
      <img src="${dados.capaUrl || 'ImgLogo/ImgDoalivros2.png'}" alt="Capa do livro">
      <p>${dados.titulo}</p>
    `;
    lista.appendChild(card);
  });
}

carregarLivros();

