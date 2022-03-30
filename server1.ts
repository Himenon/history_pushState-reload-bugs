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

app.post("/register", (req, res) => {
  const html = view.getConfirm({
    comment: req.body.comment,
  });
  res.send(html);
});

app.listen(SERVER_PORT, () => {
  console.log(`Serve start: http://localhost:${SERVER_PORT}`);
});
