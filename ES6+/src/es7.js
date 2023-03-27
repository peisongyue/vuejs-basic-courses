// Array.prototype.includes
const arr = [1,2,3,4,5,6,7,8,9,10]

// 老方法 判断某个值是否存在数组中 
// indexOf() 如果存在 返回下标 不存在 -1
console.log('old', arr.indexOf(10)); 
console.log('old', arr.indexOf(11));

// 新方法 includes 返回 Boolean 
console.log('new', arr.includes(1));
console.log('new', arr.includes(11));


// 求幂运算符 number**number

console.log(20**3);

// test
let obj = {
  name: 'zhang', age: 11
}
const list = [
  {name: 'wang', age: 22}
]
list.push(obj)
console.log(list.includes(obj));