import { cn } from "@/lib/utils";
import { Product } from "@/types";
import ProductCard from "./product-card";
import NoResults from "./ui/no-results";

type ProductListProps = {
  title: string;
  items: Product[];
  className?: string;
};

export default function ProductList({
  title,
  items,
  className,
}: ProductListProps) {
  return (
    <div className={cn("space-y-4 text-center font-semibold", className)}>
      <h3 className="pb-10 text-3xl tracking-tight">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
