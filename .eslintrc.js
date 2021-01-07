module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", //输出检测关闭
    "no-trailing-whitespace": true, // 多余空格检测
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-constant-condition": [
      //不允许在条件中使用常量表达式，循环也要检查，容易造成浏览器卡死，可以使用递归代替。
      "error",
    ],
    "no-cond-assign": "error", //禁止条件表达式中出现赋值操作符
    "no-unreachable": "error", //return+console.log的调试方法，陋习
    "for-direction": "error", //强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    "no-dupe-args": "error", //禁止在 function 定义中出现重复的参数
    "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
    "no-duplicate-case": "error", //禁止重复 case 标签
    "no-empty-character-class": "error", //禁止在正则表达式中出现空字符集
    "no-ex-assign": "error", //禁止对 catch 子句中的异常重新赋值
    "no-func-assign": "error", //禁止对 function 声明重新赋值
    "no-invalid-regexp": "error", //禁止在 RegExp 构造函数中出现无效的正则表达式 (no-invalid-regexp)
    "no-obj-calls": "error", //禁止将全局对象当作函数进行调用(no- obj - calls)
    "no-regex-spaces": "error", //禁止正则表达式字面量中出现多个空格
    "no-sparse-arrays": "error", //禁用稀疏数组
    "no-template-curly-in-string": "error", //禁止在常规字符串中出现模板字面量占位符语法
    "no-unexpected-multiline": "error", //禁止使用令人困惑的多行表达式
    "no-unsafe-finally": "error", //禁止在 finally 语句块中出现控制流语句
    "valid-typeof": "error", //强制 typeof 表达式与有效的字符串进行比较
    "use-isnan": "error", //要求调用 isNaN()检查 NaN
    "array-callback-return": "error", //强制数组方法的回调函数中有 return 语句
    "block-scoped-var": "error", //把 var 语句看作是在块级作用域范围之内
    "consistent-return": "error", //要求使用一致的 return 语句
    "default-case": "error", //要求 Switch 语句中有 Default 分支
    "no-alert": "error", //当遇到 alert、prompt 和 confirm 时，该规则将发出警告
    "no-case-declarations": "error", //禁止在 case 或 default 子句中出现词法声明(no -case-declarations)
    "no-fallthrough": "error", //禁止 case 语句落空
    "no-new-wrappers": "error", //禁止原始包装实例
    "no-param-reassign": "error", //禁止对函数参数再赋值
    "no-proto": "error", //禁用__proto__
    "no-redeclare": "error", //禁止重新声明变量
    "no-self-assign": "error", //禁止自身赋值
    "no-self-compare": "error", //禁止自身比较
    "no-sequences": "error", //不允许使用逗号操作符
    "no-throw-literal": "error", //限制可以被抛出的异常
    "no-unmodified-loop-condition": "error", //禁用一成不变的循环条件
    "no-undef": "error", //禁用未声明的变量
    "no-use-before-define": "error", //当使用一个还未声明的标示符是会报警告。
    "no-class-assign": "error", //不允许修改类声明的变量
    "no-const-assign": "error", //不允许改变用const声明的变量
    "no-dupe-class-members": "error", //不允许类成员中有重复的名称
    "no-duplicate-imports": "error", //禁止重复导入
    "no-this-before-super": "error", //在构造函数中禁止在调用super()之前使用this或super
    "no-useless-computed-key": "error", //禁止在对象中使用不必要的计算属性
    "no-var": "error", //要求使用 let 或 const 而不是 var
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
