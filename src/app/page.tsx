import { getPosts } from '@/lib/api';
import PostList from '@/components/PostList';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Entradas desde WordPress</h1>
      <PostList posts={posts} />
    </main>
  );
}
