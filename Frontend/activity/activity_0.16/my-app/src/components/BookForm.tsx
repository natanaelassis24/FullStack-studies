import { useState } from 'react';
import { Book } from '../types/Book';

interface BookFormProps {
  onAdd: (book: Book) => void;
}

export function BookForm({ onAdd }: BookFormProps) {
  const [form, setForm] = useState<Book>({
    title: '',
    author: '',
    status: 'Não lido',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: '', author: '', status: 'Não lido' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Autor"
        value={form.author}
        onChange={handleChange}
        required
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Lido">Lido</option>
        <option value="Não lido">Não lido</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}
