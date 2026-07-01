import { useMemo, useState } from "react";
import SplashScreen from "./components/ui/SplashScreen.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import RoutePage from "./pages/RoutePage.jsx";
import { products } from "./data/storeData.js";

const INTRO_TIME = 3200;

export default function App() {
  const [theme, setTheme] = useState("light");
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState("");

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    setToast(`${product.name} added to cart.`);
  };

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      setToast(exists ? `${product.name} removed from wishlist.` : `${product.name} saved to wishlist.`);
      return exists ? current.filter((item) => item.id !== product.id) : [...current, product];
    });
  };

  return (
    <main className={`app ${theme}`}>
      {showSplash && <SplashScreen duration={INTRO_TIME} onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <Header
            page={page}
            cartCount={cart.length}
            wishlistCount={wishlist.length}
            theme={theme}
            onNavigate={navigate}
            onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
          />

          {page === "home" ? (
            <HomePage
              products={products}
              wishlist={wishlist}
              onNavigate={navigate}
              onAddToCart={addToCart}
              onWishlist={toggleWishlist}
              onToast={setToast}
            />
          ) : (
            <RoutePage
              page={page}
              products={products}
              cart={cart}
              wishlist={wishlist}
              onNavigate={navigate}
              onAddToCart={addToCart}
              onWishlist={toggleWishlist}
              onToast={setToast}
            />
          )}

          <Footer onNavigate={navigate} onToast={setToast} />
        </>
      )}

      {toast && (
        <div className="toast">
          <span>{toast}</span>
          <button onClick={() => setToast("")}>Close</button>
        </div>
      )}
    </main>
  );
}
