/// No arquivo: DOALIVROS/Js/auth.js

import { cadastrarUsuario } from './Firebase.js';

const form = document.getElementById('formCadastro');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita recarregar a página

    const email = document.getElementById('cadEmail').value;
    const senha = document.getElementById('cadSenha').value;

    cadastrarUsuario(email, senha)
        .then((userCredential) => {
            alert("Usuário cadastrado com sucesso!");
            console.log(userCredential.user);

            form.reset(); // limpa o formulário

            // Redireciona para a página de login
            // CORREÇÃO: Altera 'login.html' para 'login1.html'
            window.location.href = "../login1.html"; 
        })
        .catch((error) => {
            alert("Erro: " + error.message);
            console.error(error);
        });
});



