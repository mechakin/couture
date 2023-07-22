"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import Summary from "./components/summary";
import CartItem from "./components/cart-item";

export const revalidate = 0;

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Container>
      <div className="px-8 py-6">
        <h1 className="text-3xl font-bold text-black tracking-tight pb-6">Shopping Cart</h1>
        <div className="mt-4 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && (
              <p className="text-neutral-500">No items added to cart.</p>
            )}
            <ul>
              {cart.items.map((item, index) => (
                <CartItem
                  key={item.id}
                  data={item}
                  className={`${
                    index === cart.items.length - 1 ? "" : "border-b"
                  }`}
                />
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  );
}
