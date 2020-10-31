const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  return {
    entry: './src/ui/ui.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.module\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.sass', '.css']
    },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'js/ui.js',
    },
    devtool: isDevelopment?"source-map":false,
    watchOptions: {
      ignored: ["node_modules","app","public"]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/style.css',
        chunkFilename: 'css/[id].css'
      })
    ]
  }};