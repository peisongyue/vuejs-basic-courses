// Array#{flat,flatMap}
// ECMAScript 2019 在 Array.prototype 
// 上增加了两个方法:flat()和 flatMap()。

// Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
const arr = [1,2,3,4,[5,6,[7,8]]]
let arr2 = arr.flat()
console.log(arr.flat(2));
// [1, 2, 3, 4 ,5, 6, 7, 8]
let arr3 = [2,3,6]

// flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
// 然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
let arr4 = arr3.flatMap(x => [[x * 2]])
console.log(arr4);
// [ 4, 6, 12 ]


// Object.fromEntries Array 转化为 Object
let arra = [
  ["foo", "bar"],
  ["bar", 43]
]
console.log(Object.fromEntries(arra)); 

// 1 Map 键值对结构转换为对象

const map = new Map([
  ['foo', 'bar'],
  ['fax', 42]
])
console.log(Object.fromEntries(map));

const map2 = new Map().set('foo', true).set('bar', false)
console.log(Object.fromEntries(map2));

// 2 浏览器查询参数转换为对象
let query = Object.fromEntries(new URLSearchParams('foo=bar&bax=41'))
console.log(query);


// String#{trimStart,trimEnd}
const s = '    s    '
console.log(s.trim());
console.log(s.trimEnd());
console.log(s.trimStart());


// Symbol#description
let sym = Symbol('foo')
console.log(sym.description); 


// try { } catch {}
// 旧版本的try / catch语句中的catch子句需要一个变量。 现在可以不加了
try {
  
} catch (error) {
  
}

try {
  
} catch {
  
}