module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /**
   *  webpack 配置
   */
  // chainWebPack: _config => { },
  // configureWebPack: _config => { },

  // 生成环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css 相关配置
  css: {
    // 是否使用 css 分离插件
    extract: false,
    // 开启 css source maps
    sourceMap: false,
    // 因为配置了loaderOptions.css, 尽管requireModuleExtension的值为默认值，我们也需要指出
    requireModuleExtension: true,
    // css 预设器 配置项
    loaderOptions: {
      // 给 sass-loader 传递选项
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      sass: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        prependData: '@import "~@/styles/index.scss";',
      }
    },
    // 启用 css modules for all css / pre -processor files
    modules: false
  },
  parallel: require("os").cpus().length > 1,
  /**
   * PWA 插件配置相关配置
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 编译完成是否打开网页
    host: "0.0.0.0", //指定使用地址，默认localhost 0.0.0.0 代表可以被外界访问
    port: 8080, // 访问端口
    https: true, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: null, // 设置代理
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    }
  }
  /**
   * 第三方插件配置
   */
  // pluginOptions:{}
};
