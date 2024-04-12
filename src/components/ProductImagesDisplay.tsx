import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ProductImagesDisplay {
  images: Array<StaticImageData>;
  onImageSelected?: (imageIndex: number) => void;
}

const ProductImagesDisplay = ({
  images,
  onImageSelected,
}: ProductImagesDisplay) => {
  const [imageSelectedIndex, setImageSelectedIndex] = useState(0);
  const isSelected = (index: number) =>  imageSelectedIndex === index ? 'selected': ''
  return (
    <section className="product-images-display">
      <figure className="product-images">
        {images.map((image, index) => (
          <figure key={index} className={isSelected(index)}>
            <Image
              onClick={() => setImageSelectedIndex(index)}
              src={image}
              height={70}
              width={100}
              alt={`Product image ${index}`}
            />
          </figure>
        ))}
      </figure>

      <figure className="main-image">
        <Image
          src={images[imageSelectedIndex]}
          width={470}
          height={310}
          alt={`Product image`}
        />
      </figure>
    </section>
  );
};

export default ProductImagesDisplay;
