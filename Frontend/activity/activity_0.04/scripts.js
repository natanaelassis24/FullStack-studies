document.addEventListener('DOMContentLoaded', () => {
  aplicarTemaSalvo();
  configurarCadastroEndereco();

  const botaoTema = document.getElementById('theme-toggle');
  if (botaoTema) {
    botaoTema.addEventListener('click', alternarTema);
  }
});

function configurarCadastroEndereco() {
  restaurarEndereco();

  const campos = ['cep', 'endereco', 'bairro', 'cidade', 'estado'];
  campos.forEach(id => {
    document.getElementById(id).addEventListener('input', verificarESalvarEndereco);
  });

  const cepInput = document.getElementById('cep');
  cepInput.addEventListener('input', () => {
    const cep = cepInput.value.trim();

    if (cep.length === 8) {
      if (!/^\d{8}$/.test(cep)) {
        alert("O CEP deve conter apenas números.");
        return;
      }
      preencherEndereco(cep);
    } else {
      limparEndereco();
      localStorage.removeItem('dadosEndereco');
    }

    if (cep.length > 8) {
      alert("O CEP deve ter exatamente 8 dígitos.");
      cepInput.value = cep.slice(0, 8);
    }
  });
}

function preencherEndereco(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      if (data.erro) {
        alert("CEP não encontrado.");
        limparEndereco();
        return;
      }

      document.getElementById('endereco').value = data.logradouro || '';
      document.getElementById('bairro').value = data.bairro || '';
      document.getElementById('cidade').value = data.localidade || '';
      document.getElementById('estado').value = data.uf || '';

      verificarESalvarEndereco();
    })
    .catch(() => {
      alert("Erro ao buscar o endereço.");
      limparEndereco();
    });
}

function verificarESalvarEndereco() {
  const cep = document.getElementById('cep').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();

  if (cep && endereco && bairro && cidade && estado) {
    const dados = { cep, endereco, bairro, cidade, estado };
    localStorage.setItem('dadosEndereco', JSON.stringify(dados));
    console.log("Endereço salvo automaticamente.");
  }
}

function restaurarEndereco() {
  const dados = JSON.parse(localStorage.getItem('dadosEndereco'));
  if (dados) {
    document.getElementById('cep').value = dados.cep || '';
    document.getElementById('endereco').value = dados.endereco || '';
    document.getElementById('bairro').value = dados.bairro || '';
    document.getElementById('cidade').value = dados.cidade || '';
    document.getElementById('estado').value = dados.estado || '';
  }
}

function limparEndereco() {
  document.getElementById('endereco').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
}

function alternarTema() {
  const body = document.body;
  const isEscuro = body.classList.toggle('dark-theme');
  localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro');
}

function aplicarTemaSalvo() {
  const tema = localStorage.getItem('tema');
  if (tema === 'escuro') {
    document.body.classList.add('dark-theme');
  }
}
