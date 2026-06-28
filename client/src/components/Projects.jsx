import { projects } from "../content.js";
import Reveal from "./Reveal.jsx";
import { ArrowUpRightIcon } from "./icons.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Selected Work</p>
            <h2 className="section-title">{projects.heading}</h2>
            <p className="section-subtitle">{projects.subheading}</p>
          </div>
        </Reveal>

        <div className="project-grid">
          {projects.items.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 90}>
              <article className="project-card">
                <div className="project-image-wrap">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                </div>

                <div className="project-body">
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="project-head">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-links">
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                      GitHub <ArrowUpRightIcon />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      Live Demo <ArrowUpRightIcon />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .project-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: 0 26px 50px -26px rgba(59, 130, 246, 0.32);
        }
        .project-image-wrap {
          border-bottom: 1px solid var(--border);
          background: var(--panel-2);
          overflow: hidden;
        }
        .project-image-wrap img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-image-wrap img {
          transform: scale(1.05);
        }
        .project-body { padding: 26px; }
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .stack-pill {
          font-family: var(--font-mono);
          font-size: 11.5px;
          padding: 5px 12px;
          border-radius: var(--radius-pill);
          background: var(--accent-soft);
          color: var(--accent);
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        .project-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .project-title {
          font-size: 19px;
          font-weight: 700;
        }
        .project-year {
          font-size: 12.5px;
          color: var(--muted);
        }
        .project-desc {
          color: var(--muted);
          font-size: 14.5px;
          line-height: 1.6;
          margin-bottom: 22px;
        }
        .project-links {
          display: flex;
          gap: 12px;
        }
        .btn-sm {
          padding: 9px 18px;
          font-size: 13px;
        }
        @media (max-width: 760px) {
          .project-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
