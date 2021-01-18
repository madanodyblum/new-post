const {
  join
} = require("path");
const root = process.cwd();
module.exports = function (app, server, handler) {
  return {
    setup: function () {
      server.get("*", (req, res) => {
        if (req.url.startsWith("/sw")) {
          app.serveStatic(req, res, join(root, `./static/workbox/${req.url}`));
        } else if (req.url.startsWith("/static/workbox/")) {
          app.serveStatic(req, res, join(root, `.${req.url}`));
        } else {
          handler(req, res, req.url);
        }
      });
    },
  };
};