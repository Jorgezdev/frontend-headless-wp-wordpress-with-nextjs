import Link from 'next/link';
import { getPosts } from '@/lib/api';

export default async function PostsPage() {
  try {
    const posts = await getPosts();

    return (
      <main style={{ padding: '2rem' }}>
        <h1>Entradas desde WordPress</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id} style={{ marginBottom: '1rem' }}>
              <Link href={`/post/${post.slug}`}>
                <h2 style={{ color: '#0070f3', cursor: 'pointer' }}>
                  {post.title.rendered}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    console.error("Error al cargar la página:", error);
    return (
      <main style={{ padding: '2rem', color: 'red' }}>
        <h1>Error al cargar las entradas</h1>
        <p>Por favor verifica que WordPress esté activo o intenta más tarde.</p>
      </main>
    );
  }
}

