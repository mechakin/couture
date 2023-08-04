export type Product = {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  isFeatured: boolean;
  sizes: SizesOnProducts[];
  color: Color;
  images: Image[];
};

export type CartProduct = {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  isFeatured: boolean;
  sizes: SizesOnProducts[];
  selectedSize: Size;
  color: Color;
  images: Image[];
};

export type SizesOnProducts = {
  productId: string;
  sizeId: string;
  size: Size;
};

export type Image = {
  id: string;
  url: string;
};

export type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};
