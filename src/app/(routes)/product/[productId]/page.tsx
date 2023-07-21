import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";

export const revalidate = 0;

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) return null;

  return (
    <Container>
      <div className="px-4 py-10 md:px-8">
        <div className="lg:grid lg:grid-cols-2 md:items-start">
          <div className="">
            <Gallery images={product.images} />
          </div>
          <div className="mt-10 px-0 md:mt-0 md:px-4">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-10" />
        <ProductList title="Related Items" items={suggestedProducts} className="md:text-left"/>
      </div>
    </Container>
  );
}
