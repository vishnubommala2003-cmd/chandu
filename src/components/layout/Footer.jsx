import { navItems } from "../../data/storeData.js";

export default function Footer({ onNavigate, onToast }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span>OG</span>
        <p>We do not follow trends. We set them.</p>
      </div>

      <div className="footer-links">
        {navItems.map((item) => (
          <button key={item.page} onClick={() => onNavigate(item.page)}>
            {item.label}
          </button>
        ))}
        <button onClick={() => onToast("Shipping and returns opened.")}>Shipping</button>
        <button onClick={() => onToast("Contact form opened.")}>Contact</button>
      </div>
    </footer>
  );
}
