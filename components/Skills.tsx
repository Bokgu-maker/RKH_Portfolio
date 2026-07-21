import type { Dictionary } from "@/lib/dictionaries";

export default function Skills({ skills }: { skills: Dictionary["skills"] }) {
  return (
    <section className="section section--alt" id="skills">
      <div className="container-x">
        <p className="kicker">{skills.kicker}</p>
        <h2 className="section-title font-display">{skills.title}</h2>

        <div className="skills__grid">
          {skills.groups.map((group) => (
            <div key={group.name} className="card skills__card">
              <h3 className="skills__name font-display">{group.name}</h3>
              <div className="skills__chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
