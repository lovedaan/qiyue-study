const promisic = function(fuc) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      })
      fuc(args);
    })
  }
}

export {
  promisic,
}