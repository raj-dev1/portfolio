# Developer Portfolio — React + Node.js

Production-ready freelance developer portfolio. Dark, "code editor" themed UI built for
attracting foreign/international freelance clients.

## Structure

```
portfolio/
├── client/   → React (Vite) frontend
└── server/   → Node.js + Express backend (handles the contact form)
```

## Quick start

### 1. Backend (server)

```bash
cd server
npm install
cp .env.example .env     # fill in your email credentials (optional, see below)
npm start                 # runs on http://localhost:5000
```

### 2. Frontend (client)

```bash
cd client
npm install
npm run dev                # runs on http://localhost:5173
```

The frontend is already configured to send contact form submissions to
`http://localhost:5000/api/contact` in development (see `client/src/config.js`).
For production, set `VITE_API_URL` to your deployed backend URL.

## What you need to customize

Everything that is content (not styling/logic) lives in one place:
`client/src/content.js` — your name, role, bio, skills, and project list.
Edit that single file first; the whole site updates from it.

Replace the placeholder project images in `client/public/projects/` with real
screenshots of your work (same filenames, or update the paths in `content.js`).

## Contact form / email setup

The backend uses **Nodemailer** with Gmail SMTP by default. To make the contact
form actually email you:

1. Create a Gmail App Password (Google Account → Security → App Passwords).
2. In `server/.env`, set:
   ```
   EMAIL_USER=youraddress@gmail.com
   EMAIL_PASS=your_16_char_app_password
   EMAIL_TO=youraddress@gmail.com
   ```
3. Restart the server.

If you don't set these, submissions are simply logged to the server console
and saved to `server/submissions.json` — so the form still works for testing
without crashing.

## Deployment

- **Frontend**: deploy the `client` folder to Vercel / Netlify (build command
  `npm run build`, output dir `dist`).
- **Backend**: deploy the `server` folder to Render / Railway / Fly.io (or any
  Node host). Set the same environment variables there.
- After deploying the backend, set `VITE_API_URL` in the frontend's environment
  variables to the backend's public URL, then redeploy the frontend.

## Tech

- React 18 + Vite
- Plain CSS (CSS variables, no framework — keeps it fast and easy to restyle)
- Express + Nodemailer + CORS + dotenv
