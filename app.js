const express = require("express");
const morgan = require("morgan");
const routerAuth = require("./routes/auth.routes");
const routerTransfer = require("./routes/transfer.routes");
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/users", routerAuth);
app.use("/api/v1/transfers", routerTransfer);
module.exports = app;
