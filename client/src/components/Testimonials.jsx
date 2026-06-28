import { useState } from "react";
import { testimonials } from "../content.js";
import Reveal from "./Reveal.jsx";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons.jsx";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.items.length;

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function next() {
    setIndex((i) => (i + 1) % total);
  }

  const current = testimonials.items[index];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Kind Words</p>
            <h2 className="section-title">{testimonials.heading}</h2>
            <p className="section-subtitle">{testimonials.subheading}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="testimonial-carousel">
            <button className="carousel-arrow" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeftIcon />
            </button>

            <div className="testimonial-card">
              <div className="stars">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <StarIcon key={i} className="star" />
                ))}
              </div>
              <p className="testimonial-quote">"{current.quote}"</p>
              <div className="testimonial-author">
                <span className="author-name">{current.name}</span>
                <span className="author-role">{current.role}</span>
                <span className="author-date">{current.date}</span>
              </div>
            </div>

            <button className="carousel-arrow" onClick={next} aria-label="Next testimonial">
              <ChevronRightIcon />
            </button>
          </div>

          <div className="carousel-dots">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .testimonial-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          max-width: 720px;
          margin: 0 auto;
        }
        .carousel-arrow {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--panel);
          border: 1px solid var(--border);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .carousel-arrow:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: scale(1.06);
        }
        .testimonial-card {
          flex: 1;
          background: linear-gradient(160deg, var(--panel), var(--panel-2));
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 36px 40px;
          text-align: center;
        }
        .stars {
          display: flex;
          justify-content: center;
          gap: 4px;
          color: var(--gold);
          margin-bottom: 18px;
        }
        .testimonial-quote {
          font-size: 16.5px;
          line-height: 1.75;
          color: var(--text);
          margin-bottom: 22px;
        }
        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .author-name {
          font-weight: 700;
          font-size: 15px;
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .author-role {
          font-size: 13px;
          color: var(--muted);
        }
        .author-date {
          font-size: 12px;
          color: var(--muted);
          opacity: 0.7;
          margin-top: 4px;
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border);
          border: none;
          padding: 0;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .dot.active {
          background: var(--gradient);
          transform: scale(1.3);
        }
        @media (max-width: 640px) {
          .testimonial-carousel { gap: 10px; }
          .testimonial-card { padding: 28px 22px; }
          .carousel-arrow { width: 38px; height: 38px; }
        }
      `}</style>
    </section>
  );
}
