import { Color } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export default async function getColors() {
  const res = await fetch(url);

  return res.json() as Promise<Color[]>;
}
