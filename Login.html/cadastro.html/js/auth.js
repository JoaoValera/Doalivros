// js/auth.js
import { cadastrarUsuario } from './Firebase.js';

const form = document.getElementById('formCadastro');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita recarregar a página

  const email = document.getElementById('cadEmail').value;
  const senha = document.getElementById('cadSenha').value;

  cadastrarUsuario(email, senha)
    .then((userCredential) => {
      // Mostra alerta que deu certo
      alert("Usuário cadastrado com sucesso!");
      console.log(userCredential.user); // mostra no console do navegador

      form.reset(); // limpa o formulário

      // Redireciona para a página de login
      window.location.href = "../login.html"; 
    })
    .catch((error) => {
      alert("Erro: " + error.message);
      console.error(error);
    });
});



