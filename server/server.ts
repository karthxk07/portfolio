
// server.ts
import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// __dirname fix for ES modules (remove if using CommonJS)
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// SPA fallback
app.all("{*splat}", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
