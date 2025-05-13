'use client';

export default function PostList({ posts }: { posts: any[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </li>
      ))}
    </ul>
  );
}
