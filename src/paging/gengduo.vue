<template>
  <div class="pinpaicaiyao">
    <weibu></weibu>
    <header>
      <router-link tag="span" to="/">
        &lt;
      </router-link>
      <p>更多</p>
    </header>
    <div class="tu">
      <img src="../assets/images/首页_02.png" alt="">
    </div>
    <div class="body">
      <div class="list">
        <h1>我的喜爱</h1>
      </div>
      <div class="list">
        <h1>消息通知</h1>
      </div>
      <div class="list">
        <h1>最新菜品推荐功能</h1>
      </div>
      <div class="list">
        <h1>意见反馈</h1>
      </div>
      <div class="list">
        <h1>关于</h1>
      </div>
      <div class="list">
        <h1>自动推送</h1>
      </div>
      <div class="list">
        <h1>升级最新客户端</h1>
      </div>
      <div class="list">
        <h1>客服电话:<span>400-106-6666</span></h1>
      </div>
       <div class="list">
        <h1>退出</h1>
      </div>
    </div>
   
  </div>
</template>

<script>
import weibu from '@/components/weibu.vue';
export default {
  name: 'pinpaicaiyao',
  components:{weibu},
  data () {
    return {
      
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
    position: relative;
    width: 100%;
    span{
      font-size: .56rem /* 42/75 */;
      color: #fff;
      position: absolute;
      left: 5%;
    }
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
    .list{
      margin-top:3%;
      display: flex;
      padding: .35rem /* 30/75 */;
      justify-content: space-between;
      border-bottom:1px solid #000;
      h1{
        font-size: .533333rem /* 40/75 */;
        font-weight:bold;
        span{
          color: red;
        }
      }
    }
  }
  
</style>
