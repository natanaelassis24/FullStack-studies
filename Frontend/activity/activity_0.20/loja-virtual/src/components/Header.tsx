import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">Loja Virtual</Link>
        </h1>
        <nav className="space-x-4" aria-label="Menu principal">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/carrinho" className="hover:underline">Carrinho</Link>
          <Link href="/contatos" className="hover:underline">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
