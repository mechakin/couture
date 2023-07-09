import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export default async function getProduct(id: string) {
  const res = await fetch(`${url}/${id}`);

  return res.json() as Promise<Product>;
}
