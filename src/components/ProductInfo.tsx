import { Product } from "@/types/CustomComponents";
import Image from "next/image";
import starImage from "@/assets/img/star.png";
import ProductTypesDisplay from "@/components/ProductTypesDisplay";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <article className="product-info">
      <ul>
        <li>
          <span>Brand: </span>
          {product.brand}
        </li>
        <li>
          <span>Model:</span> {product.model}
        </li>
        <li>
          <span>Availability:</span> {product.availability}
        </li>
      </ul>
      <section>
        <h3>{product.name}</h3>
        <div className="stars">
          {Array.from({ length: product.stars }).map((star, index) => (
            <figure key={index}>
              <Image
                src={starImage}
                width={30}
                height={30}
                alt="product star"
              />
            </figure>
          ))}
        </div>
      </section>
        <ul>
          {product.features.map((feature, index) => (
            <li key={`${feature}_${index}`}>{feature}</li>
          ))}
        </ul>
        <ProductTypesDisplay types={product.types}/>
    </article>
  );
};

export default ProductInfo;
