export async function fetchProducts() {
  const res = await fetch("http://127.0.0.1:5000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
}
