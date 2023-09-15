let a = 2 ** 5
// console.log(a);

let obj = {
  name: 'name',
  age: 11,
  school: 'school',
  total: '',
  fn: null
}
function fn(params) {
    console.log(params);
}
// console.log(obj?.name || 'name2');
// console.log(obj?.total || 'total2');
// // fn?.(11)
// console.log(obj.fn?.());

// console.log(obj.total ?? 'total11');
let b = 0
b ??= 5
console.log(b);