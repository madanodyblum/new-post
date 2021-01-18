// NOTE Now we should edit PWA proccess
// TODO Find out how to impelement pwa for next js

// server.js
const next = require("next");
const routes = require("./routes");
const compression = require("compression");

require("dotenv").config();
//Config
const app = next({
  dev: process.env.NODE_ENV !== "production",
});
const handler = routes.getRequestHandler(app);
const PORT = process.env.PORT || 4000;

//Winston
const winston = require("./server-core-modules/winston");
winston.setup();

// With express
const express = require("express");
app.prepare().then(() => {
  const server = express().use(handler);

  winston.info("routes", routes);
  winston.info(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    server.use(compression());

    require("./server-core-modules/pwa")(app, server, handler).setup();
  } else {
    server.get("*", (req, res) => {
      handler(req, res, req.url);
    });
  }
  // require('./server-core-modules/cache')(server).setup(); When I comment this line PWA start working.

  server.listen(PORT, (err) => {
    if (err) throw err;
    winston.info(`> Live @ http://localhost:${PORT}`);
  });
});