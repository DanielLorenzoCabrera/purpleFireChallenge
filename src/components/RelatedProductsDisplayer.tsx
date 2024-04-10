import { RelatedProduct as RelatedProductType } from "@/types/CustomComponents";
import Carousel from "@/components/buttons/Carousel";
import RelatedProduct from "@/components/RelatedProduct";

interface RelatedProductDisplayerProps {
  relatedProducts: Array<RelatedProductType>;
}

const RelatedProductDisplayer = ({
  relatedProducts,
}: RelatedProductDisplayerProps) => {
  return (
    <div className="related-products">
      <h4>Related products</h4>
      <Carousel totalSlides={4}>
          {relatedProducts.map((product) => (
            <RelatedProduct relatedProduct={product} key={product.id} />
          ))}
      </Carousel>
    </div>
  );
};

export default RelatedProductDisplayer;
