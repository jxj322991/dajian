<template>
  <div class="box">
    <div class="search" :style='{transform:transform2}'>
      <search-input @searchText='searchText'></search-input>
    </div>
    <div v-if="searchRes" class="listBox" :style={transform:transform1} style='transition:transform 600ms;'>
      <div class="searchText" v-if='index<12' :key="index" v-for="(x,index) in dataList" @click="detailSearch(x)">
        {{x}}
      </div>
    </div>
    <search-no v-else></search-no>
  </div>
</template>

<script>
// import mainTitle from '@/components/mainTitle'
import searchInput from "@/components/searchInput";
// import loading from '@/components/loading'
// import station from '@/components/station'
import searchNo from "@/components/searchNo";

export default {
  props: ["searchNew", "searchPage"],
  data() {
    return {
      searchRes: true,
      text: "",
      hideNavSearch: true,
      thisPage: "search",
      prePage: undefined,
      dataList: [],
      act: false
    };
  },
  watch: {
    searchNew: function(val, oldVal) {
      this.searchRes = true;
      this.getList();
    }
  },
  components: {
    searchInput,
    searchNo
  },
  computed: {
    transform1() {
      if (this.act) {
        return `translateY(0)`;
      } else {
        return `translateY(-500%)`;
      }
    },
    transform2() {
      if (this.act) {
        return `translateY(0)`;
        // return `rotateX(0deg)`;
      } else {
        return `translateY(-300%)`;
        // return `rotateX(90deg)`;
      }
    }
  },
  methods: {
    getList() {
      this.act = false;
      var arr = wx.getStorageSync("search_box") || [];
      if (arr.length > 0) {
        this.dataList = arr;
        setTimeout(() => {
          this.act = true;
        }, 200);
        wx.setStorageSync("search_box", []);
      } else {
        var Fly = require("flyio/dist/npm/wx");
        var fly = new Fly();
        var header = wx.getStorageSync("YX-SESSIONID");
        fly.interceptors.request.use(request => {
          request.headers["YX-SESSIONID"] = header;
          return request;
        });
        fly
          .get(`https://dj.majiangyun.com/getKeyWord`, {})
          .then(d => {
            //输出请求数据
            console.log("req", d.data);

            arr = d.data.data;
            for (var i = 0; i < arr.length; i++) {
              var ele = arr[i];
              if (ele.length > 20 || ele.replace(/\w/g, "").length > 10) {
                arr[i] = arr[i].substr(0, 10) + "...";
              }
            }
            wx.setStorageSync("search_box", arr);
            this.dataList = arr;
            setTimeout(() => {
              this.act = true;
            }, 200);
          })
          .catch(err => {
            console.log(err.status, err.message);
          });
      }
    },
    detailSearch(x) {
      console.log(x);
      if (!x) {
        return;
      }
      var Fly = require("flyio/dist/npm/wx");
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(request => {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      wx.setStorageSync("searchText", x);
      fly
        .get(`https://dj.majiangyun.com/search`, {
          keyword: x
        })
        .then(d => {
          //输出请求数据
          console.log("req", d.data);
          if (d.data.data.list.length > 0) {
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
            console.log(d);
            wx.setStorageSync("pre_page", this.searchPage);
            wx.setStorageSync("search_page", this.searchPage);
            wx.setStorageSync("explain", {
              data: d.data,
              title: x
            });
            const url = "../explain/main";
            wx.navigateTo({ url });
          } else {
            this.searchRes = false;
            retrun;
          }
        })
        .catch(err => {
          console.log(err.status, err.message);
        });
    },
    searchText(x) {
      this.detailSearch(x);
    }
  }
};
</script>
<style>
view .searchBox {
  position: relative;
}
</style>

<style scoped lang='scss'>
.listBox {
  margin: 0 16rpx 0 42rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  height: 120rpx;
  overflow: hidden;

  .searchText {
    vertical-align: middle;
    box-sizing: border-box;
    line-height: 45rpx;
    height: 45rpx;
    font-size: 20rpx;
    background: rgba(241, 241, 241, 1);
    color: rgba(0, 0, 0, 1);
    border: 1rpx solid rgba(07, 07, 07, 0.32);
    border-radius: 8rpx;
    padding: 0 15rpx;
    display: inline-block;
    margin-bottom: 26rpx;
    margin-right: 26rpx;
    font-weight: 100;
    transition-timing-function: ease-out;
    -webkit-transform: translate3d(0, 0, 0);
    z-index: 100;
    // transform: translateY(3000%);
  }
}
.search {
  transition-timing-function: ease-out;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translateY(-300%);
  // transform: rotateX(90deg);
  transition: transform 300ms;
  z-index: 1000;
}
.box{
  // height: 90vh;
}
</style>
