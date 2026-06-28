import { useState } from "react";
import { contact, profile } from "../content.js";
import { API_URL } from "../config.js";
import Reveal from "./Reveal.jsx";
import { MailIcon, LocationIcon } from "./icons.jsx";

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

      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");

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
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Get In Touch</p>
            <h2 className="section-title">{contact.heading}</h2>
            <p className="section-subtitle">{contact.subheading}</p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <h3 className="contact-info-title">{contact.formTitle}</h3>
              <p className="contact-info-sub">{contact.formSubtitle}</p>

              <div className="info-rows">
                <a href={`mailto:${profile.email}`} className="info-row">
                  <span className="info-icon"><MailIcon /></span>
                  <span>{profile.email}</span>
                </a>
                <div className="info-row">
                  <span className="info-icon"><LocationIcon /></span>
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Carter"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="budget">Budget <span className="optional">(optional)</span></label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder="$1,000 – $5,000"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Please type your message here..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={status.state === "loading"}>
                {status.state === "loading" ? "Sending..." : "Send message"}
              </button>

              {status.state === "success" && <p className="form-status success" role="status">{status.message}</p>}
              {status.state === "error" && <p className="form-status error" role="alert">{status.message}</p>}
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 48px;
          align-items: start;
        }
        .contact-info-title {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .contact-info-sub {
          color: var(--muted);
          font-size: 15.5px;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        .info-rows {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .info-row {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14.5px;
          color: var(--text);
        }
        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--accent-soft);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-form-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-field label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }
        .optional {
          color: var(--muted);
          font-weight: 400;
        }
        .form-field input,
        .form-field textarea {
          background: var(--panel-2);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 14.5px;
          resize: vertical;
          transition: border-color 0.15s ease;
        }
        .form-field input:focus,
        .form-field textarea:focus {
          border-color: var(--accent);
        }
        .submit-btn {
          justify-content: center;
          margin-top: 4px;
        }
        .form-status { font-size: 13.5px; }
        .form-status.success { color: var(--green); }
        .form-status.error { color: var(--danger); }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
