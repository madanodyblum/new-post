import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import { LoggerService } from "./logger";
import routes from "./routes";
const mongoose = require("./database/index");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require('cors');
require("dotenv").config();

//mongoose
{
  mongoose.init(function (err, db) {
    if (err) {
      LoggerService.error(err.message);
    }
  });
}

async function run() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  // standard express middlewares
  app.use(cors())
  app.use(helmet());
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use("/api/v1/", routes);

  // start HTTP server
  const httpServer = createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  });
}

process.on("unhandledRejection", (error) => {
  // Will print "unhandledRejection err is not defined"
  console.log("unhandledRejection", error);
});

run().then(() => console.log(`Server Successfully Started`));
