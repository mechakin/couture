import { Product } from "@/types";

import { fetchJson } from "@/lib/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export default async function getProduct(id: string) {
  return fetchJson<Product>(`${url}/${id}`);
}
