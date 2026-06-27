import { about } from "../content.js";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <p className="eyebrow mono">01 · who I am</p>
          <h2 className="section-title">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p className="about-p" key={i}>
              {p}
            </p>
          ))}
        </div>

        <div className="stat-grid">
          {about.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-value mono">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
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
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 22px 20px;
        }
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 6px;
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
