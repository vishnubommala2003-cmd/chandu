import { archiveCards, collections, pageCopy } from "../data/storeData.js";
import PageHero from "../components/ui/PageHero.jsx";
import ProductCard from "../components/ui/ProductCard.jsx";
import NewsletterSection from "../components/sections/NewsletterSection.jsx";

export default function RoutePage({ page, products, cart, wishlist, onNavigate, onAddToCart, onWishlist, onToast }) {
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
              <img src={item.image} alt={item.title} />
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

      {page === "wishlist" && (
        <section className="route-section">
          {wishlist.length ? (
            <>
              <div className="route-header">
                <p className="route-eyebrow">Saved</p>
                <h2>Your Wishlist</h2>
                <span>These are the OG pieces you want to keep an eye on.</span>
              </div>
              <div className="product-grid">
                {wishlist.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.some((item) => item.id === product.id)}
                    onAddToCart={onAddToCart}
                    onWishlist={onWishlist}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <h3>Your wishlist is empty.</h3>
              <button onClick={() => onNavigate("shop")}>Browse Products</button>
            </div>
          )}
        </section>
      )}

      {page === "cart" && (
        <section className="route-section">
          {cart.length ? (
            <>
              <div className="route-header">
                <p className="route-eyebrow">Cart</p>
                <h2>Your Bag</h2>
                <span>Review the products ready to ship from your current order.</span>
              </div>
              <div className="cart-summary">
                <span>{cart.length} item(s)</span>
                <strong>Rs {cart.reduce((sum, item) => sum + item.price, 0).toLocaleString("en-IN")}</strong>
              </div>
              <div className="product-grid">
                {cart.map((product, index) => (
                  <ProductCard
                    key={`${product.id}-${index}`}
                    product={product}
                    isWishlisted={wishlist.some((item) => item.id === product.id)}
                    onAddToCart={onAddToCart}
                    onWishlist={onWishlist}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <h3>Your cart is empty.</h3>
              <button onClick={() => onNavigate("shop")}>Shop Products</button>
            </div>
          )}
        </section>
      )}

      {page === "archive" && (
        <section className="route-section archive-grid">
          {archiveCards.map((card) => (
            <button
              key={card.title}
              onClick={() => onToast(`${card.title} archive opened.`)}
              onMouseEnter={(event) => {
                const video = event.currentTarget.querySelector("video");
                if (video) {
                  video.play().catch(() => {});
                }
              }}
              onMouseLeave={(event) => {
                const video = event.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            >
              <div className="archive-media">
                <img src={card.image} alt={card.title} />
                <video
                  src={card.video}
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
              <span>OG</span>
              <h3>{card.title}</h3>
            </button>
          ))}
        </section>
      )}

      {page === "about" && (
        <section className="route-section about-panel">
          <div className="about-hero">
            <div className="about-logo-wrap">
              <div className="about-logo-glow" aria-hidden="true" />
              <img className="about-logo" src="/images/brand/og-logo.png" alt="The OG" />
            </div>

            <div className="about-copy">
              <p className="about-eyebrow">Original. Authentic. OG.</p>
              <h2>Built for those who lead, not follow.</h2>
              <p>
                OG Street Wear brings premium street style to your rotation with bold graphics, signature fits,
                and limited-run drops. Discover the collection made for people who craft culture instead of
                copying it.
              </p>
              <div className="about-actions">
                <button className="btn primary" onClick={() => onNavigate("shop")}>
                  Shop the Drop
                </button>
                <button className="btn outline" onClick={() => onNavigate("collections")}> 
                  Explore Collections
                </button>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div>
              <h3>Legendary Drops</h3>
              <p>Limited releases that sell out fast. Stay ahead of the culture curve.</p>
            </div>
            <div>
              <h3>Modern Heritage</h3>
              <p>OG branding fused with street-ready silhouettes for daily wear and statement fits.</p>
            </div>
            <div>
              <h3>Shop with Confidence</h3>
              <p>Track wishlist favorites, add to cart instantly, and build a curated OG wardrobe.</p>
            </div>
          </div>
        </section>
      )}

      <NewsletterSection onToast={onToast} />
    </>
  );
}
