import { skills } from "../content.js";
import Reveal from "./Reveal.jsx";

const categoryIcons = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="4.5" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14.7 6.3a3 3 0 0 0-4.2 4.2l-7 7 2.5 2.5 7-7a3 3 0 0 0 4.2-4.2l-2-2-2.5 2.5-1-1L14.2 6l.5.3Z" />
    </svg>
  ),
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  tools: "Tools",
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow mono">toolbox</p>
          <h2 className="section-title">{skills.heading}</h2>
        </Reveal>

        <div className="skills-grid">
          {skills.groups.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="skill-card">
                <div className="skill-card-head">
                  <span className="skill-icon">{categoryIcons[group.category]}</span>
                  <span className="skill-cat-label mono">{categoryLabels[group.category]}</span>
                </div>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item} className="skill-chip mono">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skill-card {
          position: relative;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          overflow: hidden;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .skill-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--green), var(--accent-2));
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .skill-card:hover {
          border-color: rgba(79, 140, 255, 0.35);
          transform: translateY(-3px);
        }
        .skill-card:hover::before {
          opacity: 1;
        }
        .skill-card-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .skill-icon {
          width: 22px;
          height: 22px;
          color: var(--accent);
          flex-shrink: 0;
        }
        .skill-icon svg { width: 100%; height: 100%; }
        .skill-cat-label {
          font-size: 13px;
          letter-spacing: 0.04em;
          color: var(--text);
          text-transform: uppercase;
        }
        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          list-style: none;
        }
        .skill-chip {
          font-size: 13px;
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: var(--panel-2);
          color: var(--text);
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .skill-chip:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }
        @media (max-width: 760px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
