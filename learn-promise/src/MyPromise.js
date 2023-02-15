const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    executor(this.resolve, this.reject)
  }

  // 存储状态的变量，初始值是pending
  status = PENDING;

  // resolve和reject为什么要用箭头函数
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // 存储成功回调函数
  // onFulfilledCallback = null;
  onFulfilledCallback = []
  // 存储失败回调函数
  // onRejectedCallback = null;
  onRejectedCallback = []

  // 更新成功后的值
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED
      // 保存成功之后的值
      this.value = value

      // 判断成功回调是否存在，如果存在就调用
      while(this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
      // this.onFulfilledCallback && this.onFulfilledCallback(value)
    }
  }

  // 更改失败后的值
  reject = (reason) => {
    // 状态必须是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为失败
      this.status = REJECTED
      // 保存失败之后的原因
      this.reason = reason

      // 判断失败回调是否存在，如果存在就调用
      while(this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
      // this.onRejectedCallback && this.onRejectedCallback(value)
    }
  }

  then(onFulfilled, onRejected) {
    // // 判断状态
    // if (this.status === FULFILLED) {
    //   // 调用成功回调，并且把值返回
    //   onFulfilled(this.value)
    // } else if (this.status === REJECTED){
    //   // 调用失败回调，并且把原因返回
    //   onRejected(this.reason)
    // } else if (this.status === PENDING) {
    //   // 因为不知道后面状态的变化情况，所以将成功回调和失败回调会存储起来
    //   // 等到执行成功失败函数的时候在传递
    //   this.onFulfilledCallback.push(onFulfilled)
    //   this.onRejectedCallback.push(onRejected)
    // }


    // 为了链式调用这里直接创建一个MyPromise, 并在后面return
    const promise2 =new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {

        // 创建一个微任务等待promise2完成初始化
        queueMicrotask(() => {
          // 获取成功回调函数的执行结果
          const x = onFulfilled(this.value)
          // 传入resolvePromise集中处理
          resolvePromise(promise2, x, resolve, reject)
        })
      } else if (this.status === REJECTED) {
        onRejected(this.reason)
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
      }
    })
    return promise2
  }
}


function resolvePromise(promise2, x, resolve, reject) {

  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }

  // 判断x 是不是MyPromise对象
  if (x instanceof MyPromise) {
    // 执行x, 调用then方法，目的是将其状态变为fulfilled或rejected
    // x.then(value => resolve(value), reason => reject(reason))
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

module.exports = MyPromise