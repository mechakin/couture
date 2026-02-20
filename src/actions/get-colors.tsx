import { Color } from "@/types";

import { fetchJson } from "@/lib/api";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export default async function getColors() {
  return fetchJson<Color[]>(url);
}
