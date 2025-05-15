// src/app/posts/page.tsx
import Link from 'next/link';
import { getPosts } from '@/lib/api';

export default async function PostsPage() {
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
}
