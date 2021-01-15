const fs = require("fs");
const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
const devConfig = {
  // 改变入口
  configureWebpack: {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "drag-for-vue.min.js",
      library: "drag-for-vue", // 指定的就是你使用require时的模块名
      libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    }
  }
}

const buildConfig = {
  // 改变入口
  configureWebpack: {
    entry: './src/views/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "drag-for-vue.min.js",
      library: "drag-for-vue", // 指定的就是你使用require时的模块名
      libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    }
  }
}

module.exports = process.env.NODE_ENV === "development" ? devConfig : buildConfig;


