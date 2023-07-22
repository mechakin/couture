"use client";

import { Product } from "@/types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import IconButton from "./ui/icon-button";
import Currency from "./ui/currency";
import useCart from "@/hooks/use-cart";

type ProductCard = {
  data: Product;
};

export default function ProductCard({ data }: ProductCard) {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl"
    >
      <div className="relative aspect-[69/100] rounded-xl">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          fill
          className="rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-neutral-600" />}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="tracking-tight pb-1">{data.name}</p>

        <Currency
          value={data?.price}
          className="text-sm font-medium tracking-tight"
        />
      </div>
    </div>
  );
}
