const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, './src/index'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './out'),
    // 之前还需要一个插件，清理dist打包文件
    clean: true,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /.less$/,
        // style-loader 添加css到dom元素上
        // css-loader 处理css文件
        
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              // 在css-loader之前可以配置多少个loader
              importLoaders: 2,
            }
          },
          // postcss-loader预处理样式文
          // 例如自动添加前缀功能，注意需要额外添加postcss-loader
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // 使用未来的样式
                  // "postcss-preset-env",
                  // 自动天际前缀
                  'autoprefixer'
                ]
              }
            }
          },
          // 处理less样式文件，注意还需要另外按照less
          'less-loader',
        ]
      },
      {
        test: /.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  optimization: {
   moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks:  {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  plugins: [
    // 自动引入打包好的js和css文件
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new WebpackManifestPlugin(),
    // new BundleAnalyzerPlugin(),
    new BundleStatsWebpackPlugin({
      baseline: true
    })
  ]
}