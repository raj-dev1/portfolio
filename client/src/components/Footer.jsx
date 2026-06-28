import { profile } from "../content.js";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from "./icons.jsx";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  "Twitter / X": XIcon,
  Instagram: InstagramIcon,
};

const quickLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-divider" />
      <div className="container footer-inner">
        <a href="#top" className="footer-logo">{profile.role}</a>

        <nav className="footer-links">
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

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

      <div className="container footer-bottom">
        <span>© {year} {profile.name}. All Rights Reserved.</span>
      </div>

      <style>{`
        .site-footer {
          padding: 48px 0 0;
        }
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          padding: 32px 0;
        }
        .footer-logo {
          font-size: 15px;
          font-weight: 700;
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .footer-links {
          display: flex;
          gap: 26px;
          flex-wrap: wrap;
        }
        .footer-links a {
          font-size: 14px;
          color: var(--muted);
          transition: color 0.15s ease;
        }
        .footer-links a:hover { color: var(--text); }
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
          border-radius: 50%;
          color: var(--text);
          background: var(--panel);
          border: 1px solid var(--border);
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }
        .footer-social-icon:hover {
          background: var(--gradient);
          border-color: transparent;
          transform: translateY(-2px);
        }
        .footer-bottom {
          text-align: center;
          font-size: 13px;
          color: var(--muted);
          padding: 22px 0 32px;
          border-top: 1px solid var(--border);
        }
        @media (max-width: 760px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
