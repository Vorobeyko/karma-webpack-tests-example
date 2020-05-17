module.exports = {
  // entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          "style-loader", 
        { 
          loader: "css-loader",
          options: {
            importLoaders: 1,
            sourceMap: false
          }
        }, 
      ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    // Some tests import fs
    fs: 'empty',
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    compress: true,
    port: 3000
  }
};
