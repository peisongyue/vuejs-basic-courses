const MyPromise = require('./MyPromise')
const promise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('success')
  // }, 2000)
  // reject('err')
  resolve('success')
})

const p1 = promise.then(value => {
  console.log(1);
  console.log('resolve', value);
  return p1
})

p1.then(value => {
  console.log(2);
  console.log('resolve', value);
}, reason => {
  console.log(3);
  console.log('reject', reason.message);
})

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