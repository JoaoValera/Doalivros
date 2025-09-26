  // No arquivo: DOALIVROS/Js/login.js

  import { auth } from './Firebase.js';
  import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

  const formLogin = document.getElementById('formLogin');

  formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const senha = document.getElementById('loginSenha').value;

      signInWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
              alert("Login realizado com sucesso!");
              console.log(userCredential.user);

              // CORREÇÃO: Sobe 1 nível (../) da pasta Js/ para a raiz
              window.location.href = "../index.html"; 
          })
          .catch((error) => {
              alert("Erro no login: " + error.message);
              console.error(error);
          });
  });
