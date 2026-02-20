import { Size } from "@/types";

import { fetchJson } from "@/lib/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export default async function getSizes() {
  return fetchJson<Size[]>(url);
}
