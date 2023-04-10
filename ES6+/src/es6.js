const arr = [1,2,3,4,5]
let num = arr.reduce((x, y) => {
  return x + y
})

console.log(num);
const arr2 = [1,2,3,4,5,6,7]
// arr2.pop() // [ 1, 2, 3, 4, 5, 6 ]
// arr2.shift() // [ 2, 3, 4, 5, 6, 7]
arr2.unshift(0) // [ 0, 1, 2, 3, 4, 5, 6, 7]
console.log(arr2);

