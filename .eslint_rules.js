<!--配置规则-->
<!--"off" 或 0 - 关闭规则-->
<!--"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)-->
<!--"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)-->
module.exports={
  // 可以使用tabs
  "no-tabs":"off",
  <!--要求或禁止使用严格模式指令-->
  "strict": 0,
  <!--要求或禁止末尾逗号-->
  "comma-dangle": 2,
  <!--禁止条件表达式中出现赋值操作符-->
  "no-cond-assign": 2,
  <!--禁止在条件中使用常量表达式-->
  "no-constant-condition": 2,
  <!--禁用 debugger-->
  "no-debugger": 2,
  <!--禁止 function 定义中出现重名参数-->
  "no-dupe-args": 2,
  <!--禁止不必要的括号-->
  "no-extra-parens": 2,
  <!--禁止不必要的分号-->
  "no-extra-semi": 2,
  <!--禁止对 function 声明重新赋值-->
  "no-func-assign": 2,
  <!--禁止 RegExp 构造函数中存在无效的正则表达式字符串-->
  "no-invalid-regexp": 2,
  <!--禁止在字符串和注释之外不规则的空白-->
  "no-irregular-whitespace": 2,
  <!--禁止正则表达式字面量中出现多个空格-->
  "no-regex-spaces": 2,
  <!--禁用稀疏数组-->
  "no-sparse-arrays": 2,
  <!--禁止在return、throw、continue 和 break 语句之后出现不可达代码-->
  "no-unreachable": 2,
  <!--强制 getter 和 setter 在对象中成对出现-->
  "accessor-pairs": 2,
  <!--强制数组方法的回调函数中有 return 语句-->
  "array-callback-return": 2,
  <!--强制把变量的使用限制在其定义的作用域范围内-->
  "block-scoped-var": 2,
  <!--指定程序中允许的最大环路复杂度-->
  "complexity": 2,
  <!--要求 switch 语句中有 default 分支-->
  "default-case": 2,
  <!--强制尽可能地使用点号-->
  "dot-notation": 2,
  <!--要求使用 === 和 !==-->
  "eqeqeq": 2,
  <!--要求 for-in 循环中有一个 if 语句-->
  "guard-for-in": 2,
  <!--禁用 arguments.caller 或 arguments.callee-->
  "no-caller": 2,
  <!--不允许在 case 子句中使用词法声明-->
  "no-case-declarations": 2,
  <!--禁止除法操作符显式的出现在正则表达式开始的位置-->
  "no-div-regex": 2,
  <!--禁止 if 语句中 return 语句之后有 else 块-->
  "no-else-return": 2,
  <!--禁止使用空解构模式-->
  "no-empty-pattern": 2,
  <!--禁止在没有类型检查操作符的情况下与 null 进行比较-->
  "no-eq-null": 2,
  <!--禁用 eval()-->
  "no-eval": 2,
  <!--禁止不必要的 .bind() 调用-->
  "no-extra-bind": 2,
  <!--禁用不必要的标签-->
  "no-extra-label": 2,
  <!--禁止使用短符号进行类型转换-->
  "no-implicit-coercion": 2,
  <!--禁止在全局范围内使用变量声明和 function 声明-->
  "no-implicit-globals": 2,
  <!--禁止使用类似 eval() 的方法-->
  "no-implied-eval": 2,
  <!--禁用 __iterator__ 属性-->
  "no-iterator": 2,
  <!--禁用标签语句-->
  "no-labels": 2,
  <!--禁用不必要的嵌套块-->
  "no-lone-blocks": 2,
  <!--禁止在循环中出现 function 声明和表达式-->
  "no-loop-func": 2,
  <!--禁止使用多行字符串-->
  "no-multi-str": 2,
  <!--禁止对原生对象赋值-->
  "no-native-reassign": 2,
  <!--禁止对 String，Number 和 Boolean 使用 new 操作符-->
  "no-new-wrappers": 2,
  <!--禁用八进制字面量-->
  "no-octal": 2,
  <!--禁止在字符串中使用八进制转义序列-->
  "no-octal-escape": 2,
  <!--禁止对 function 的参数进行重新赋值-->
  "no-param-reassign": 2,
  <!--禁用 __proto__ 属性-->
  "no-proto": 2,
  <!--禁止多次声明同一变量-->
  "no-redeclare": 2,
  <!--禁止使用 javascript: url-->
  "no-script-url": 2,
  <!--禁止自我赋值-->
  "no-self-assign": 2,
  <!--不要和自身作比较-->
  "no-self-compare": 2,
  <!--禁用逗号操作符-->
  "no-sequences": 2,
  <!--禁用一成不变的循环条件-->
  "no-unmodified-loop-condition": 2,
  <!--禁止不必要的 .call() 和 .apply()-->
  "no-useless-call": 2,
  <!--禁止不必要的字符串字面量或模板字面量的连接-->
  "no-useless-concat": 2,
  <!--禁用 void 操作符-->
  "no-void": 2,
  <!--禁止在注释中使用特定的警告术语-->
  "no-warning-comments": 2,
  <!--禁用 with 语句-->
  "no-with": 2,
  <!--要求所有的 var 声明出现在它们所在的作用域顶部-->
  "vars-on-top": 2,
  <!--立即执行函数需要用圆括号包围-->
  "wrap-iife": 2,
  <!--要求或禁止 “Yoda” 条件-->
  "yoda": 2,

  <!--禁止 catch 子句的参数与外层作用域中的变量同名-->
  "no-catch-shadow": 2,
  <!--禁用特定的全局变量-->
  "no-restricted-globals": 2,
  <!--禁止变量声明与外层作用域的变量同名-->
  "no-shadow": 2,
  //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
  "no-undef": 2,
  <!--禁止将变量初始化为 undefined-->
  "no-undef-init": 2,
  <!--禁止将 undefined 作为标识符-->
  "no-undefined": 2,
  <!--禁止在变量定义之前使用它们-->
  "no-use-before-define": [2, { "functions": false }],
  <!--强制数组方括号中使用一致的空格-->
  "array-bracket-spacing": 2,
  <!--强制在代码块中使用一致的大括号风格-->
  "brace-style": 2,
  <!--强制使用骆驼拼写法命名约定-->
  "camelcase": 2,
  <!--强制在计算的属性的方括号中使用一致的空格-->
  "computed-property-spacing": 2,
  <!--当获取当前执行环境的上下文时，强制使用一致的命名-->
  "consistent-this": [2, "self", "vm"],
  <!--强制一致地使用 function 声明或表达式-->
  "func-style": [2, "declaration"],
  <!--禁用指定的标识符-->
  "id-blacklist": 2,
  <!--要求标识符匹配一个指定的正则表达式-->
  "id-match": 2,
  <!--强制在 JSX 属性中一致地使用双引号或单引号-->
  "jsx-quotes": 2,
  <!--强制使用一致的换行风格-->
  "linebreak-style": ["error", "windows"],
  <!--强制可嵌套的块的最大深度-->
  "max-depth": 2,
  <!--强制回调函数最大嵌套深度-->
  "max-nested-callbacks": 2,
  <!--要求或禁止 var 声明语句后有一行空行-->
  "newline-after-var": 2,
  <!--newline-per-chained-call-->
  "newline-per-chained-call": 2,
  <!--禁用 Array 构造函数-->
  "no-array-constructor": 2,
  <!--禁用按位运算符-->
  "no-bitwise": 2,
  <!--禁用 continue 语句-->
  "no-continue": 2,
  <!--禁止在代码后使用内联注释-->
  "no-inline-comments": 2,
  <!--禁止空格和 tab 的混合缩进-->
  "no-mixed-spaces-and-tabs": 2,
  <!--禁用否定的表达式-->
  "no-negated-condition": 2,
  <!--禁用嵌套的三元表达式-->
  "no-nested-ternary": 2,
  <!--禁用一元操作符 ++ 和 -- -->
  "no-plusplus": 2,
  <!--禁用特定的语法-->
  "no-restricted-syntax": 2,
  <!--禁用行尾空格-->
  "no-trailing-spaces": 2,
  <!--禁止属性前有空白-->
  "no-whitespace-before-property": 2,
  <!--强制在大括号中使用一致的空格-->
  "object-curly-spacing": 2,
  <!--要求或禁止在可能的情况下使用简化的赋值操作符-->
  "operator-assignment": 2,
  <!--要求对象字面量属性名称用引号括起来-->
  "quote-props": [2, "as-needed"],
  <!--强制使用一致的反勾号、双引号或单引号-->
  "quotes": [2, "single"],
  <!--强制在 function的左括号之前使用一致的空格-->
  "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
  <!--要求正则表达式被括号括起来-->
  "wrap-regex": 2,
  <!--禁止不明用途的箭头-->
  "no-confusing-arrow": 2,
  <!--禁止修改 const 声明的变量-->
  "no-const-assign": 2,
  <!--禁止类成员中出现重复的名称-->
  "no-dupe-class-members": 2,
  <!--禁止在全局变量上使用new操作符-->
  "no-new-symbol": 2,
  <!--通过import导入时不允许指定模块-->
  "no-restricted-imports": 2,
  <!--禁止在构造函数中，在调用 super() 之前使用 this 或 super-->
  "no-this-before-super": 2,
  <!--禁用不必要的构造函数-->
  "no-useless-constructor": 2,
  <!--要求使用 let 或 const 而不是 var-->
  "no-var": 2,
  <!--要求或禁止对象字面量中方法和属性使用简写语法-->
  "object-shorthand": 0,
  <!--要求使用箭头函数作为回调-->
  "prefer-arrow-callback": 2,
  <!--要求使用 const 声明那些声明后不再被修改的变量-->
  "prefer-const": 2,
  <!--要求在合适的地方使用 Reflect 方法-->
  "prefer-reflect": 0,
  <!--要求使用扩展运算符而非 .apply()-->
  "prefer-spread": 2,
  <!--要求使用模板字面量而非字符串连接-->
  "prefer-template": 2,
  <!--要求 generator 函数内有 yield-->
  "require-yield": 2,
  <!--要求或禁止模板字符串中的嵌入表达式周围空格的使用-->
  "template-curly-spacing": 2,
  <!--要求或禁止模板字符串中的嵌入表达式周围空格的使用-->
  "yield-star-spacing": 2,
  // 箭头函数中，在需要的时候，在参数外使用小括号（只有一个参数时，可以不适用括号，其它情况下都需要使用括号）
  "arrow-parens": [2, "as-needed"],
  //箭头函数中的箭头前后需要留空格
  "arrow-spacing": [2, { "before": true, "after": true }],
  //如果代码块是单行的时候，代码块内部前后需要留一个空格
  "block-spacing": [2, "always"],
  //在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
  "comma-spacing": [2, { "before": false, "after": true }],
  //如果逗号可以放在行首或行尾时，那么请放在行尾
  "comma-style": [2, "last"],
  //在constructor函数中，如果classes是继承其他class，那么请使用super。否者不使用super
  "constructor-super": 2,
  //在if-else语句中，如果if或else语句后面是多行，那么必须加大括号。如果是单行就应该省略大括号。
  "curly": [2, "multi-line"],
  //该规则规定了.应该放置的位置，
  "dot-location": [2, "property"],
  //该规则要求代码最后面需要留一空行，（仅需要留一空行）
  "eol-last": 2,
  //该规则规定了generator函数中星号两边的空白。
  "generator-star-spacing": [2, { "before": true, "after": true }],
  // 规定callback 如果有err参数，只能写出err 或者 error .
  "handle-callback-err": [2, "^(err|error)$" ],
  //这个就是关于用什么来缩进了
  "indent": 0,
  // keyword 前后需要空格
  "keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],
  //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格
  "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
  //构造函数首字母大写
  "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
  //在使用构造函数时候，函数调用的圆括号不能够省略
  "new-parens": 2,
  //禁止覆盖class命名，也就是说变量名不要和class名重名
  "no-class-assign": 2,
  //禁止使用delete删除var申明的变量
  "no-delete-var": 2,
  //在对象字面量中，禁止使用重复的key
  "no-dupe-keys": 2,
  //在switch语句中禁止重复的case
  "no-duplicate-case": 2,
  //禁止使用不匹配任何字符串的正则表达式
  "no-empty-character-class": 2,
  //禁止对catch语句中的参数进行赋值
  "no-ex-assign": 2,
  //禁止扩展原生对象
  "no-extend-native": 2,
  //在一个本来就会自动转化为布尔值的上下文中就没必要再使用!! 进行强制转化了。
  "no-extra-boolean-cast": 2,
  //这条规则，简单来说就是在case语句中尽量加break，避免不必要的fallthrough错误，如果需要fall through，那么看官网。
  "no-fallthrough": 2,
  //禁止数字字面量中使用前导和末尾小数点;简单来说不要写这样的数字.2 2.。应该写全，2.2 2.0 .
  "no-floating-decimal": 2,
  //禁止在代码块中定义函数（下面的规则仅限制函数）
  "no-inner-declarations": [2, "functions"],
  //label和var申明的变量不能重名
  "no-label-var": 2,
  //顾名思义，该规则保证了在逻辑表达式、条件表达式、
  //申明语句、数组元素、对象属性、sequences、函数参数中不使用超过一个的空白符。
  "no-multi-spaces": 2,
  //空行不能够超过2行
  "no-multiple-empty-lines": [2, { "max": 2 }],
  //在in操作符左边的操作项不能用! 例如这样写不对的：if ( !a in b) { //dosomething }
  "no-negated-in-lhs": 2,
  //当我们使用new操作符去调用构造函数时，需要把调用结果赋值给一个变量。
  "no-new": 2,
  //该规则保证了不使用new Function(); 语句。
  "no-new-func": 2,
  //不要通过new Object（），来定义对象
  "no-new-object": 2,
  //禁止把require方法和new操作符一起使用。
  "no-new-require": 2,
  //禁止无意得把全局对象当函数调用了，比如下面写法错误的：Math(), JSON()
  "no-obj-calls": 2,
  //return语句中不要写赋值语句
  "no-return-assign": 2,
  //禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
  "no-shadow-restricted-names": 2,
  //函数调用时，圆括号前面不能有空格
  "no-spaced-func": 2,
  //严格限制了抛出错误的类型，简单来说只能够抛出Error生成的错误。但是这条规则并不能够保证你只能够
  //抛出Error错误。详细见官网
  "no-throw-literal": 2,
  //禁止在不需要分行的时候使用了分行
  "no-unexpected-multiline": 2,
  //禁止使用没有必要的三元操作符，因为用些三元操作符可以使用其他语句替换
  "no-unneeded-ternary": [2, { "defaultAssignment": false }],
  //没有定义了没有被使用到的变量
  "no-unused-vars": [2, { "vars": "all", "args": "none" }],
  //在某些场景只能使用一个var来申明变量
  "one-var": [2, { "initialized": "never" }],
  //在进行断行时，操作符应该放在行首还是行尾。并且还可以对某些操作符进行重写。
  "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],
  //在使用parseInt() 方法时，需要传递第二个参数，来帮助解析，告诉方法解析成多少进制。
  "radix": 0,
  //这就是分号党和非分号党关心的了，我们还是选择加分号
  "semi": [2, "always"],
  //该规则规定了分号前后的空格，具体规定如下。
  "semi-spacing": [2, { "before": false, "after": true }],
  //代码块前面需要加空格
  "space-before-blocks": [2, "always"],
  //圆括号内部不需要加空格
  "space-in-parens": [2, "never"],
  //操作符前后需要加空格
  "space-infix-ops": 2,
  //一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
  "space-unary-ops": [2, { "words": true, "nonwords": false }],
  //评论符号｀／*｀ ｀／／｀，后面需要留一个空格
  "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }],
  //推荐使用isNaN方法，而不要直接和NaN作比较
  "use-isnan": 2,
  //在使用typeof操作符时，作比较的字符串必须是合法字符串eg:'string' 'object'
  "valid-typeof": 2,

};
