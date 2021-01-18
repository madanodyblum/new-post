import * as winston from "winston";
export default winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),

    new winston.transports.File({
      filename: process.cwd() + "error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.File({ filename: process.cwd() + "/project.logs" }),
  ],
});
