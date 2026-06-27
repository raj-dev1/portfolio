import { useState } from "react";
import { contact, profile } from "../content.js";
import { API_URL } from "../config.js";

const initialForm = { name: "", email: "", budget: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus({ state: "success", message: data.message || "Message sent!" });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Couldn't send your message. Please email me directly.",
      });
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow mono">04 · get in touch</p>
          <h2 className="section-title">{contact.heading}</h2>
          <p className="contact-sub">{contact.subheading}</p>
          <p className="contact-desc">{contact.description}</p>

          <a href={`mailto:${profile.email}`} className="contact-email mono">
            {profile.email}
          </a>

          <div className="social-links">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form className="editor-window contact-form" onSubmit={handleSubmit}>
          <div className="editor-titlebar">
            <div className="editor-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="editor-tabs">
              <span className="editor-tab active">message.send()</span>
            </div>
          </div>

          <div className="form-body">
            <label className="form-label mono" htmlFor="name">
              name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
            />

            <label className="form-label mono" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
            />

            <label className="form-label mono" htmlFor="budget">
              budget <span className="optional">(optional)</span>
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              value={form.budget}
              onChange={handleChange}
              placeholder="$1,000 – $5,000"
            />

            <label className="form-label mono" htmlFor="message">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />

            <button type="submit" className="btn btn-primary" disabled={status.state === "loading"}>
              {status.state === "loading" ? "Sending..." : "Send message"}
            </button>

            {status.state === "success" && (
              <p className="form-status success" role="status">
                {status.message}
              </p>
            )}
            {status.state === "error" && (
              <p className="form-status error" role="alert">
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>

      <style>{`
        .contact { border-bottom: none; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: start;
        }
        .contact-sub {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .contact-desc {
          color: var(--muted);
          max-width: 420px;
          margin-bottom: 28px;
        }
        .contact-email {
          display: inline-block;
          font-size: 17px;
          color: var(--accent);
          border-bottom: 1px solid var(--accent);
          padding-bottom: 3px;
          margin-bottom: 24px;
        }
        .social-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }
        .social-links a {
          font-size: 13.5px;
          color: var(--muted);
          transition: color 0.15s ease;
        }
        .social-links a:hover {
          color: var(--text);
        }
        .form-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }
        .form-label {
          font-size: 12.5px;
          color: var(--muted);
          margin-bottom: 8px;
          margin-top: 16px;
        }
        .form-label:first-child {
          margin-top: 0;
        }
        .optional {
          color: #4a5560;
        }
        .form-body input,
        .form-body textarea {
          width: 100%;
          background: var(--panel-2);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 11px 14px;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 14.5px;
          resize: vertical;
          transition: border-color 0.15s ease;
        }
        .form-body input:focus,
        .form-body textarea:focus {
          border-color: var(--accent);
        }
        .form-body button {
          margin-top: 22px;
          justify-content: center;
        }
        .form-status {
          margin-top: 14px;
          font-size: 13.5px;
        }
        .form-status.success { color: var(--green); }
        .form-status.error { color: var(--danger); }
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
