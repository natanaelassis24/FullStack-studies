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
      <button class="remove" onclick="removeEntry(${index})">Remover</button>
    `;
    entriesList.appendChild(li);
  });
}

function removeEntry(index) {
  entries.splice(index, 1);
  saveEntries();
  renderEntries();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const description = document.getElementById('description').value;

  entries.push({ title, date, description });
  saveEntries();
  renderEntries();
  form.reset();
});

window.addEventListener('load', () => {
  renderEntries();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }

  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Você pode exibir um botão para permitir o usuário instalar manualmente
  });
});
