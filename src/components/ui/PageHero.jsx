export default function PageHero({ eyebrow, title, copy, actionLabel, onAction }) {
  return (
    <section className="page-hero">
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <span>{copy}</span>
      {actionLabel && <button onClick={onAction}>{actionLabel}</button>}
    </section>
  );
}
