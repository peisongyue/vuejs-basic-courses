const MyPromise = require('./MyPromise')
// MyPromise.resolve().then(() => {
//   console.log(0);
//   return 4
// }).then((res) => {
//   console.log(res);
// })
// MyPromise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(5);
// }).then(() => {
//   console.log(6);
// })
const promise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('success')
  // }, 2000)
  // reject('err')
  resolve('success')
  // throw new Error('执行器错误')
})

promise.then(value => {
  console.log('resolve', value);
  return '111'
}).then((data) => {
  console.log('then return', data);
})
// promise.then().then().then(value => console.log(value))

// **** 捕获错误，及then链式调用其他状态代码补充 **** 
// promise.then(value => {
//   console.log(1);
//   console.log('resolve', value);
// }, reason => {
//   console.log(2);
//   console.log('reject', reason.message);
// }).then(value => {
//   console.log(3);
//   console.log('resolve', value);
// }, reason => {
//   console.log(4);
//   console.log('reject', reason.message);
// })

// **** then方法链式调用识别Promise是否返回自己 **** 
// const p1 = promise.then(value => {
//   console.log(1);
//   console.log('resolve', value);
//   return p1
// })

// p1.then(value => {
//   console.log(2);
//   console.log('resolve', value);
// }, reason => {
//   console.log(3);
//   console.log('reject', reason.message);
// })

// **** 实现then方法的链式调用 ****

// function other() {
//   return new MyPromise((resolve, reject) => {
//     resolve('other')
//   })
// }

// promise.then(value => {
//   console.log(1)
//   console.log('resolve', value)
//   return other()
// }).then(value => {
//   console.log(2)
//   console.log('resolve', value)
//   return other()
// }).then(value => {
//   console.log(3)
//   console.log('resolve', value)
// })

// **** 实现then方法多次调用添加多个处理函数 **** 
// promise.then(value => {
//   console.log(1)
//   console.log('resolve', value)
// })

// promise.then(value => {
//   console.log(2)
//   console.log('resolve', value)
// })

// promise.then(value => {
//   console.log(3)
//   console.log('resolve', value)
// })