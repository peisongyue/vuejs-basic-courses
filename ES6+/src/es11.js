// String.protype.matchAll
// TODO matchAll

// Dynamic import
// ES2020 提案 引入 import()，支持动态加载模块
// import 命令能够接受什么参数，import()就能接受什么参数，两者区别主要是后者为动态加载。
// import()返回一个 Promise 对象
// import()可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块
const someVariable = "user";

// import(`./some-modules/${someVariable}.js`)
//   .then((module) => {
//     // 业务逻辑
//     module.loadPageInto(main);
//   })
//   .catch((err) => {
//     // 加载失败
//   });

// if (condition) {
//   import("moduleA").then();
// } else {
//   import("moduleB").then();
// }

// Promise.allSettled
// TODO Promise allSettled all race any


// 空位合并操作符
// 提出原因: 弥补 逻辑或操作符(||) 将 空字符串,0,NaN判断为假值的不足
function checkReturn0(test) {
  return test || '666'
}
// 稍显麻烦
function checkReturn02(test) {
  return test !== undefined && test !== null ? test : "666";
}
console.log(checkReturn0(0));

// 空值合并操作符 ?? 只有当左侧为 null undefined 会返回右侧的值

// 简化
function checkReturn03(test) {
  return test ?? "666";
}
console.log(checkReturn03(0)); // null -> 666  0 -> 0

// 逻辑或运算符 || 只有左侧为 null 0 undefined NaN '' `` 

// 使用可选链操作符-?.

const obj = {
  school: {
    children: {

    },
    teacher: '张'
  },
  bank: {
    banker: '李'
  }
}
console.log(obj?.school?.teacher); // 张
console.log(obj?.bank?.teacher); // undefined