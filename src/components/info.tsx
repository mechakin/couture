"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        {data.name}
      </h1>
      <div className="mt-4">
        <div className="text-2xl tracking-tight text-neutral-900">
          <Currency value={data?.price} className="font-normal" />
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex justify-center">
          <p className="max-w-md text-center">{data?.description}</p>
        </div>
        <div className="-mt-4 flex items-center gap-x-4 pt-4">
          <h3 className="text-black">{data?.color.name}</h3>
          <div
            className="h-6 w-6 rounded-full border border-neutral-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>

        <div className="my-2 flex items-center gap-x-4">
          <Select>
            <SelectTrigger className="w-36 rounded-full bg-neutral-100 font-medium text-black">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-100 text-black">
              <SelectItem value={data?.size?.name}>
                {data?.size?.name}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 rounded-full bg-black"
        >
          <span className="text-white">Add To Cart</span>
          <ShoppingCart size={20} color="white" />
        </Button>
      </div>
    </div>
  );
}
