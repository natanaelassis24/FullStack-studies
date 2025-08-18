const apiUrl = 'https://crudcrud.com/api/37e5331553564acca6f144f2933ba743/clientes';
const form = document.getElementById('clienteForm');
const lista = document.getElementById('listaClientes');

// Carrega clientes ao iniciar
window.addEventListener('DOMContentLoaded', carregarClientes);

// Cadastrar cliente
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email })
    });
    const cliente = await res.json();
    adicionarClienteNaTela(cliente);
    form.reset();
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
  }
});

// Listar clientes
async function carregarClientes() {
  try {
    const res = await fetch(apiUrl);
    const clientes = await res.json();
    lista.innerHTML = '';
    clientes.forEach(adicionarClienteNaTela);
  } catch (error) {
    console.error('Erro ao carregar clientes:', error);
  }
}

// Adicionar cliente na tela
function adicionarClienteNaTela(cliente) {
  const li = document.createElement('li');
  li.textContent = `${cliente.nome} - ${cliente.email} `;
  
  const btnExcluir = document.createElement('button');
  btnExcluir.textContent = 'Excluir';
  btnExcluir.onclick = () => excluirCliente(cliente._id, li);

  li.appendChild(btnExcluir);
  lista.appendChild(li);
}

// Excluir cliente
async function excluirCliente(id, elemento) {
  try {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    lista.removeChild(elemento);
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
  }
}
