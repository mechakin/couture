import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export default async function getCategories() {
  const res = await fetch(url);
  return res.json() as Promise<Category[]>;
}
