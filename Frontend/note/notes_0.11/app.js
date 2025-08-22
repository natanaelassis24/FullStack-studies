const app = document.getElementById('app');

// Definição das rotas e seus respectivos conteúdos
const rotas = {
    '/': `
      <h2>Bem-vindo à página inicial!</h2>
      <p>Esta é uma aplicação SPA sem React, utilizando apenas JavaScript.</p>
    `,
    'servicos': `
      <h2>Serviços</h2>
      <p>Esta página explica sobre nossos serviços.</p>
    `,
    'contact': `
      <h2>Fale Conosco</h2>
      <p>Entre em contato pelo formulário ou redes sociais.</p>
    `
};

// Função para navegar entre as rotas
function navegar() {
    const hash = location.hash.replace('#', '') || '/'; // Pega o valor da hash ou '/' como padrão
    const conteudo = rotas[hash]; // Busca o conteúdo correspondente à rota

    if (conteudo) {
        app.innerHTML = conteudo;
    } else {
        app.innerHTML = `<h2>Página não encontrada</h2>`;
    }
}

// Escutando mudanças na rota
window.addEventListener('load', navegar);
window.addEventListener('hashchange', navegar);
