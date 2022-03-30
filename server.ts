import express from "express";
import cookieParser from "cookie-parser";
import { View } from "./views";

const SERVER_PORT = parseInt(process.env.PORT || "3000");

const app = express();
const view = new View();

app.set("trust proxy", 1);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const html = view.getForm();
  res.send(html);
});

app.get("/register", (req, res) => {
  res.send("<h1>Pages that should not be displayed on page reload after POST.</h1>");
});

app.post("/register", (req, res) => {
  const html = view.getConfirm(req.body.comment);
  res.status(303).send(html);
});

app.get("/register-history-push-state", (req, res) => {
  res.send("<h1>Pages that should not be displayed on page reload after POST.</h1>");
});

app.post("/register-history-push-state", (req, res) => {
  const html = view.getConfirmHistoryPushState(req.body.comment, req.url);
  res.status(303).send(html);
});

const httpServer = app.listen(SERVER_PORT, () => {
  console.log(`Serve start: http://localhost:${SERVER_PORT}`);
});

httpServer.keepAliveTimeout = 0;
