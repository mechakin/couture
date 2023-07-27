"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

export default function Summary() {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.", { id: "success" });
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.", { id: "error" });
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const totalQuantity = items.length;

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-neutral-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="flex justify-between text-lg font-semibold tracking-tight">
        Order summary <span>{totalQuantity} Item(s)</span>
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
          <div className="text-lg font-semibold tracking-tight">
            Order total
          </div>

          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="mt-6 w-full bg-black rounded-full text-base"
      >
        <span className="text-white">Checkout</span>
      </Button>
    </div>
  );
}
