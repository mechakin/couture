import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export default async function getBillboard(id: string) {
  const res = await fetch(`${url}/${id}`);

  return res.json() as Promise<Billboard>;
}
