<template>
   <footer>
       <img src="../assets/images/weitu_04.png" alt="" class="img">
       <div class="wei">
        <router-link tag="dl" to="/" class="active">
            <dt><p class="fa fa-diamond fa-5x"></p></dt>
            <dd>首页</dd>
        </router-link>
        <router-link tag="dl" to="/fujin">
            <dt><p class="fa fa-rss fa-5x"></p></dt>
            <dd>附近</dd>
        </router-link>
        <router-link tag="dl" to="/dingdan">
            <dt><p class="fa fa-heartbeat fa-5x"></p></dt>
            <dd>订单</dd>
        </router-link>
        <router-link tag="dl" to="/gengduo">
            <dt><p class="fa fa-birthday-cake fa-5x"></p></dt>
            <dd>更多</dd>
        </router-link>
       </div>
   </footer>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num:0,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    footer{
        position: fixed;
        bottom: 0;
        height: 2.266667rem;
        width: 100%;
        .img{
            width: 100%;
        }
        .wei{
            display:flex;
            background:#000;
            align-items: center;
            color: #fff;
            text-align: center;
            flex-direction: row;
            width: 100%;
            dl{
                flex:1;
                &.router-link-exact-active{
                background-color:#aa0202;
                }
                dt{
                    p{
                        color: #fff;
                        font-size:1.266667rem /* 110/75 */;
                    }
                }
                dd{
                    font-size: 0.666667rem;
                }
            }
        }
    }
</style>
