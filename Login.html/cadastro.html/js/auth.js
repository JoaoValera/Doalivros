// Validação de senha: minúscula, maiúscula, número, caractere especial
const regraSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$/;

document.getElementById('formCadastro')?.addEventListener('submit', e => {
  const senha = document.getElementById('cadSenha').value;
  if (!regraSenha.test(senha)) {
    e.preventDefault();
    alert('A senha deve ter:\n• Pelo menos 8 caracteres\n• Uma letra maiúscula\n• Uma letra minúscula\n• Um número\n• Um caractere especial');
  } else {
    // Aqui você enviaria para sua API / Firebase
    alert('Cadastro realizado (simulação)');
  }
});

document.getElementById('formLogin')?.addEventListener('submit', e => {
  e.preventDefault();
  // Aqui você chamaria a API ou Firebase para validar login
  alert('Login realizado (simulação)');
});


