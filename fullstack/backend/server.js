import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js";
import emperors from "./api/emperors.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews", reviews);
app.use("/api/v1/emperors", emperors);
app.use("*", (req, res) =>
    res.status(404).json({ error: "not found" })
);

export default app;
