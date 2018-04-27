const rules=require("./.eslint_rules")
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,//浏览器的全局变量
    node: true,//Node.js 全局变量和 Node.js 作用域
    es6:true,//支持除模块外所有 ECMAScript 6 特性
  },
  parser: "vue-eslint-parser",
  //定义全局变量
  //true代表允许重写、false代表不允许重写
  globals: {
    "document": true,
    "navigator": true,
    "window": true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  //配置第三方插件
  //在使用插件前要用npm安装它
  plugins: [
    'vue'
  ],
  rules: rules
};
