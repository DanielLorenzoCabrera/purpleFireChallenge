"use client";
import ProductImagesDisplay from "@/components/ProductImagesDisplay";
import ProductInfo from "@/components/ProductInfo";
import ProductDetailedInformation from "@/components/ProductDetailedInformation";
import type { Product } from "@/types/CustomComponents";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <article className="product-detail">
      <section>
        <ProductImagesDisplay images={product.images} />
        <ProductInfo product={product} />
      </section>
      <section>
        <ProductDetailedInformation
          description={product.description}
          specification={product.specification}
          reviews={product.reviews}
        />
      </section>
    </article>
  );
};

export default ProductDetail;
