interface ProductQuantityProps {
  price: string;
  lastPrice?: string;
}

const ProductQuantity = ({ price, lastPrice }: ProductQuantityProps) => {
  return (
    <div className="quantity">
      <span>USD(incl. of all taxes)</span>
      <section>
        <div className="prices">
          <span>{price}</span>
          {lastPrice && <span>{lastPrice}</span>}
        </div>
        <div className="counter">
          <input type="button" value="-" />
          <span>1</span>
          <input type="button" value="+" />
        </div>
      </section>
      <section>
        <input type="button" value="Buy Now" className="primary-button" />
        <input
          type="button"
          value="Add to Cart"
          className="primary-button-inverted"
        />
      </section>
    </div>
  );
};

export default ProductQuantity;
