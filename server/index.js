require("dotenv").config({
  path: require("node:path").join(__dirname, ".env"),
});

const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern_offline_db";
const CLIENT_ORIGINS = (process.env.CLIENT_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim().replace(/\/+$/, ""))
  .filter(Boolean);

app.use((req, res, next) => {
  const origin = req.get("Origin");
  if (!origin) return next();

  const normalizedOrigin = origin.trim().replace(/\/+$/, "");

  const isLocalDevelopmentOrigin =
    process.env.NODE_ENV !== "production" &&
    /^https?:\/\/(localhost|127\.0\.0\.1):\d+$/.test(normalizedOrigin);

  const isAllowedOrigin =
    isLocalDevelopmentOrigin ||
    CLIENT_ORIGINS.includes(normalizedOrigin) ||
    /^https:\/\/debuger(-[a-z0-9-]+)?\.vercel\.app$/.test(normalizedOrigin);

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Vary", "Origin");

  if (req.method === "OPTIONS") {
    if (!isAllowedOrigin) {
      console.warn(`[CORS] Disallowed preflight origin: ${origin}`);
      return res.status(403).json({ message: "Origin is not allowed." });
    }
    return res.sendStatus(204);
  }

  if (!isAllowedOrigin) {
    console.warn(`[CORS] Disallowed origin: ${origin}`);
    return res.status(403).json({ message: "Origin is not allowed." });
  }

  return next();
});

app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => {
  const databaseConnected = mongoose.connection.readyState === 1;
  return res.status(databaseConnected ? 200 : 503).json({
    status: databaseConnected ? "ok" : "unavailable",
    database: databaseConnected ? "connected" : "disconnected",
  });
});

app.post("/api/users", async (req, res, next) => {
  const payload = req.body;
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return res.status(400).json({ message: "A JSON object is required." });
  }

  const { name, email, message } = payload;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return res
      .status(400)
      .json({ message: "Name, email, and message must be provided as text." });
  }

  const normalized = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  if (!normalized.name || !normalized.email || !normalized.message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required." });
  }
  if (
    normalized.name.length > 100 ||
    normalized.email.length > 254 ||
    normalized.message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)
  ) {
    return res
      .status(400)
      .json({ message: "Please provide valid contact details." });
  }

  try {
    const user = await User.create(normalized);
    return res.status(201).json({
      message: "Message received successfully.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        message: user.message,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    return next(error);
  }
});

app.get("/api/users", async (_req, res, next) => {
  if (
    process.env.NODE_ENV === "production" ||
    process.env.ENABLE_DEBUG_USERS_ROUTE !== "true"
  ) {
    return res.sendStatus(404);
  }

  try {
    const users = await User.find()
      .select("name email message createdAt")
      .sort({ createdAt: -1 })
      .limit(100)
      .lean();
    return res.status(200).json({ users });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error("API request failed:", error.message);
  const status = Number.isInteger(error.status) ? error.status : 500;
  const message =
    status >= 500
      ? "An internal server error occurred."
      : "Invalid request body.";
  return res.status(status).json({ message });
});

async function startServer() {
  if (process.env.NODE_ENV === "production") {
    const missingVariables = [];
    if (!process.env.MONGODB_URI) missingVariables.push("MONGODB_URI");

    if (CLIENT_ORIGINS.length === 0) {
      console.warn(
        "Warning: CLIENT_ORIGIN environment variable is not set. Using built-in whitelist.",
      );
    }

    if (missingVariables.length > 0) {
      console.error(
        `Missing required production environment variables: ${missingVariables.join(", ")}`,
      );
      process.exit(1);
    }
  }

  try {
    await mongoose.connect(MONGODB_URI);
    const connectionLabel = MONGODB_URI.startsWith("mongodb://127.0.0.1:27017/")
      ? "Offline 🔌"
      : "Remote ☁️";
    console.log("MongoDB Connected", connectionLabel);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
