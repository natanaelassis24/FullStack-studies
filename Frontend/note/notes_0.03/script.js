const botaoTema = document.getElementById('botaoTema');
const body = document.body;

// Aplica tema salvo
if (localStorage.getItem('tema') === 'escuro') {
  body.classList.add('tema-escuro');
}

// Alterna tema ao clicar
botaoTema.addEventListener('click', () => {
  body.classList.toggle('tema-escuro');
  const temaAtual = body.classList.contains('tema-escuro') ? 'escuro' : 'claro';
  localStorage.setItem('tema', temaAtual);
});
