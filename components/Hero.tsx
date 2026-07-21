import type { Dictionary } from "@/lib/dictionaries";

export default function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-beam" />
        <div className="float-panel" style={{ width: 190, height: 120, top: "22%", left: "8%" }} />
        <div className="float-panel" style={{ width: 140, height: 90, top: "58%", left: "16%", animationDelay: "1.2s" }} />
        <div className="float-panel" style={{ width: 170, height: 110, top: "30%", right: "9%", animationDelay: "0.6s" }} />
        <div className="float-panel" style={{ width: 120, height: 130, top: "62%", right: "14%", animationDelay: "1.8s" }} />
        <div className="hero-vignette" />
      </div>

      <div className="container-x hero__content">
        <span className="chip hero__badge reveal">{hero.badge}</span>
        <h1 className="hero__title font-display reveal" style={{ animationDelay: "0.08s" }}>
          <span className="hero__lead">{hero.lead}</span>
          <span className="text-gradient">{hero.name}</span>
        </h1>
        <p className="hero__role font-display reveal" style={{ animationDelay: "0.16s" }}>
          {hero.role}
        </p>
        <p className="hero__tagline reveal" style={{ animationDelay: "0.24s" }}>
          {hero.tagline}
        </p>
        <div className="hero__cta reveal" style={{ animationDelay: "0.32s" }}>
          <a href="#work" className="btn btn-primary">
            {hero.ctaWork}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {hero.ctaContact}
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll scroll-cue" aria-label={hero.scroll}>
        <span>{hero.scroll}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
