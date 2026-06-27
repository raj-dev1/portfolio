import { useEffect, useRef, useState } from "react";
import { profile } from "../content.js";

const CODE_LINES = [
  { n: 1, html: `<span class="kw">const</span> <span class="var">developer</span> = {` },
  { n: 2, html: `  name: <span class="str">"${profile.name}"</span>,` },
  { n: 3, html: `  role: <span class="str">"${profile.role}"</span>,` },
  { n: 4, html: `  stack: [<span class="str">"React"</span>, <span class="str">"Node.js"</span>, <span class="str">"PostgreSQL"</span>],` },
  { n: 5, html: `  basedIn: <span class="str">"${profile.location}"</span>,` },
  { n: 6, html: `  <span class="cmt">// open to remote freelance work</span>` },
  { n: 7, html: `  available: <span class="bool">true</span>,` },
  { n: 8, html: `};` },
];

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0);
  const fullText = CODE_LINES.map((l) => l.html.replace(/<[^>]+>/g, "")).join("\n");
  const totalChars = fullText.length;
  const doneRef = useRef(false);

  useEffect(() => {
    if (doneRef.current) return;
    const id = setInterval(() => {
      setVisibleChars((v) => {
        if (v >= totalChars) {
          clearInterval(id);
          doneRef.current = true;
          return v;
        }
        return v + 2;
      });
    }, 16);
    return () => clearInterval(id);
  }, [totalChars]);

  // Figure out, per line, how much of it should be shown given visibleChars
  let consumed = 0;
  const renderedLines = CODE_LINES.map((line) => {
    const plain = line.html.replace(/<[^>]+>/g, "");
    const start = consumed;
    consumed += plain.length + 1; // +1 for the newline
    const charsForThisLine = Math.max(0, Math.min(plain.length, visibleChars - start));
    if (charsForThisLine <= 0) return { ...line, show: "" };
    if (charsForThisLine >= plain.length) return { ...line, show: line.html };
    // partial reveal: fall back to plain text slice (avoids cutting tags mid-way)
    return { ...line, show: plain.slice(0, charsForThisLine) };
  });

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow mono">{profile.availability}</p>
          <h1 className="hero-title">
            {profile.name}
            <span className="hero-role">{profile.role}</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View work
            </a>
            <a href="#contact" className="btn">
              Start a project →
            </a>
          </div>
          <div className="hero-meta mono">
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="hero-editor">
          <div className="editor-window">
            <div className="editor-titlebar">
              <div className="editor-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="editor-tabs">
                <span className="editor-tab active">developer.js</span>
              </div>
            </div>
            <div className="editor-body mono">
              <pre>
                {renderedLines.map((line) => (
                  <div className="code-line" key={line.n}>
                    <span className="line-no">{String(line.n).padStart(2, "0")}</span>
                    <code dangerouslySetInnerHTML={{ __html: line.show }} />
                  </div>
                ))}
                <span className="cursor">▍</span>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 168px 0 96px;
          border-bottom: 1px solid var(--border);
          background:
            radial-gradient(ellipse 70% 50% at 80% 0%, rgba(79,140,255,0.10), transparent 60%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(34px, 5vw, 52px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .hero-role {
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 500;
          color: var(--accent);
        }
        .hero-tagline {
          font-size: 17px;
          color: var(--muted);
          max-width: 460px;
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .hero-meta {
          font-size: 13px;
          color: var(--muted);
        }
        .editor-body {
          padding: 20px 0;
          font-size: 13.5px;
          line-height: 1.85;
          min-height: 230px;
        }
        .editor-body pre {
          white-space: pre-wrap;
          word-break: break-word;
        }
        .code-line {
          display: flex;
          gap: 18px;
          padding: 0 20px;
        }
        .line-no {
          color: #46505e;
          user-select: none;
          width: 16px;
          flex-shrink: 0;
          text-align: right;
        }
        .kw { color: var(--accent); }
        .str { color: var(--accent-2); }
        .cmt { color: #5b6675; }
        .bool { color: var(--green); }
        .var { color: #d2a8ff; }
        .cursor {
          margin-left: 56px;
          color: var(--accent);
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @media (max-width: 860px) {
          .hero { padding: 140px 0 64px; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
