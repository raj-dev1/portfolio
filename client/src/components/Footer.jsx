import { profile } from "../content.js";
import { GithubIcon, LinkedinIcon, UpworkIcon, XIcon, MailIcon } from "./icons.jsx";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Upwork: UpworkIcon,
  "Twitter / X": XIcon,
};

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#top" className="footer-logo mono">
            <span className="logo-bracket">&lt;</span>
            {profile.name.split(" ")[0]}
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-tagline">{profile.tagline}</p>
          <a href={`mailto:${profile.email}`} className="footer-email mono">
            <MailIcon /> {profile.email}
          </a>
        </div>

        <div className="footer-col">
          <p className="footer-col-title mono">Navigate</p>
          <nav className="footer-links">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-col-title mono">Elsewhere</p>
          <div className="footer-socials">
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="footer-social-icon">
                  {Icon ? <Icon /> : s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container footer-bottom mono">
        <span>© {year} {profile.name}. All rights reserved.</span>
        <span className="footer-built">{"<built with React + Node.js />"}</span>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--border);
          padding: 56px 0 0;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
        }
        .footer-logo {
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.02em;
          display: inline-block;
          margin-bottom: 14px;
        }
        .logo-bracket { color: var(--accent); }
        .footer-tagline {
          color: var(--muted);
          font-size: 14px;
          max-width: 320px;
          margin-bottom: 16px;
        }
        .footer-email {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: var(--text);
          transition: color 0.15s ease;
        }
        .footer-email:hover { color: var(--accent); }
        .footer-col-title {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 16px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          font-size: 14px;
          color: var(--text);
          transition: color 0.15s ease;
          width: fit-content;
        }
        .footer-links a:hover { color: var(--accent); }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .footer-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--muted);
          background: var(--panel);
          transition: color 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
        }
        .footer-social-icon:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 12.5px;
          color: var(--muted);
          padding: 22px 0;
          border-top: 1px solid var(--border);
        }
        .footer-built { color: #4a5560; }
        @media (max-width: 760px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
}
