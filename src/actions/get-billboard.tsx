import { type Billboard } from "@/types";

import { fetchJson } from "@/lib/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export default async function getBillboard(id: string): Promise<Billboard | null> {
  try {
    return await fetchJson<Billboard>(`${url}/${id}`);
  } catch {
    return null;
  }
}
