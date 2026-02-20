import { type Product } from "@/types";
import qs from "query-string";

import { fetchJson } from "@/lib/api";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export default async function getProducts(query: Query) {
  const url = qs.stringifyUrl({
    url: baseUrl,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  try {
    return await fetchJson<Product[]>(url);
  } catch {
    return [];
  }
}
