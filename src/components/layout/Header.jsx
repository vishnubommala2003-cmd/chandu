import { useState } from "react";
import { navItems } from "../../data/storeData.js";

export default function Header({
  page,
  cartCount,
  wishlistCount,
  theme,
  onNavigate,
  onThemeToggle
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleNavigate = (nextPage) => {
    onNavigate(nextPage);
    setMenuOpen(false);
    setSearchOpen(false);
  };

  const handleSearchToggle = () => {
    setSearchOpen((current) => !current);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <button className="brand" onClick={() => handleNavigate("home")} aria-label="Go home">
        <img className="brand-logo" src="/images/brand/og-logo.png" alt="The OG" />
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

        <button onClick={handleSearchToggle}>
          Search
        </button>

        <button onClick={() => handleNavigate("wishlist")}> 
          Wish {wishlistCount}
        </button>

        <button onClick={() => handleNavigate("cart")}>
          Cart {cartCount}
        </button>
      </div>

      <div className={searchOpen ? "search-drop open" : "search-drop"}>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search OG products..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button onClick={() => setSearchValue("")}>Clear</button>
        </div>
      </div>
    </header>
  );
}

