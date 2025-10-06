import path from 'path';
import fs from 'fs/promises';

export interface Artigo {
  id: string;
  titulo: string;
  autor: string;
  data: string;
  conteudo: string;
  slug: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export async function getArtigos(): Promise<Artigo[]> {
  const filePath = path.join(process.cwd(), 'data', 'artigos.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const artigosRaw = JSON.parse(jsonData);

  return artigosRaw.map((artigo: any) => ({
    ...artigo,
    slug: slugify(artigo.titulo),
  }));
}

export async function getArtigoBySlug(slug: string): Promise<Artigo | undefined> {
  const artigos = await getArtigos();
  return artigos.find((artigo) => artigo.slug === slug);
}
