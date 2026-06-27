import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SUBMISSIONS_FILE = path.join(__dirname, "submissions.json");

const app = express();
const PORT = process.env.PORT || 5000;

// ---- Middleware -----------------------------------------------------------

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (curl, server-to-server, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json({ limit: "10kb" }));

// Basic protection against contact-form spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: "Too many requests. Please try again later." },
});

// ---- Helpers ---------------------------------------------------------------

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function saveSubmissionLocally(submission) {
  let existing = [];
  if (fs.existsSync(SUBMISSIONS_FILE)) {
    try {
      existing = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, "utf-8"));
    } catch {
      existing = [];
    }
  }
  existing.push(submission);
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2));
}

function buildEmailHtml(submission) {
  return `
  <div style="background:#0a0e13;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:520px;margin:0 auto;background:#11161d;border:1px solid #232b36;border-radius:10px;overflow:hidden;">

      <div style="background:#161d27;padding:18px 24px;border-bottom:1px solid #232b36;">
        <span style="color:#4f8cff;font-family:monospace;font-size:14px;">&lt;/&gt; New project inquiry</span>
      </div>

      <div style="padding:28px 24px;color:#e8edf2;">
        <p style="margin:0 0 20px;font-size:14px;color:#8a97a6;">
          You just received a new message from your portfolio contact form.
        </p>

        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr>
            <td style="padding:8px 0;color:#8a97a6;font-size:13px;width:90px;">Name</td>
            <td style="padding:8px 0;color:#e8edf2;font-size:14px;">${escapeHtml(submission.name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#8a97a6;font-size:13px;">Email</td>
            <td style="padding:8px 0;font-size:14px;">
              <a href="mailto:${escapeHtml(submission.email)}" style="color:#4f8cff;text-decoration:none;">${escapeHtml(submission.email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#8a97a6;font-size:13px;">Budget</td>
            <td style="padding:8px 0;color:#e8edf2;font-size:14px;">${escapeHtml(submission.budget || "Not specified")}</td>
          </tr>
        </table>

        <div style="background:#161d27;border:1px solid #232b36;border-radius:8px;padding:16px 18px;margin-bottom:24px;">
          <p style="margin:0;font-size:13px;color:#8a97a6;margin-bottom:8px;">Message</p>
          <p style="margin:0;font-size:14.5px;color:#e8edf2;line-height:1.6;white-space:pre-wrap;">${escapeHtml(submission.message)}</p>
        </div>

        <a href="mailto:${escapeHtml(submission.email)}"
           style="display:inline-block;background:#4f8cff;color:#06090d;text-decoration:none;font-size:14px;font-weight:600;padding:11px 22px;border-radius:6px;">
          Reply to ${escapeHtml(submission.name.split(" ")[0])}
        </a>
      </div>

      <div style="padding:16px 24px;border-top:1px solid #232b36;">
        <p style="margin:0;font-size:11.5px;color:#5b6675;">
          Received ${new Date(submission.receivedAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  })} · sent via your portfolio site
        </p>
      </div>

    </div>
  </div>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getTransporter() {
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
}

// ---- Routes -----------------------------------------------------------------

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, message, budget } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: "Message is too long." });
  }

  const submission = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    budget: budget ? String(budget).slice(0, 100) : null,
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  // Always persist locally so nothing is lost even if email isn't configured
  try {
    saveSubmissionLocally(submission);
  } catch (err) {
    console.error("Failed to save submission locally:", err);
  }

  const transporter = getTransporter();

  if (!transporter) {
    console.log("📩 New contact form submission (email not configured):", submission);
    return res.json({
      success: true,
      message: "Message received. (Email delivery is not configured on the server yet.)",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Arjun Dev — Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: submission.email,
      subject: `📩 New project inquiry from ${submission.name}`,
      text: `Name: ${submission.name}\nEmail: ${submission.email}\nBudget: ${submission.budget || "Not specified"
        }\n\nMessage:\n${submission.message}`,
      html: buildEmailHtml(submission),
    });

    res.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Email send failed:", err);
    // Submission was still saved locally, so it's not lost
    res.status(502).json({
      error: "Message was received but email delivery failed. We'll still follow up.",
    });
  }
});

// 404 fallback for unknown API routes
app.use("/api", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`✅ Portfolio API server running on http://localhost:${PORT}`);
});