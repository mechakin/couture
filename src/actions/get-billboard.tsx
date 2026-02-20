import { Billboard } from "@/types";

import { fetchJson } from "@/lib/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export default async function getBillboard(id: string) {
  return fetchJson<Billboard>(`${url}/${id}`);
}
