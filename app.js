
const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (data) => {
          resolve(data);
        },
        fial: (err) => {
          reject(err)
        }
      });
      func(args);
    })
  }
}

promisic(wx.request)(data).then(res => {

})