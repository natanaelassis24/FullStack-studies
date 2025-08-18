document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("[data-pagina]");
  const conteudo = document.getElementById("conteudo");

  function carregarPagina(pagina) {
    if (pagina === "home") {
      // Volta ao conteúdo original da home
      conteudo.innerHTML = `
        <section class="home">
          <h2>Bem-vindo à Agência Criativa Web</h2>
          <p>Transformamos ideias em experiências digitais incríveis!</p>
        </section>
      `;
      return;
    }

    fetch(`paginas/${pagina}.html`)
      .then(res => res.text())
      .then(html => {
        conteudo.innerHTML = html;
      })
      .catch(() => {
        conteudo.innerHTML = "<p>Erro ao carregar a página.</p>";
      });
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = link.getAttribute("data-pagina");
      carregarPagina(pagina);
    });
  });
});
