// const withSass = require("@zeit/next-sass");
// module.exports = withSass();

const withCSS = require("@zeit/next-css");
const NextWorkboxPlugin = require("next-workbox-webpack-plugin");

module.exports = withCSS({
  webpack(config, { isServer, buildId, dev, config: { distDir } }) {
    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          distDir,
          buildId,
        }),
      );
    }

    return config;
  },
  module: {
    loaders: [
      {
        test: /plugin\.css$/,
        loaders: ["style-loader", "css"],
      },
    ],
  },
  env: {
    APP_URL: process.env.APP_URL,
  },
});
