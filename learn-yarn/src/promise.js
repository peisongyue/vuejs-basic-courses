function fn() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('111')
    },3000)
  })
}

exports.modules= {
  fn
}