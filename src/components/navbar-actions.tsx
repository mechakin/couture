"use client";

import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu, ShoppingBag } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type MainNavProps = {
  data: Category[];
};

export default function NavbarActions({ data }: MainNavProps) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <div className="ml-4 block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center justify-center rounded-full bg-black px-4 py-2">
              <Menu size={20} color="white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {routes.map((route) => {
              return (
                <DropdownMenuItem
                  key={route.href}
                  onClick={() => router.push(route.href)}
                  className={cn(
                    "hover:text-primary text-sm font-medium transition-colors",
                    route.active ? "text-black" : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart?.items.length}
        </span>
      </Button>
    </div>
  );
}
