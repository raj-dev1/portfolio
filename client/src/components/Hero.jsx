import { profile } from "../content.js";
import { ReactIcon, NodeIcon, TypescriptIcon, DatabaseIcon, GearIcon, ShareIcon } from "./icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            <span>{profile.availability}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Collaborate ↗
            </a>
          </div>
        </div>

        <div className="hero-avatar-wrap">
          <div className="avatar-glow" />
          <div className="avatar-ring">
            <div className="avatar-circle">
              <span className="avatar-initials">{profile.initials}</span>
            </div>
          </div>

          <span className="float-badge badge-1"><ReactIcon /></span>
          <span className="float-badge badge-2"><NodeIcon /></span>
          <span className="float-badge badge-3"><TypescriptIcon /></span>
          <span className="float-badge badge-4"><DatabaseIcon /></span>
          <span className="mini-badge mini-1"><ShareIcon /></span>
          <span className="mini-badge mini-2"><GearIcon /></span>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 168px 0 96px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .hero-copy {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) { .hero-copy { animation: none; } }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text);
          background: var(--panel);
          border: 1px solid var(--border);
          padding: 7px 16px 7px 12px;
          border-radius: var(--radius-pill);
          margin-bottom: 28px;
        }
        .status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--green);
          position: relative;
          flex-shrink: 0;
        }
        .status-dot::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: var(--green);
          opacity: 0.4;
          animation: pulse 2s ease-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.6); opacity: 0.5; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) { .status-dot::after { animation: none; opacity: 0; } }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5.2vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hero-name {
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-tagline {
          font-size: 17px;
          color: var(--muted);
          max-width: 480px;
          margin-bottom: 36px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .btn-outline {
          border-color: var(--border);
        }
        .btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ── Avatar + floating badges ─────────────────────────────────── */
        .hero-avatar-wrap {
          position: relative;
          width: 100%;
          max-width: 360px;
          aspect-ratio: 1;
          margin: 0 auto;
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.15s;
        }
        @media (prefers-reduced-motion: reduce) { .hero-avatar-wrap { animation: none; } }

        .avatar-glow {
          position: absolute;
          inset: 6%;
          border-radius: 50%;
          background: var(--gradient);
          filter: blur(50px);
          opacity: 0.35;
        }
        .avatar-ring {
          position: absolute;
          inset: 10%;
          border-radius: 50%;
          background: var(--gradient);
          padding: 5px;
        }
        .avatar-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--panel);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
        }
        .avatar-initials {
          font-family: var(--font-display);
          font-size: clamp(48px, 7vw, 72px);
          font-weight: 800;
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .float-badge {
          position: absolute;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--panel);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
          animation: floatBadge 4s ease-in-out infinite;
        }
        .badge-1 { top: 2%;  left: -6%;  animation-delay: 0s; }
        .badge-2 { top: 6%;  right: -8%; animation-delay: 0.6s; }
        .badge-3 { bottom: 10%; left: -10%; animation-delay: 1.2s; }
        .badge-4 { bottom: 4%; right: -4%; animation-delay: 1.8s; }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) { .float-badge { animation: none; } }

        .mini-badge {
          position: absolute;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--panel-2);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-2);
          animation: floatBadge 5s ease-in-out infinite;
        }
        .mini-1 { top: 36%; left: -2%; animation-delay: 0.3s; }
        .mini-2 { top: 30%; right: 2%; animation-delay: 0.9s; }
        @media (prefers-reduced-motion: reduce) { .mini-badge { animation: none; } }

        @media (max-width: 860px) {
          .hero { padding: 140px 0 64px; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .hero-copy { text-align: center; }
          .status-pill { margin-left: auto; margin-right: auto; }
          .hero-tagline { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-avatar-wrap { max-width: 280px; }
        }
      `}</style>
    </section>
  );
}
