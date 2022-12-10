const express = require("express");
const morgan = require("morgan");
const todoRouter = require("./routes/routes");
const app = express();

const port = process.env.port || process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(todoRouter);

// app.post("/add", (req, res) => {
//   console.log(req.body);
// });

app.listen(port, () => {
  console.log("Server is up and running!");
});
