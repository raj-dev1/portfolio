import { useEffect, useState } from "react";
import { profile } from "../content.js";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
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
        <a href="#top" className="logo mono">
          <span className="logo-bracket">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className="nav-desktop mono">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">
            hire me
          </a>
        </nav>

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
        <nav className="nav-mobile mono">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            hire me
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
          background: rgba(250, 249, 252, 0.7);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .site-header.scrolled {
          border-bottom-color: var(--border);
          background: rgba(250, 249, 252, 0.92);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .logo {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .logo-bracket {
          color: var(--accent);
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 13.5px;
        }
        .nav-desktop a {
          color: var(--muted);
          transition: color 0.15s ease;
        }
        .nav-desktop a:hover {
          color: var(--text);
        }
        .nav-cta {
          padding: 8px 16px;
          font-size: 13px;
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
        .nav-mobile {
          display: none;
        }
        @media (max-width: 760px) {
          .nav-desktop {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 20px 24px 28px;
            background: var(--bg);
            border-bottom: 1px solid var(--border);
          }
          .nav-mobile a {
            color: var(--muted);
            font-size: 15px;
          }
          .nav-mobile .btn {
            width: fit-content;
            margin-top: 4px;
          }
        }
      `}</style>
    </header>
  );
}
