import { about } from "../content.js";
import Reveal from "./Reveal.jsx";
import Counter from "./Counter.jsx";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <div className="about-text">
            <p className="eyebrow mono">about</p>
            <h2 className="section-title">{about.heading}</h2>
            <div className="about-paragraphs">
              {about.paragraphs.map((p, i) => (
                <p className="about-p" key={i}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="stat-strip">
            {about.stats.map((stat, i) => (
              <div className="stat-item" key={stat.label}>
                {i > 0 && <span className="stat-divider" aria-hidden="true" />}
                <div className="stat-value mono">
                  <Counter value={stat.value} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-text {
          max-width: 680px;
          margin-bottom: 56px;
        }
        .about-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .about-p {
          color: var(--muted);
          font-size: 16.5px;
          line-height: 1.7;
        }
        .stat-strip {
          display: flex;
          flex-wrap: wrap;
        }
        .stat-item {
          position: relative;
          flex: 1;
          min-width: 140px;
          padding: 0 28px;
        }
        .stat-item:first-child {
          padding-left: 0;
        }
        .stat-divider {
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 1px;
          background: var(--border);
        }
        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .stat-label {
          font-size: 13.5px;
          color: var(--muted);
        }
        @media (max-width: 760px) {
          .stat-strip {
            flex-direction: column;
            gap: 24px;
          }
          .stat-item {
            padding: 0;
          }
          .stat-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
