import { getArtigoBySlug, getArtigos } from '@/lib/artigos';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const artigos = await getArtigos();
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: Props) {
  const artigo = await getArtigoBySlug(params.slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
      description: 'Este artigo não foi encontrado',
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.conteudo.substring(0, 150),
  };
}

export default async function ArtigoPage({ params }: Props) {
  const artigo = await getArtigoBySlug(params.slug);

  if (!artigo) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-4xl font-bold mb-4">{artigo.titulo}</h1>
      <p className="text-gray-600 mb-6">
        Por {artigo.autor} — {new Date(artigo.data).toLocaleDateString('pt-BR')}
      </p>
      <div className="prose prose-lg">{artigo.conteudo}</div>
    </article>
  );
}
