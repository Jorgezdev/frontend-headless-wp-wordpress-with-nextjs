// src/lib/api.js
export async function getPosts() {
  const res = await fetch("http://localhost/web2/wp-json/wp/v2/posts");
  if (!res.ok) throw new Error("No se pudieron obtener los posts");
  return res.json();
}
