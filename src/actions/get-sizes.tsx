import { Size } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export default async function getSizes() {
  const res = await fetch(url);

  return res.json() as Promise<Size[]>;
}
