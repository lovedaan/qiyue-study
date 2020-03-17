import {promisic} from '../../utils/promisic.js'
//获取应用实例
const app = getApp()
Page({
  data: {
    list: [],
  },
  onLoad: function () {},
  addGg() {
    const { list } = this.data;
    const _id = list.length + 1;
    list.push({
      _id,
      name: '',
    });
    this.setData({
      list
    });
  },
  changeInput(e) {
    const index = e.target.dataset.index;
    const value = e.detail.value;

    const { list } = this.data;

    list.forEach((item, idx) => {
      if(idx === index) {
        item.name = value;
      }
    })

    this.data.list = list;

  },
  delItem(e) {
    const index = e.target.dataset.index;
    if(index >=0 ) {
      const { list } = this.data;
      list.splice(index, 1);
      this.setData({
        list
      });
    }
  },
  submit() {
    const { list } = this.data;
    console.log(list);
  },
})
