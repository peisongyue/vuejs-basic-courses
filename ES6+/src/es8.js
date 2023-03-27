// Object.values/Object.entries
// 直接获取对象的值
// const obj = {
//     name: '张三',
//     age: 18
// }

const obj = {
  name: "张三",
  age: 18,
  children: [{ name: "离四", age: 4 }],
};
console.log(Object.values(obj));
// [ '张三', 18, [ { name: '离四', age: 4 } ] ]

const obj2 = { foo: "bar", baz: 42 };
console.log(Object.entries(obj2));
// [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]

for (let [k, v] of Object.entries(obj2)) {
  console.log(`${k} : ${v}`);
}
// foo : bar
// baz : 42

let map = new Map(Object.entries(obj2));
console.log(map); // { 'foo' => 'bar', 'baz' => 42 }

// String padding
// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全。

console.log("padStart", "x".padStart(5, "ab"));
console.log("padEnd", "x".padEnd(5, "ab"));
// padStart ababx
// padEnd xabab

console.log("5".padStart(10, "0"));
console.log("45".padStart(10, "0"));
console.log("12345".padStart(10, "0"));
// 0000000005
// 0000000045
// 0000012345

console.log("10".padStart(10, "YYYY-MM-DD"));
console.log("03-10".padStart(10, "YYYY-MM-DD"));
// YYYY-MM-10
// YYYY-03-10

// Object.getOwnPropertyDescriptors
// TODO fix this

// ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。
function fun(param1, param2) {
  console.log(param1, param2);
}
fun(1, 2);

// async

function pad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("请求成功");
    }, 2000);
  });
}

async function getData() {
  console.log("start");
  const fun = await pad();
  console.log(fun);
  console.log("end");
}

getData();
