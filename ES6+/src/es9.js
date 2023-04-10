// Promise.prototype.finally.
let pro = new Promise((resolve, reject) => {
  resolve('111')
})
pro.then((value) => {
  console.log('then', value);
}).finally(() => {
  console.log('finally');
})

// 按顺序完成异步操作(Asynchronous Iteration)
// TODO fix this

// 为对象支持扩展运算符
// ES6 为数组引入了扩展运算符的写法， 在 ES2018 中，为对象也引入了此写法

const obj = { a: "a", b: "b", c: "c", d: "d", e: "e" };
const {a, b, c, ...rest} = obj
console.log(a); // a
console.log(rest); // { d: 'd', e: 'e' }
const newObj = {a, ...rest} 
console.log(newObj); // { a: 'a', d: 'd', e: 'e' }

// 解除模板字面量限制
// TODO fix this

//正则之 s 修饰符：dotAll 模式
// TODO fix this 

// 正则之具名组匹配
const date = /(\d{4})-(\d{2})-(\d{2})/.exec("2020-01-01");
console.log("date", date);

const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
console.log(reg.exec('2020-01-01'));
const groups = reg.exec('2020-01-01').groups
const { year, month, day } = groups
console.log(year, month, day);
// 2020 01 01

// 正则之后行断言
// TODO fix this