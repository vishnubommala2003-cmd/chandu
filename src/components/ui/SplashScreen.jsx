import { useEffect } from "react";

export default function SplashScreen({ duration, onFinish }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, duration);
    return () => window.clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <section className="splash" aria-label="OG intro animation">
      <div className="splash-mark">OG</div>
      <div className="splash-line" />
      <p>Street Wear</p>
    </section>
  );
}
