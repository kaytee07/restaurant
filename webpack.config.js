const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module:{
      rules:[
          {
              test:/\.ttf$/i,
              type:"asset/resource"
          },
          {
            test:/\.css$/,
            use:["style-loader", "css-loader"]
          },
      ]
  }
};