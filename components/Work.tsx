import type { Dictionary } from "@/lib/dictionaries";

/* Accent gradients keyed by Project.accent */
const ACCENTS = [
  "linear-gradient(135deg, #7c3aed, #d946ef)",
  "linear-gradient(135deg, #2563eb, #22d3ee)",
  "linear-gradient(135deg, #db2777, #f59e0b)",
  "linear-gradient(135deg, #059669, #22d3ee)",
];

export default function Work({ work }: { work: Dictionary["work"] }) {
  return (
    <section className="section" id="work">
      <div className="container-x">
        <p className="kicker">{work.kicker}</p>
        <h2 className="section-title font-display">{work.title}</h2>

        <div className="work__grid">
          {work.projects.map((p) => {
            const href =
              p.href ??
              (p.youtubeId ? `https://youtu.be/${p.youtubeId}` : undefined);

            const thumb = p.youtubeId ? (
              <div className="work__thumb work__thumb--video">
                <img
                  src={`/work/${p.youtubeId}.jpg`}
                  alt={p.title}
                  className="work__thumb-img"
                  loading="lazy"
                />
                <span className="work__play" aria-hidden="true" />
                <span className="work__year">{p.year}</span>
              </div>
            ) : (
              <div
                className="work__thumb"
                style={{ background: ACCENTS[p.accent] }}
              >
                <span className="work__initial font-display">
                  {p.title.charAt(0)}
                </span>
                <span className="work__year">{p.year}</span>
              </div>
            );

            const card = (
              <>
                {thumb}
                <div className="work__info">
                  <h3 className="work__title font-display">{p.title}</h3>
                  <p className="work__role">{p.role}</p>
                  <p className="work__desc">{p.description}</p>
                  <div className="work__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return href ? (
              <a
                key={p.slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card work__card work__card--link"
              >
                {card}
              </a>
            ) : (
              <article key={p.slug} className="card work__card">
                {card}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
