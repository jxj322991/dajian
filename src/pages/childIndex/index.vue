<template>
  <scroll-view class="max_width">
    <main-title :thisPage=thisPage @toSearch='toSearch' :hideSearch=hideSearch></main-title>
    <div class="contentBox">
      <div class="listBox" v-if="listShow" :class="{listHide:listHide}">
        <div :key=key v-for="(x,key) in dataList">
          <index-card :animation='animation' :goods=x @toDetail='toDetail' :index='key' :leftNone='leftNone'></index-card>
        </div>
        <station v-if="dataList.length==0"></station>

      </div>
      <div class="searchBox" v-if="listHide">
        <search-box :searchNew=searchNew :searchPage=thisPage></search-box>
      </div>
    </div>
  </scroll-view>
</template>


<script>
import mainTitle from "@/components/mainTitle";
import indexCard from "@/components/indexCard";
import searchBox from "@/components/searchBox";
import station from "@/components/station";

export default {
  data() {
    return {
      thisPage: "childIndex",
      dataPre: {},
      leftNone: false,
      prePage: undefined,
      listShow: true,
      listHide: false,
      dataList: [],
      hideSearch: false,
      searchNew: 0,
      animation: true
    };
  },

  components: {
    mainTitle,
    indexCard,
    searchBox,
    station
  },

  methods: {
    escape2Html(str) {
      var arrEntities = { lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(all, t) {
        return arrEntities[t];
      });
    },
    toSearch() {
      this.hideSearch = true;
      this.listHide = true;
      setTimeout(() => {
        this.listShow = false;
        this.searchNew = +new Date();
      }, 500);
    },
    getList() {
      this.leftNone = false;
      setTimeout(() => {
        this.leftNone = true;
      }, 200);
    },
    toDetail(x) {
      var Fly = require("flyio/dist/npm/wx");
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(request => {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly
        .get(`https://dj.majiangyun.com/type/${x.id}`, {})
        .then(d => {
          //输出请求数据
          console.log("req", d.data);
          wx.setStorage({
            key: "goods",
            data: JSON.stringify(x)
          });
          // var arr = wx.getStorageSync("data_box");
          // arr.push({
          //   pre_page: this.thisPage,
          //   pre_data: d.data,
          //   page: "explain"
          // });
          // wx.setStorageSync("data_box", arr);
          wx.setStorageSync("pre_page", this.thisPage);
          var url;
          if (d.data.data.type == "series") {
            wx.setStorageSync("childIndex2", {
              title: x.title,
              data: d.data
            });

            url = "../childIndex2/main";
          } else {
            wx.setStorageSync("explain", {
              title: x.title,
              data: d.data
            });

            url = "../explain/main";
          }
          wx.navigateTo({ url });
        })
        .catch(err => {
          console.log(err.status, err.message);
        });
    },
    exit() {
      var SP = wx.getStorageSync("search_page");
      console.log(SP)
      if (SP) {
        wx.setStorageSync("search_page",false);
        return;
      }

      this.leftNone = false;
      this.listShow = true;
      this.listHide = false;
      this.dataList = [];
      this.hideSearch = false;
      this.animation = true;
    }
  },
  created() {},
  onShow() {
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      this.animation = false;
    }

    var data = wx.getStorageSync("childIndex");
    console.log(data);
    this.dataList = data.data.data.list;

    wx.setStorageSync("pre_page", "none");

    wx.setNavigationBarTitle({
      title: this.escape2Html(data.title) //页面标题为路由参数
    });
    this.getList();
  },
  onHide() {
    this.exit();
  },
  onUnload() {
    this.exit();
  }
};
</script>

<style scoped lang='scss'>
.listBox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  transition-timing-function: ease-in;
  -webkit-transform: translate3d(0, 0, 0); /*开启硬件加速*/
  transform: translateY(0);
  transition: transform 500ms;
  // position: absolute;
  top: 0;
  z-index: 200;
  width: 100%;
}
.searchBox {
  // position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
}
.listHide {
  transform: translateY(100%);
}
.contentBox {
  position: relative;
}
</style>
