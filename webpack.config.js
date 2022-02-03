module.exports = {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  devtool: false,

  resolve: {
    extensions: [".ts", ".js"],
  },
};
