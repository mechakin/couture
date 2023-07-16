import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./product-card";

type ProductListProps = {
  title: string;
  items: Product[];
};

export default function ProductList({ title, items }: ProductListProps) {
  return (
    <div className="space-y-4 text-center">
      <h3 className="pb-10 text-3xl font-bold tracking-tight">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
