import express from "express";
import userRouter from "./routes/userRouter";
import bp from "body-parser";
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(bp.json());
app.use(cors());
app.use(bp.urlencoded({ extended: true }));
app.use(userRouter);

app.get("/", (req, res) => res.send("Hostfy API"));
app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
