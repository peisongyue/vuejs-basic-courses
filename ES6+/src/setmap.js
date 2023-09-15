// const map = new Map()
// map.set('a', '1')
// map.set('b', '2')
// console.log(map);

// // map.clear()
// // console.log(map);

// console.log(map.has('a'))
// console.log(map.has('c'))

// console.log(map.get('a'))
// // map.delete('a')
// // console.log(map);
// console.log(map.keys());
// console.log(map.values());
// const arr = Array.from(map.keys())
// console.log(arr);

// const arr2 = Array.from(map.values())
// console.log(arr2);

// const arr3 = Array.from(map.entries())
// console.log(arr3);
// // const map2 = Object.entries(arr3)
// // console.log(map2);
// console.log(map.size);

// console.log([...arr3]);

// for (const key of map.keys()) {
//   console.log(key);
// }

// for (const value of map.values()) {
//   console.log(value);
// }

// for (const [key, value] of map.entries()) {
//   console.log(key + ':' + value);
// }

// map.forEach((value, key) => {
//   console.log(value + ':' + key);
// })

// function fn(a, b, c) {
//   console.log(a, b, c);
// }
// fn.call(this, 1,2,3)

// const set = new Set()
// set.add('a')
// set.add('b')
// console.log(set);
// // set.clear()
// // console.log(set);
// // let has = set.has('a')
// // console.log(has);
// // set.delete('a')
// // console.log(set);
// for (const key of set.keys()) {
//   console.log(key);
// }

// for (const value of set.values()) {
//   console.log(value);
// }


// for (const [key,value] of set.entries()) {
//   console.log(key + ':' + value);
// }

// set.forEach((value, value2) => {
//   console.log(value + ';' + value2);
// })
// const map = new Map()
// map.get()
// map.keys()
// map.forEach()
// map.set()

// const weakMap = new WeakMap()
// let obj = {
//   name: 'name'
// }
// weakMap.set(obj, 1);
// weakMap.set(() => {},2)
// console.log(weakMap); 
// let has = weakMap.has(obj)
// console.log(has);
// console.log(weakMap.get(obj));
// weakMap.delete(obj)
// console.log(weakMap);

// const weakSet = new WeakSet()
// let obj = {
//   name: 'str'
// }
// weakSet.add(obj)
// console.log(weakSet);
// let has = weakSet.has(obj)
// console.log(has);
// weakSet.delete(obj)
// console.log(weakSet);