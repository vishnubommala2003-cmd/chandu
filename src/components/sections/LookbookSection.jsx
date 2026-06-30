import { useState } from "react";

export default function LookbookSection({ products, onNavigate }) {
  const [index, setIndex] = useState(0);
  const product = products[index];

  return (
    <section className="lookbook-section">
      <div className="poster">Be OG</div>
      <div className="lookbook-copy">
        <p>Lookbook 24</p>
        <h2>
          Made To Break <span>Rules.</span>
        </h2>
        <span>This is not just fashion. It is rebellion, identity, and OG.</span>
        <button onClick={() => onNavigate("archive")}>Explore Lookbook</button>
      </div>
      <div className="slider-card">
        <button onClick={() => setIndex((index - 1 + products.length) % products.length)}>‹</button>
        <div className={`product-art ${product.color}`}>
          <span>{product.tag}</span>
        </div>
        <h3>{product.name}</h3>
        <button onClick={() => setIndex((index + 1) % products.length)}>›</button>
      </div>
    </section>
  );
}
