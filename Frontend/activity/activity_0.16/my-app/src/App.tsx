import { useEffect, useState } from 'react';
import { Book } from './types/Book';
import { BookForm } from './components/BookForm';
import { BookList } from './components/BookList';
import { api } from './services/api';

export function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Book[]>('/');
      setBooks(response.data);
    } catch {
      setError('Erro ao carregar livros');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const addBook = async (book: Book) => {
    try {
      const response = await api.post<Book>('/', book);
      setBooks((prev) => [...prev, response.data]);
    } catch {
      alert('Erro ao adicionar livro');
    }
  };

  const deleteBook = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch {
      alert('Erro ao remover livro');
    }
  };

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      <BookForm onAdd={addBook} />
      {loading && <p>Carregando livros...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}
