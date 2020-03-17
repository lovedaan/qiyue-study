import {promisic} from '../../utils/promisic.js'
//获取应用实例
const app = getApp()
Page({
  data: {
    list: [],
    scrollList: [{ img: 'https://images.jxsg.com/thumb/goods_gallery/wap/2019/09/3ec6c5a043990b42ac6330af2c7ee62e.jpg', title: '泰国RAYI蚕丝面膜35g*10片 芮一版官方正品 精选云仓' }, { img: 'https://images.jxsg.com/thumb/goods_gallery/wap/2017/02/d1942a7be5399400588c450faf2bd12f.jpg', title: '爱格优品小鸡蛋焕颜修护面膜25ml/片【单片销售】 精选云仓' }, { img: 'https://images.jxsg.com/thumb/goods_gallery/wap/2019/09/ea8ba17db9dd0dfcf23caf21585b0532.jpg', title: '正品韩国FHD血橙面膜30片补水保湿男女 精选云仓' }, { img: 'https://images.jxsg.com/thumb/goods_gallery/wap/2018/01/042ccad2d1f4e2c2855ecbee6ca89eee.jpg', title: '珀薇玻尿酸芦荟补水保湿面膜套装25ml*18片V5523' }, { img: 'https://images.jxsg.com/thumb/goods_gallery/wap/2018/04/b674389d652d6fdb54d5515124626999.jpg', title: '婴国天使WHMASK婴儿面膜10片 补水蚕丝面膜 精选云仓微商爆款'}],
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
