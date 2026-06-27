// Set VITE_API_URL in your deployment environment to point at the deployed
// backend. Falls back to localhost for local development.
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
