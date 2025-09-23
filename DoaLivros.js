function buscarLivro(e) {
  e.preventDefault(); // impede reload da página
  const termo = document.getElementById('campoBusca').value.toLowerCase();

  document.querySelectorAll('.card-livro').forEach(card => {
    const titulo = card.querySelector('p').textContent.toLowerCase();
    // Mostra ou esconde conforme o termo
    card.style.display = titulo.includes(termo) ? 'block' : 'none';
  });
}
