<template>
   <footer>
       <img src="../assets/images/weitu_04.png" alt="" class="img">
       <div class="wei">
        <router-link tag="dl" to="/" class="active">
            <dt><img src="../assets/images/1_03.gif" alt=""></dt>
            <dd>首页</dd>
        </router-link>
        <router-link tag="dl" to="/fujin">
            <dt><img src="../assets/images/2_03.gif" alt=""></dt>
            <dd>附近</dd>
        </router-link>
        <router-link tag="dl" to="/dingdan">
            <dt><img src="../assets/images/3_03.gif" alt=""></dt>
            <dd>订单</dd>
        </router-link>
        <router-link tag="dl" to="/gengduo">
            <dt><img src="../assets/images/4_03.gif" alt=""></dt>
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
        .img{
            width: 100%;
        }
        .wei{
            display:flex;
            background: #000;
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
                dd{
                    font-size: 0.466667rem;
                }
            }
        }
    }
    // .active{
    //     background: #aa0202;
    // }
</style>
