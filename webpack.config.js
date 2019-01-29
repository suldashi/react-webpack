module.exports = {
    entry: './src/ui/ui.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/public/js',
      publicPath: '/',
      filename: 'ui.js'
    },
    devServer: {
      contentBase: './public/js'
    },
    watch: true,
    watchOptions: {
      ignored: ["node_modules","app","public"]
    }
  };