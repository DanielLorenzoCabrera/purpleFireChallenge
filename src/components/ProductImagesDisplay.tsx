import Image from "next/image";

interface ProductImagesDisplay {
  images: Array<typeof Image>;
  onImageSelected?: (imageIndex: number) => void;
}

const ProductImagesDisplay = ({
  images,
  onImageSelected,
}: ProductImagesDisplay) => {
  <figure className="product-images">
    {images.map((image, index) => (
      <Image
        key={index}
        src={image}
        height={30}
        width={40}
        alt={`Product image ${index}`}
      />
    ))}
  </figure>;
};

export default ProductImagesDisplay;
