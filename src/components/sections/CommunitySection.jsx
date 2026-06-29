const feed = ["Backprint", "Concrete", "Cap Drop", "Alley Fit", "Poster Wall"];

export default function CommunitySection({ onToast }) {
  return (
    <section className="community-section">
      <div>
        <p>OG Community</p>
        <h2>#BEOG</h2>
        <span>Real people. Real fits. Real OGs.</span>
        <button onClick={() => onToast("Community gallery opened.")}>Join The Movement</button>
      </div>

      <div className="feed-grid">
        {feed.map((item) => (
          <button key={item} onClick={() => onToast(`${item} saved to moodboard.`)}>
            <span>OG</span>
            <small>{item}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
