const path = require("path");

const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
};

// __dirname  代表当前文件夹目录之下

// 然后去craco.config.js文件中

// 调试中修改路径,并重新跑动程序

// 修改react-scripts 为craco

// 针对"@craco/craco": "^7.0.0-alpha.7",版本冲突问题采用指令 npm i craco-less@2.1.0-alpha.0
