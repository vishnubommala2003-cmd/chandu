import { navItems } from "../../data/storeData.js";

export default function Header({ page, cartCount, wishlistCount, theme, onNavigate, onThemeToggle, onCartClick }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => onNavigate("home")} aria-label="Go home">
        <span>OG</span>
        <small>wear the culture</small>
      </button>

      <nav className="nav">
        {navItems.map((item) => (
          <button
            key={item.page}
            className={page === item.page ? "active" : ""}
            onClick={() => onNavigate(item.page)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <button onClick={onThemeToggle}>{theme === "light" ? "Dark" : "Light"}</button>
        <button onClick={() => onNavigate("shop")}>Search</button>
        <button onClick={() => onNavigate("drops")}>Wish {wishlistCount}</button>
        <button onClick={onCartClick}>Cart {cartCount}</button>
      </div>
    </header>
  );
}
