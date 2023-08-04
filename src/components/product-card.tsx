"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Currency from "./ui/currency";

type ProductCard = {
  data: Product;
};

export default function ProductCard({ data }: ProductCard) {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl font-semibold"
    >
      <div className="relative aspect-[69/100] rounded-xl">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="text-center">
        <p className="pb-1 tracking-tight">{data.name}</p>

        <Currency
          value={data?.price}
          className="text-sm font-medium tracking-tight"
        />
      </div>
    </div>
  );
}
