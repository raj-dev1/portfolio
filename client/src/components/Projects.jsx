import { projects } from "../content.js";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="eyebrow mono">03 · selected work</p>
        <h2 className="section-title">{projects.heading}</h2>

        <div className="project-grid">
          {projects.items.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>

              <div className="project-body">
                <div className="project-head">
                  <h3 className="project-title mono">{project.title}</h3>
                  <span className="project-year mono">{project.year}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-tag mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                    Live demo ↗
                  </a>
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-link">
                    Source ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .project-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .project-image-wrap {
          border-bottom: 1px solid var(--border);
          background: var(--panel-2);
        }
        .project-image-wrap img {
          width: 100%;
          aspect-ratio: 5 / 3;
          object-fit: cover;
        }
        .project-body {
          padding: 22px;
        }
        .project-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .project-title {
          font-size: 17px;
          font-weight: 600;
        }
        .project-year {
          font-size: 12px;
          color: var(--muted);
        }
        .project-desc {
          color: var(--muted);
          font-size: 14.5px;
          margin-bottom: 18px;
        }
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }
        .stack-tag {
          font-size: 11.5px;
          padding: 4px 9px;
          border-radius: 5px;
          background: rgba(79, 140, 255, 0.1);
          color: var(--accent);
        }
        .project-links {
          display: flex;
          gap: 18px;
        }
        .project-link {
          font-size: 13.5px;
          color: var(--text);
          border-bottom: 1px solid var(--border);
          padding-bottom: 2px;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .project-link:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        @media (max-width: 760px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
