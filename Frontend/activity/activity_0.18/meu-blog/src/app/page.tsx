import Link from 'next/link';
import { getArtigos } from '@/lib/artigos';

export default async function HomePage() {
  const artigos = await getArtigos();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <ul className="space-y-6">
        {artigos.map((artigo) => (
          <li key={artigo.id} className="border-b pb-4">
            <Link href={`/artigos/${artigo.slug}`} className="text-xl text-blue-600 hover:underline">
              {artigo.titulo}
            </Link>
            <p className="text-gray-500 text-sm">
              {artigo.autor} — {new Date(artigo.data).toLocaleDateString('pt-BR')}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
