import Container from "@/components/ui/container";
import getBillboard from "../../actions/get-billboard";
import Billboard from "@/components/billboard";
import getProducts from "../../actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard("08e49179-ddbe-4c71-9fdf-8b396030cd2d");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
