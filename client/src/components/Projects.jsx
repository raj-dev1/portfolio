import { projects } from "../content.js";
import Reveal from "./Reveal.jsx";
import { ArrowUpRightIcon } from "./icons.jsx";

export default function Projects() {
  const [featured, ...rest] = projects.items;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="eyebrow mono">selected work</p>
          <h2 className="section-title">{projects.heading}</h2>
        </Reveal>

        {featured && (
          <Reveal>
            <article className="featured-project">
              <div className="featured-image">
                <img src={featured.image} alt={`${featured.title} preview`} />
              </div>
              <div className="featured-body">
                <span className="featured-tag mono">Featured</span>
                <div className="featured-head">
                  <h3 className="featured-title mono">{featured.title}</h3>
                  <span className="project-year mono">{featured.year}</span>
                </div>
                <p className="featured-desc">{featured.description}</p>
                <div className="project-stack">
                  {featured.stack.map((tech) => (
                    <span key={tech} className="stack-tag mono">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={featured.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live demo <ArrowUpRightIcon />
                  </a>
                  <a href={featured.codeUrl} target="_blank" rel="noreferrer" className="btn">
                    Source <ArrowUpRightIcon />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="project-grid">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="project-card">
                <div className="project-image-wrap">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  <div className="project-image-overlay">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="overlay-btn">
                      View live <ArrowUpRightIcon />
                    </a>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-head">
                    <h3 className="project-title mono">{project.title}</h3>
                    <span className="project-year mono">{project.year}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-tag mono">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                      Live demo <ArrowUpRightIcon />
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-link">
                      Source <ArrowUpRightIcon />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .featured-project {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 0;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 28px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .featured-project:hover {
          border-color: var(--accent);
          box-shadow: 0 30px 60px -32px rgba(124, 58, 237, 0.32);
        }
        .featured-image {
          background: var(--panel-2);
          overflow: hidden;
        }
        .featured-image img {
          width: 100%;
          height: 100%;
          min-height: 280px;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .featured-project:hover .featured-image img {
          transform: scale(1.04);
        }
        .featured-body {
          padding: 36px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .featured-tag {
          display: inline-block;
          font-size: 11.5px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 5px 11px;
          border-radius: 999px;
          width: fit-content;
          margin-bottom: 16px;
        }
        .featured-head {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 12px;
        }
        .featured-title {
          font-size: 24px;
          font-weight: 600;
        }
        .featured-desc {
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }
        .stack-tag {
          font-size: 11.5px;
          padding: 4px 10px;
          border-radius: 5px;
          background: var(--accent-soft);
          color: var(--accent);
        }
        .featured-body .project-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

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
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 24px 50px -28px rgba(124, 58, 237, 0.3);
        }
        .project-image-wrap {
          position: relative;
          border-bottom: 1px solid var(--border);
          background: var(--panel-2);
          overflow: hidden;
        }
        .project-image-wrap img {
          width: 100%;
          aspect-ratio: 5 / 3;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .project-image-wrap img {
          transform: scale(1.06);
        }
        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(28, 23, 38, 0.78));
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-image-overlay {
          opacity: 1;
        }
        .overlay-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          font-weight: 500;
          background: var(--accent);
          color: #fff;
          padding: 8px 14px;
          border-radius: 6px;
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
        .project-links {
          display: flex;
          gap: 18px;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
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
        @media (max-width: 860px) {
          .featured-project {
            grid-template-columns: 1fr;
          }
          .featured-body {
            padding: 28px 24px;
          }
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
