const winston = require("winston");

module.exports = {
  setup: function() {
    winston.setLevels(winston.config.cli.levels);
    winston.remove(winston.transports.Console);
    winston.add(winston.transports.Console, {
      colorize: true,
      timestamp: function () {
        const date = new Date();
        return (
          date.getMonth() +
          1 +
          "/" +
          date.getDate() +
          " " +
          date.toTimeString().substr(0, 8) +
          " [" +
          global.process.pid +
          "]"
        );
      },
      level: global.env === "production" ? "info" : "verbose",
    });
    
    winston.add(winston.transports.File, {
      filename: "logs/error.log",
      level: "error",
    });
    
    winston.err = function (err) {
      winston.error(err.stack);
    };
  },
  info: function(value) {
    winston.info(value);
  },
  error: function(err) {
    winston.error(err);
  }
}
