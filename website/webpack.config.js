module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                cacheDirectory: true,
                presets: ["env", "react"],
                plugins: ["transform-es2015-modules-amd"]
              },
            },
          ]
        },
      ],
    },
  }
}
