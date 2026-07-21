import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ footer }: { footer: Dictionary["footer"] }) {
  return (
    <footer className="footer">
      <div className="container-x footer__inner">
        <span className="footer__brand font-display">Roh</span>
        <span className="footer__meta">
          © 2026 Roh. {footer.rights}
        </span>
        <span className="footer__meta">{footer.built}</span>
      </div>
    </footer>
  );
}
