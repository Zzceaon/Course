(function () {
  'use strict';

  const add = (a, b) => {
    return a + b
  };

  // 只用到了 add, 为了优化代码体积, 可以直接删除
  // rollup(打包工具)
  console.log(add(1, 2));
  // const a = 123
  // const b = 123
  // d.js -> math.js 需要一个地方引入 d.js

}());
