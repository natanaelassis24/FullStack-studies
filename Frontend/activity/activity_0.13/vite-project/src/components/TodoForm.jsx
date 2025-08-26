import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

export const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodoContext();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), text, completed: false },
    });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};
