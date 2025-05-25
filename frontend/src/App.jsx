import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setFilter } from './redux/postsSlice';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleFilter = (term) => {
    dispatch(setFilter(term));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Posts</h1>
      <PostFilter onFilter={handleFilter} />
      <PostList />
      <PostForm />
    </div>
  );
}
