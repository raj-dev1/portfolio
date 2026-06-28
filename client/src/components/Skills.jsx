import { skills } from "../content.js";
import Reveal from "./Reveal.jsx";
import { techIcons } from "./icons.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Toolbox</p>
            <h2 className="section-title">{skills.heading}</h2>
            <p className="section-subtitle">{skills.subheading}</p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skills.items.map((skill, i) => {
            const Icon = techIcons[skill.icon];
            return (
              <Reveal key={skill.name} delay={(i % 4) * 80}>
                <div className="skill-card">
                  <span
                    className="skill-badge"
                    style={{ background: `${skill.color}22`, color: skill.color }}
                  >
                    {Icon ? <Icon /> : null}
                  </span>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .skill-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .skill-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: 0 22px 44px -24px rgba(59, 130, 246, 0.35);
        }
        .skill-badge {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .skill-name {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .skill-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
        }
        @media (max-width: 980px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
