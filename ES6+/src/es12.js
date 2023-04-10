// String.protype.replaceAll
let str = 'a+b+c+'
console.log(str.replaceAll('+', ','));

// Promise.any
// Promise主要的四个方法 
// allSettled 只要所有实例全部返回结果，不管是fulfilled或rejected实例才会结束 
// Promise.allSettled()
// 只要任意一个实例状态改变，无论是 fulfilled/rejected 就返回这个Promise
// Promise.race()
// 目前Promise.any还处于实验阶段。
// 只要其中一个promise成功，就返回那个成功的promise。如果都失败，就返回一个失败promise
// Promise.any()
// 只要之中一个promise失败，就返回这个失败的promise。如果都成功，则都返回值组成一个数组
// Promise.all() 

// WeakRef
// TODO WeakRef

// 逻辑赋值运算符

let obj = {
  name: null
}
// obj.name ||= '张'
// obj.name ??= '张'
// obj.name &&= '张'
console.log(obj);

//数字分隔符 
const num = 1_000_000 // 1000000
console.log(num);


