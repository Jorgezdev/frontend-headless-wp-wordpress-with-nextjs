export async function getPosts() {
  const res = await fetch("http://localhost/web2/wp-json/wp/v2/posts");
  if (!res.ok) throw new Error("No se pudieron obtener los posts");
  return res.json();
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `http://localhost/web2/wp-json/wp/v2/posts?slug=${slug}`
  );
  if (!res.ok) return null;

  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function getPageBySlug(slug) {
  const res = await fetch(
    `http://localhost/web2/wp-json/wp/v2/pages?slug=${slug}`
  );
  if (!res.ok) return null;

  const pages = await res.json();
  return pages.length > 0 ? pages[0] : null;
}
