<template>
  <div class="shouye">
    <weibu></weibu>
    <header>
      <p>首页</p>
    </header>
    <div class="tu">
      <img src="../assets/images/首页_02.png" alt="">
    </div>
    <div class="body">
      <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/images/stu2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/stu2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/stu3.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
      <div class="mengceng"></div>
    </div>
    <div class="remenzhuanqu">
      <div class="rmzq">
        <h1>热门专区</h1>
      </div>
      <div class="rmlan">
        <router-link tag="div" to="/pinpaicaiyao">
          <img src="../assets/images/s热门1_05.png" alt="">
          <p>品牌菜肴</p>
        </router-link>
        <router-link tag="div" to="/pinpaicaiyao">
          <img src="../assets/images/s热门2_05.png" alt="">
          <p>折扣专区</p>
        </router-link>
        <router-link tag="div" to="/pinpaicaiyao">
          <img src="../assets/images/s热门3_05.png" alt="">
          <p>新品推荐</p>
        </router-link>
        <router-link tag="div" to="/pinpaicaiyao">
          <img src="../assets/images/s热门4_05.png" alt="">
          <p>热门菜肴</p>
        </router-link>
        <router-link tag="div" to="/pinpaicaiyao">
          <img src="../assets/images/s热门5_05.png" alt="">
          <p>菜品分类</p>
        </router-link>
        <router-link tag="div" to="/pinpaicaiyao">
          <img src="../assets/images/s热门6_05.png" alt="">
          <p>美食搜索</p>
        </router-link>
        
      </div>
    </div>
    <div class="kaifa">
      <div class="kf">
        <h1>菜肴开发中...</h1>
      </div>
    </div>


  </div>



  
</template>

<script>
import weibu from '@/components/weibu.vue'
export default {
  name: 'shouye',
  components:{weibu},
  data () {
    return {
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay:true,
          loop:true,
          pagination: {
                el: '.swiper-pagination',
            },
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    header{
      background: #aa0202;
      height: .933333rem /* 70/75 */;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        font-size: .56rem /* 42/75 */;
        color: #fff;
      }
    }
    .tu{
      img{
        width: 100%;
      }
    }
    .body{
      position: relative;
      width: 100%;
      img{
        width: 100%;
      }
      .mengceng{
        width: 100%;
        height: .533333rem /* 40/75 */;
        position: absolute;
        bottom: 0;
        background: rgba(47, 30, 22, .3);
        z-index: 2;
      }
      .swiper-pagination{
        position: absolute;
        bottom:.133333rem /* 10/75 */;
      }
    }
    .remenzhuanqu{
      margin-top: .133333rem /* 10/75 */;
      .rmzq{
        width: 100%;
        height: .993333rem /* 52/75 */;
        background: #d02022;
        display: flex;
        align-items: center;
        h1{
          color: #fff;
          font-size: .453333rem /* 34/75 */;
          padding-left: .213333rem /* 16/75 */;
        }
      }
      .rmlan{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        flex-wrap:wrap;
        margin-top: .233333rem /* 10/75 */;
        div{
          position: relative;
          width: 28%;
          margin-top: .133333rem /* 10/75 */;
          img{
           width: 100%;
          }
          p{
            position: absolute;
            bottom:10%;
            left:20%;
            font-size: .4rem /* 30/75 */;
            color: #fff;
          }
        }
      }
    }
    .kaifa{
      margin-top:10px;
      .kf{
        display: flex;
        align-items: center;
        background: #d02022;
        width: 100%;
        height: .993333rem /* 52/75 */;
        h1{
          color: #fff;
          font-size: .453333rem /* 34/75 */;
          padding-left: .213333rem /* 16/75 */;
          width: 100%;
          text-align: center;
        }
      }
    }
</style>
