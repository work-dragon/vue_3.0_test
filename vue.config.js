console.log(`当前项目为${process.env.VUE_APP_PROJECT}`)
module.exports = {
  // 基本路径 - 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录 - 当运行 build 时构建文件的目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",

  // pages: {
    // index: {
      // page 的入口
     // entry: `src/project/${process.env.VUE_APP_PROJECT}/main.ts`,
    //},
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/subpage/main.js",
  //},

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,

  // 放置静态资源的地方 (js/css/img/font/...)
  // assetsDir: "public/assets",

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
      },
    },
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require("os").cpus().length > 1,

  /**
   * PWA 插件配置相关配置
   * 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
   */
  pwa: {},

  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 编译完成是否打开网页
    host: "0.0.0.0", //指定使用地址，默认localhost 0.0.0.0 代表可以被外界访问
    port: 8080, // 访问端口
    https: true, // 是不是https请求
    // 热更新可以做到在不刷新网页的情况下，更新修改的模块，只编译变化的模块，而不用全部模块重新打包，大大提高开发效率，
    // 在未开启热更新的情况下，每次修改了模块，都会重新打包
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: null,
    // {
    // 设置代理
    // /ts代表一个普通的字符串可以是/api或者其他，
    // "/ts": {
    //   // 代理到哪个地址
    //   target: "http://11.11.11.111:8080/",
    //   // 开启代理：在本地创建一个虚拟服务器，发送请求、接受数据，不存在跨域问题。
    //   changeOrigin: true,
    //   ws: true,
    //   // 匹配所有的/ts替换为空
    //   pathRewrite: {
    //     "^/ts": "",
    //   },
    // },
    // },
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true,
    },
  },
  /**
   * 第三方插件配置
   */
  // pluginOptions:{}
};
