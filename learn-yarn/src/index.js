const promise1 = new Promise((resolve,reject) => {
  console.log('promise1');
})
console.log(promise1);


function ajax (method, url, data) {
  var xhr = new XMLHttpRequest()
  return new Promise((resize, reject) => {
    xhr.onreadystatechange = function() {
      if(xhr.readyState !== 4) return
      if (xhr.status === 200) {
        resize(xhr.responseText)
      } else {
        reject(xhr.statusText)
      }
    }
    xhr.open(method, url)
    xhr.send(data)
  })
}