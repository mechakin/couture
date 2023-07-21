"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

type InfoProps = {
  data: Product;
};

export default function Info({ data }: InfoProps) {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        {data.name}
      </h1>
      <div className="mt-3">
        <div className="text-2xl tracking-tight text-gray-900">
          <Currency value={data?.price} className="font-normal" />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3>{data?.color.name}</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
      <div className="flex justify-center">
        <p className="max-w-md pt-8 text-center">{data?.description}</p>
      </div>
    </div>
  );
}
