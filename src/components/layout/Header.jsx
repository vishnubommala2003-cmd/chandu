import { useState } from "react";
import { navItems } from "../../data/storeData.js";

export default function Header({
  page,
  cartCount,
  wishlistCount,
  theme,
  onNavigate,
  onThemeToggle,
  onCartClick
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (nextPage) => {
    onNavigate(nextPage);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <button className="brand" onClick={() => handleNavigate("home")} aria-label="Go home">
        <span>OG</span>
        <small>Street Wear</small>
      </button>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <nav className={menuOpen ? "nav open" : "nav"}>
        {navItems.map((item) => (
          <button
            key={item.page}
            className={page === item.page ? "active" : ""}
            onClick={() => handleNavigate(item.page)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <button onClick={onThemeToggle}>
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <button onClick={() => handleNavigate("shop")}>
          Search
        </button>

        <button onClick={() => handleNavigate("drops")}>
          Wish {wishlistCount}
        </button>

        <button onClick={onCartClick}>
          Cart {cartCount}
        </button>
      </div>
    </header>
  );
}
