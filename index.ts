import express from "express";
import userRouter from "./routes/userRouter";
import bp from "body-parser";

const app = express();
const PORT = 8000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(userRouter);

app.get("/", (req, res) => res.send("Hostfy API"));
app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
