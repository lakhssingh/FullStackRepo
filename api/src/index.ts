import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/products/index.js";
import authRoutes from "./routes/auth/index.js";
import severless from "serverless-http";

const port = 3000;

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/products", productsRoutes);
app.use("/auth", authRoutes);

if (process.env.NODE_ENV === "dev") {
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
}

export const handler = severless(app);
