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

function useTypedCode() {
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

  let consumed = 0;
  return CODE_LINES.map((line) => {
    const plain = line.html.replace(/<[^>]+>/g, "");
    const start = consumed;
    consumed += plain.length + 1;
    const charsForThisLine = Math.max(0, Math.min(plain.length, visibleChars - start));
    if (charsForThisLine <= 0) return { ...line, show: "" };
    if (charsForThisLine >= plain.length) return { ...line, show: line.html };
    return { ...line, show: plain.slice(0, charsForThisLine) };
  });
}

function useRotatingWord(words, interval = 2400) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFading(false);
      }, 280);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return { word: words[index], fading };
}

export default function Hero() {
  const renderedLines = useTypedCode();
  const { word, fading } = useRotatingWord(profile.rotatingWords);

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            <span className="mono">{profile.availability}</span>
          </div>

          <h1 className="hero-title">
            I turn ideas into
            <span className={`hero-rotator ${fading ? "fading" : ""}`}>{word}</span>
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
            <span>{profile.name}</span>
            <span className="meta-dot">·</span>
            <span>{profile.role}</span>
            <span className="meta-dot">·</span>
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
            radial-gradient(ellipse 70% 50% at 80% 0%, rgba(124,58,237,0.08), transparent 60%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .hero-copy {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-editor {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.15s;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-copy, .hero-editor { animation: none; }
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: var(--text);
          background: var(--panel);
          border: 1px solid var(--border);
          padding: 7px 14px 7px 11px;
          border-radius: 999px;
          margin-bottom: 26px;
          box-shadow: 0 2px 10px -4px rgba(28, 23, 38, 0.08);
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          position: relative;
          flex-shrink: 0;
        }
        .status-dot::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: var(--green);
          opacity: 0.4;
          animation: pulse 2s ease-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.6); opacity: 0.5; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .status-dot::after { animation: none; opacity: 0; }
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4.6vw, 48px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hero-rotator {
          color: var(--accent);
          display: inline-block;
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .hero-rotator.fading {
          opacity: 0;
          transform: translateY(6px);
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
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
          flex-wrap: wrap;
        }
        .meta-dot { color: var(--border); }

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
          color: #c9c2d8;
          user-select: none;
          width: 16px;
          flex-shrink: 0;
          text-align: right;
        }
        .kw { color: var(--accent); }
        .str { color: var(--accent-2); }
        .cmt { color: #9b93ab; }
        .bool { color: var(--green); }
        .var { color: #be185d; }
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
