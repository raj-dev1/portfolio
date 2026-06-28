import { about, profile } from "../content.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal>
          <div className="about-illustration">
            <div className="illustration-glow" />
            <div className="illustration-panel">
              <span className="illustration-mark">{"</>"}</span>
              <div className="illustration-dots">
                <span /><span /><span />
                <span /><span /><span />
                <span /><span /><span />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="about-text">
            <p className="eyebrow">About</p>
            <h2 className="section-title">{about.heading}</h2>
            <div className="about-paragraphs">
              {about.paragraphs.map((p, i) => (
                <p className="about-p" key={i}>{p}</p>
              ))}
            </div>
            <a href={profile.resumeUrl} download className="btn btn-primary">
              Download Resume ↓
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: center;
        }
        .about-illustration {
          position: relative;
          aspect-ratio: 4 / 5;
        }
        .illustration-glow {
          position: absolute;
          inset: 8%;
          border-radius: var(--radius);
          background: var(--gradient);
          filter: blur(60px);
          opacity: 0.3;
        }
        .illustration-panel {
          position: relative;
          height: 100%;
          border-radius: var(--radius);
          background: linear-gradient(160deg, var(--panel), var(--panel-2));
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .illustration-mark {
          font-family: var(--font-mono);
          font-size: 64px;
          font-weight: 700;
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .illustration-dots {
          position: absolute;
          bottom: 28px;
          right: 28px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .illustration-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--border);
        }
        .about-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }
        .about-p {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.75;
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-illustration {
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
