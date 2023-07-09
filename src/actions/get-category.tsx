import { Category } from "@/types";

const url =`${process.env.NEXT_PUBLIC_API_URL}/categories`;

export default async function getCategory(id: string) {
  const res = await fetch(`${url}/${id}`);

  return res.json() as Promise<Category>;
};

