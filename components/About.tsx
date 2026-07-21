import type { Dictionary } from "@/lib/dictionaries";

export default function About({ about }: { about: Dictionary["about"] }) {
  return (
    <section className="section" id="about">
      <div className="container-x">
        <p className="kicker">{about.kicker}</p>
        <h2 className="section-title font-display">{about.title}</h2>

        <div className="about__grid">
          <div className="about__body">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about__stats">
            {about.stats.map((s) => (
              <div key={s.label} className="card about__stat">
                <span className="about__stat-value text-gradient-cool font-display">
                  {s.value}
                </span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
