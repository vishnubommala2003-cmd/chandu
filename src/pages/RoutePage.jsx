import { archiveItems, collections, pageCopy } from "../data/storeData.js";
import PageHero from "../components/ui/PageHero.jsx";
import ProductCard from "../components/ui/ProductCard.jsx";
import NewsletterSection from "../components/sections/NewsletterSection.jsx";

export default function RoutePage({ page, products, wishlist, onNavigate, onAddToCart, onWishlist, onToast }) {
  const copy = pageCopy[page] || pageCopy.shop;

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        copy={copy.copy}
        actionLabel={page === "about" ? "Shop OG" : "Back Home"}
        onAction={() => onNavigate(page === "about" ? "shop" : "home")}
      />

      {page === "shop" && (
        <section className="route-section">
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.some((item) => item.id === product.id)}
                onAddToCart={onAddToCart}
                onWishlist={onWishlist}
              />
            ))}
          </div>
        </section>
      )}

      {page === "collections" && (
        <section className="route-section collection-grid">
          {collections.map((item) => (
            <button key={item.id} className="collection-card" onClick={() => onToast(`${item.title} opened.`)}>
              <span>0{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </button>
          ))}
        </section>
      )}

      {page === "drops" && (
        <section className="route-section split-route">
          <div>
            <p className="route-eyebrow">Live Drop</p>
            <h2>02 Days 18 Hours Left</h2>
            <span>Grab the current release before the timer burns out.</span>
            <button onClick={() => onToast("Drop reminder set.")}>Remind Me</button>
          </div>
          <div className="product-grid mini">
            {products.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.some((item) => item.id === product.id)}
                onAddToCart={onAddToCart}
                onWishlist={onWishlist}
              />
            ))}
          </div>
        </section>
      )}

      {page === "archive" && (
        <section className="route-section archive-grid">
          {archiveItems.map((item) => (
            <button key={item} onClick={() => onToast(`${item} archive opened.`)}>
              <span>OG</span>
              <h3>{item}</h3>
            </button>
          ))}
        </section>
      )}

      {page === "about" && (
        <section className="route-section about-panel">
          <h2>Original Gangster. Built Different.</h2>
          <p>
            OG Street Wear is a fictional premium streetwear storefront with limited drops, gritty visuals,
            dark/light themes, cart actions, wishlist actions, and responsive layouts.
          </p>
          <button onClick={() => onNavigate("collections")}>Explore Collections</button>
        </section>
      )}

      <NewsletterSection onToast={onToast} />
    </>
  );
}
