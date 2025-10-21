export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Sobre a loja */}
        <div className="md:flex-1">
          <h3 className="text-lg font-semibold mb-3">Loja Virtual</h3>
          <p className="text-sm">
            A melhor loja online para seus produtos favoritos. Qualidade e preço justo, sempre pensando em você.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="md:flex-1">
          <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Início</a></li>
            <li><a href="/carrinho" className="hover:underline">Carrinho</a></li>
            <li><a href="/contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="md:flex-1">
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <p className="text-sm">Telefone: (11) 1234-5678</p>
          <p className="text-sm">Email: contato@lojavirtual.com</p>
          <p className="text-sm">Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-6">
        © {new Date().getFullYear()} Loja Virtual. Todos os direitos reservados.
      </div>
    </footer>
  );
}
