import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import getBillboard from "../../actions/get-billboard";
import getProducts from "../../actions/get-products";

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard("4ba8c917-7b67-4fc7-aab2-eda7ad2b03ed");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <p className="mx-auto max-w-3xl space-y-10 px-8 pb-4 text-center md:px-0">
          Welcome to Couture, a haven for the fashion-forward and discerning
          individuals seeking unparalleled style and opulence. Step into a world
          of timeless elegance, where each meticulously crafted garment tells a
          story of artistry and refinement. Immerse yourself in the luxurious
          fabrics, exquisite details, and impeccable tailoring that define our
          selection. Elevate your wardrobe with our iconic pieces, handpicked to
          celebrate your unique style and inspire confidence. We invite you to
          indulge in the pleasure of luxury fashion and allow us to fulfill your
          desires for sophistication and beauty. Embrace the extraordinary.
        </p>
        <div className="flex flex-col gap-y-8 px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
