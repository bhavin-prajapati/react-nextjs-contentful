const path = require("path");
const glob = require("glob");
require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_TOKEN: process.env.CTF_CDA_TOKEN,
    CTF_CPA_TOKEN: process.env.CTF_CPA_TOKEN
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );

    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  }
};
