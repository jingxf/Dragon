<template>
  <div class="shouye">
    <weibu></weibu>
    <header>
      <h2><span><i></i><i></i></span>附近</h2>
      <!-- <img src="../assets/images/" alt=""> -->
    </header>
        <div id="allmap"></div>
        <div id="r-result"><input type="text" id="suggestId" size="20" value="百度" style="width:150px;" placeholder="请输入要搜索的地址" /></div>
	      <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>  <div id="r-result"><input type="text" id="suggestId" size="20" value="百度" style="width:150px;" placeholder="请输入要搜索的地址" /></div>
	      <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
  </div>
</template>

<script>
import weibu from "@/components/weibu.vue";
import BMap from "BMap";
export default {
  name: "shouye",
  components: { weibu },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      btnIndex: 0
    };
  },
  mounted() {
    this.baiduMap();
  },
  methods: {
    // 返回
    goback() {
      this.$router.go(-1);
    },
    baiduMap() {
      function G(id) {
        return document.getElementById(id);
      }

      var map = new BMap.Map("allmap");
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

      //关键字搜索
      var ac = new BMap.Autocomplete({
        //建立一个自动完成的对象
        input: "suggestId",
        location: map
      });

      ac.addEventListener("onhighlight", function(e) {
        //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value =
            _value.province +
            _value.city +
            _value.district +
            _value.street +
            _value.business;
        }
        str =
          "FromItem<br />index = " +
          e.fromitem.index +
          "<br />value = " +
          value;

        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value =
            _value.province +
            _value.city +
            _value.district +
            _value.street +
            _value.business;
        }
        str +=
          "<br />ToItem<br />index = " +
          e.toitem.index +
          "<br />value = " +
          value;
        G("searchResultPanel").innerHTML = str;
      });

      var myValue;
      ac.addEventListener("onconfirm", function(e) {
        //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
        G("searchResultPanel").innerHTML =
          "onconfirm<br />index = " +
          e.item.index +
          "<br />myValue = " +
          myValue;

        setPlace();
      });

      function setPlace() {
        map.clearOverlays(); //清除地图上所有覆盖物
        function myFun() {
          var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
          map.centerAndZoom(pp, 18);
          map.addOverlay(new BMap.Marker(pp)); //添加标注
        }
        var local = new BMap.LocalSearch(map, {
          //智能搜索
          onSearchComplete: myFun
        });
        local.search(myValue);
      }

      // 添加带有定位的导航控件
      var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
      });
      map.addControl(navigationControl);
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl();
      geolocationControl.addEventListener("locationSuccess", function(e) {
        // 定位成功事件
        var address = "";
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        alert("当前定位地址为：" + address);
      });
      geolocationControl.addEventListener("locationError", function(e) {
        // 定位失败事件
        alert(e.message);
      });
      map.addControl(geolocationControl);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
#allmap {
  width: 100%;
  height: 545px;
}
header {
  height: 1.333333rem;
  background: rgb(168, 0, 0);
  color: #fff;
  position: relative;
  h2 {
    font-size: 0.666667rem;
    font-weight: bolder;
    text-align: center;
    line-height: 50px;
    span {
      position: absolute;
      left: 0.133333rem;
      top: 0.4rem;
      i {
        position: absolute;
        width: 0;
        height: 0;
        border-width: 10px 10px 10px 0;
        border-style: solid;
        border-color: transparent #fff;
      }
      i:nth-child(2) {
        left: 0.16rem;
        border-color: transparent rgb(168, 0, 0);
      }
    }
  }
}
#r-result {
  position: absolute;
  top: 1.466667rem;
  right: 2.666667rem;
}
</style>
