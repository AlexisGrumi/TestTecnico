import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';

export default function PostForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch(addPost({ name, description }));
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem' }}>
      <input
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <input
        placeholder="Descripción"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ flex: 2, padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Crear</button>
    </form>
  );
}
