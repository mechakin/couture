import { type Category } from "@/types";

import { fetchJson } from "@/lib/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export default async function getCategory(id: string) {
  return fetchJson<Category>(`${url}/${id}`);
}
