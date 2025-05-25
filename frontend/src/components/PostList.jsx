import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../redux/postsSlice';

export default function PostList() {
  const { list, filter } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const filtered = list.filter(post =>
    post.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', marginBottom: '2rem' }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map(post => (
          <tr key={post.id}>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td>
              <button onClick={() => dispatch(deletePost(post.id))}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
