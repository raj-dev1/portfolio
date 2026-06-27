import { profile } from "../content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner mono">
        <span>© {year} {profile.name}. All rights reserved.</span>
        <span className="footer-built">{"<built with React + Node.js />"}</span>
      </div>

      <style>{`
        .site-footer {
          padding: 28px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 12.5px;
          color: var(--muted);
        }
        .footer-built {
          color: #4a5560;
        }
      `}</style>
    </footer>
  );
}
