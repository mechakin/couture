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
      <div className="px-8 py-10">
        <div className="md:grid md:grid-cols-2 md:items-start">
          <Gallery images={product.images} />
          <div className="mt-10 sm:px-8 md:mt-0">
            <Info data={product} />
          </div>
        </div>
        <hr className="md:my-10 my-5" />
        <ProductList
          title="Related Items"
          items={suggestedProducts}
          className="md:text-left"
        />
      </div>
    </Container>
  );
}
