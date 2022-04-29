// 引入三个包
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
// 生产一个express 应用
const app = express();
// 获取complier对象
const config = require('./webpack.config.js')
const complier = webpack(config)

app.use(
  webpackDevMiddleWare(complier, {
    publicPath: config.output.publicPath
  })
)

app.listen(3010, function(){
  console.log('start serve')
})