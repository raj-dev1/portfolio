import { skills } from "../content.js";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="eyebrow mono">02 · toolbox</p>
        <h2 className="section-title">{skills.heading}</h2>

        <div className="skills-grid">
          {skills.groups.map((group) => (
            <div className="skill-card" key={group.category}>
              <p className="skill-import mono">
                <span className="kw2">import</span> {"{ "}
                <span className="cat">{group.category}</span>
                {" }"} <span className="kw2">from</span>{" "}
                <span className="str2">"@rajasekar/stack"</span>
              </p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-chip mono">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 22px;
        }
        .skill-import {
          font-size: 12.5px;
          color: var(--muted);
          margin-bottom: 16px;
          word-break: break-word;
        }
        .kw2 { color: var(--accent); }
        .str2 { color: var(--accent-2); }
        .cat { color: var(--green); text-transform: uppercase; }
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
