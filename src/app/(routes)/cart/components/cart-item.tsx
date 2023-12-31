import { X } from "lucide-react";
import Image from "next/image";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { CartProduct } from "@/types";

type CartItemProps = {
  data: CartProduct;
  className?: string;
};

export default function CartItem({ data, className }: CartItemProps) {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id, data.selectedSize.id);
  };

  return (
    <li className={cn("flex pb-8", className)}>
      <div className="relative h-32 w-32 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-top"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        <div>
          <p className="text-lg font-semibold tracking-tight">{data.name}</p>
          <p className="pt-2 font-medium tracking-tight">
            Color: <span className="ml-1">{data.color.name}</span>
          </p>
          <p className="pb-1 font-medium tracking-tight">
            Size: <span className="ml-1">{data?.selectedSize?.name}</span>
          </p>
        </div>

        <Currency value={data.price} />
      </div>
    </li>
  );
}
