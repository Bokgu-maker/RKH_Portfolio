import type { Dictionary } from "@/lib/dictionaries";

export default function Contact({
  contact,
}: {
  contact: Dictionary["contact"];
}) {
  return (
    <section className="section section--alt" id="contact">
      <div className="container-x contact">
        <p className="kicker">{contact.kicker}</p>
        <h2 className="section-title font-display">{contact.title}</h2>
        <p className="contact__body">{contact.body}</p>
        <a href={`mailto:${contact.email}`} className="contact__email font-display text-gradient">
          {contact.email}
        </a>
        <div>
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            {contact.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
