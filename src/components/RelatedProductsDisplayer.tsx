import { RelatedProduct as RelatedProductType } from "@/types/CustomComponents";
import Carousel from "@/components/buttons/Carousel";
import RelatedProduct from "@/components/RelatedProduct";
import { useAppContext } from "./AppWrapper";

interface RelatedProductDisplayerProps {
  relatedProducts: Array<RelatedProductType>;
}

const RelatedProductDisplayer = ({
  relatedProducts,
}: RelatedProductDisplayerProps) => {
  const {isSmallScreen} = useAppContext()
  const productsToDisplay = isSmallScreen ? [relatedProducts[0], relatedProducts[1]] : relatedProducts
  return (
    <div className="related-products">
      <h4>Related products</h4>
      <Carousel totalSlides={4}>
          {productsToDisplay.map((product) => (
            <RelatedProduct relatedProduct={product} key={product.id} />
          ))}
      </Carousel>
    </div>
  );
};

export default RelatedProductDisplayer;
