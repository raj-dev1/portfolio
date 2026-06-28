import { useEffect, useState } from "react";
import { profile } from "../content.js";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" className="role-badge">
          {profile.role}
        </a>

        <nav className="nav-desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary hire-btn">
          Hire Me
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </nav>
      )}

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(11, 15, 31, 0.6);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .site-header.scrolled {
          border-bottom-color: var(--border);
          background: rgba(11, 15, 31, 0.88);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
          gap: 20px;
        }
        .role-badge {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, var(--accent), var(--accent-2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          flex-shrink: 0;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 14px;
          margin: 0 auto;
        }
        .nav-desktop a {
          color: var(--muted);
          font-weight: 500;
          transition: color 0.15s ease;
        }
        .nav-desktop a:hover { color: var(--text); }
        .hire-btn {
          padding: 10px 22px;
          font-size: 13.5px;
          flex-shrink: 0;
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
        }
        .nav-toggle span {
          width: 22px;
          height: 2px;
          background: var(--text);
          display: block;
        }
        .nav-mobile { display: none; }
        @media (max-width: 760px) {
          .nav-desktop { display: none; }
          .hire-btn { display: none; }
          .nav-toggle { display: flex; }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 20px 24px 28px;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
          }
          .nav-mobile a { color: var(--muted); font-size: 15px; }
          .nav-mobile .btn { width: fit-content; margin-top: 4px; }
        }
      `}</style>
    </header>
  );
}
