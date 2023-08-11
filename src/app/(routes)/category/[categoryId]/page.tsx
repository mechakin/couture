import ProductCard from "@/components/product-card";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";

import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="py-16 pb-24 text-center text-4xl font-semibold tracking-tight">
          {category.name}
        </h1>

        <MobileFilters sizes={sizes} colors={colors} />

        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {products.length === 0 && <NoResults />}

          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
