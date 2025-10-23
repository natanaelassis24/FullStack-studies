const form = document.getElementById('entry-form');
const entriesList = document.getElementById('entries-list');

let entries = JSON.parse(localStorage.getItem('entries')) || [];

function saveEntries() {
  localStorage.setItem('entries', JSON.stringify(entries));
}

function renderEntries() {
  entriesList.innerHTML = '';
  entries.forEach((entry, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${entry.title}</strong> (${entry.date})<br/>
      <p>${entry.description}</p>
      <button class="remove" data-index="${index}">Remover</button>
    `;
    entriesList.appendChild(li);
  });

  // Delegação de evento para os botões "Remover"
  entriesList.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', (e) => {
      const idx = e.target.getAttribute('data-index');
      removeEntry(parseInt(idx));
    });
  });
}

function removeEntry(index) {
  entries.splice(index, 1);
  saveEntries();
  renderEntries();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const date = document.getElementById('date').value;
  const description = document.getElementById('description').value.trim();

  if (!title || !date) {
    alert('Por favor, preencha o título e a data.');
    return;
  }

  entries.push({ title, date, description });
  saveEntries();
  renderEntries();
  form.reset();
});

window.addEventListener('load', () => {
  renderEntries();

  // ✅ Registro do Service Worker com caminho absoluto
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('✅ Service Worker registrado com sucesso.'))
      .catch(err => console.error('❌ Erro ao registrar Service Worker:', err));
  }

  let deferredPrompt;
  const installBtn = document.getElementById('btn-install');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block'; // mostra o botão quando o evento dispara

    installBtn.addEventListener('click', () => {
      installBtn.style.display = 'none';  // esconde o botão após clique
      deferredPrompt.prompt();            // exibe o prompt de instalação

      deferredPrompt.userChoice.then((choiceResult) => {
        deferredPrompt = null;            // reseta o prompt
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação.');
        } else {
          console.log('Usuário rejeitou a instalação.');
        }
      });
    });
  });
});
