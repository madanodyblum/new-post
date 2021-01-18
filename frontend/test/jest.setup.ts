// #region Global Imports
import dotenv from "dotenv";
import { setConfig } from "next/config";
import "@testing-library/jest-dom";
// #endregion Global Imports

dotenv.config({ path: ".development.env" });

setConfig({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
});
