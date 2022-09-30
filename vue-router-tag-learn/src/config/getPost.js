export function getData(id, showError) {
  return new Promise((resolve, reject) => {
    const post = {
      title: "title111 --- params:" + id,
      body: "body222",
    };
    setTimeout(() => {
      if (showError) {
        reject("404");
      } else {
        resolve(post);
      }
    }, 1000);
  });
}
