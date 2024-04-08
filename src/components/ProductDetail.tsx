'use client'
import ProductImagesDisplay from "@/components/ProductImagesDisplay";
import ProductInfo from "@/components/ProductInfo";
import type { Product } from "@/types/CustomComponents";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <article className="product-detail">
      <ProductImagesDisplay images={product.images} />
      <ProductInfo product={product}/>
    </article>
  );
};

export default ProductDetail;
