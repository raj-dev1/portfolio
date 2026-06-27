import { about } from "../content.js";
import Reveal from "./Reveal.jsx";
import Counter from "./Counter.jsx";

const statIcons = {
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14.5 3.5c2 2 3 5 3 8.5l-3.5 3.5-4-4 3.5-3.5c1-1 4-4.5 1-4.5Z" />
      <path d="M9 14 5.5 17.5M7 16l-2 4 4-2M5 12c-2 1-3 4-3 4s3-1 4-3" />
      <circle cx="14.5" cy="9.5" r="1.4" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20s-7.5-4.8-9.7-9.4C.7 7.1 2.5 3.8 5.9 3.5c2-.2 3.6.8 4.6 2.2C11.5 4.3 13.1 3.3 15.1 3.5c3.4.3 5.2 3.6 3.6 7.1C16.5 15.2 12 20 12 20Z" />
    </svg>
  ),
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal>
          <div>
            <p className="eyebrow mono">about</p>
            <h2 className="section-title">{about.heading}</h2>
            {about.paragraphs.map((p, i) => (
              <p className="about-p" key={i}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="stat-grid">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="stat-card">
                <div className="stat-icon">{statIcons[stat.icon]}</div>
                <div className="stat-value mono">
                  <Counter value={stat.value} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 64px;
        }
        .about-p {
          color: var(--muted);
          font-size: 16px;
          margin-bottom: 16px;
          max-width: 560px;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-content: start;
        }
        .stat-card {
          background: linear-gradient(160deg, var(--panel), var(--panel-2));
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 22px 20px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover {
          border-color: rgba(79, 140, 255, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -20px rgba(79, 140, 255, 0.35);
        }
        .stat-icon {
          width: 34px;
          height: 34px;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .stat-icon svg { width: 100%; height: 100%; }
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .stat-label {
          font-size: 13px;
          color: var(--muted);
        }
        @media (max-width: 760px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>
    </section>
  );
}
