import { Book } from '../types/Book';

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
}

export function BookItem({ book, onDelete }: BookItemProps) {
  return (
    <li>
      <strong>{book.title}</strong> - {book.author} ({book.status})
      {book._id && (
        <button onClick={() => onDelete(book._id!)}>Remover</button>
      )}
    </li>
  );
}
