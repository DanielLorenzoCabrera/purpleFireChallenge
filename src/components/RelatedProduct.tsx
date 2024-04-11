import type { RelatedProduct } from "@/types/CustomComponents";
import ActionableIcon from "@/components/ActionableIcon";
import { Icon } from "@/assets/img/Icons";
import Image from "next/image";
import AddToCartButton from "@/components/buttons/AddToCartButton";

interface RelatedProductProps {
  relatedProduct: RelatedProduct;
}

const RelatedProduct = ({ relatedProduct }: RelatedProductProps) => {
  return (
    <article className="related">
      <div>
        {relatedProduct.tag && <span className={relatedProduct.tag.className}>{relatedProduct.tag?.label}</span>}
        {relatedProduct.liked && <ActionableIcon className="liked" icon={Icon.heartFilled} />}
      </div>
      <figure>
        <Image
          src={relatedProduct.thumbnail}
          width={200}
          height={200}
          alt={relatedProduct.name}
        />
      </figure>
      <AddToCartButton />
    </article>
  );
};

export default RelatedProduct;
