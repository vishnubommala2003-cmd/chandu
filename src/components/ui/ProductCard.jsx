export default function ProductCard({ product, isWishlisted, onAddToCart, onWishlist }) {
  return (
    <article className="product-card">
      <button className="wishlist-btn" onClick={() => onWishlist(product)} aria-label={`Wishlist ${product.name}`}>
        {isWishlisted ? "★" : "☆"}
      </button>
      <div className={`product-art ${product.color}`}>
        <span>{product.tag}</span>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>Rs {product.price.toLocaleString("en-IN")}</p>
        </div>
        <button onClick={() => onAddToCart(product)} aria-label={`Add ${product.name} to cart`}>
          +
        </button>
      </div>
    </article>
  );
}
