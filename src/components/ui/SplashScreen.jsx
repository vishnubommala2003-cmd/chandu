import { useEffect } from "react";

export default function SplashScreen({ duration, onFinish }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, duration);
    return () => window.clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <section className="splash" aria-label="OG intro animation">
      <img className="splash-logo" src="/images/brand/og-logo.png" alt="The OG" />
    </section>
  );
}
