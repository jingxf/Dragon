<template>
  <div class="pinpaicaiyao">
    <weibu></weibu>
    <header>
      <router-link tag="span" to="/caipinfenlei">
      &lt;
      </router-link>
      <p>帅哥食谱</p>
    </header>
    <div class="tu">
      <img src="../assets/images/首页_02.png" alt="">
    </div>
    <div class="body">
      <div class="hezi">
        <dl>
          <dt><img src="../assets/images/帅哥食谱1.png" alt=""></dt>
          <dd>
            <h1>Cuiab</h1>
            <p>名言:&nbsp;&nbsp;<i>头伸过来给你看个宝贝</i></p>
          </dd>
        </dl>
        <div class="dingdan">
          <button>预定</button>
        </div>
      </div>

      <div class="hezi">
        <dl>
          <dt><img src="../assets/images/帅哥食谱1.png" alt=""></dt>
          <dd>
            <h1>Cuiab</h1>
            <p>名言:&nbsp;&nbsp;<i>头伸过来给你看个宝贝</i></p>
          </dd>
        </dl>
        <div class="dingdan">
          <button>预定</button>
        </div>
      </div>

      <div class="hezi">
        <dl>
          <dt><img src="../assets/images/帅哥食谱1.png" alt=""></dt>
          <dd>
            <h1>Cuiab</h1>
            <p>名言:&nbsp;&nbsp;<i>头伸过来给你看个宝贝</i></p>
          </dd>
        </dl>
        <div class="dingdan">
          <button>预定</button>
        </div>
      </div>

      <div class="hezi">
        <dl>
          <dt><img src="../assets/images/帅哥食谱1.png" alt=""></dt>
          <dd>
            <h1>Cuiab</h1>
            <p>名言:&nbsp;&nbsp;<i>头伸过来给你看个宝贝</i></p>
          </dd>
        </dl>
        <div class="dingdan">
          <button>预定</button>
        </div>
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
    margin-top:.346667rem /* 11/75 */;
    .hezi{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .433333rem /* 10/75 */;
      border-bottom:1px solid #000;
      dl{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        dt{
          img{
            width: 100%;
          }
        }
        dd{
          width: 100%;
          h1{
            font-size: .4rem /* 30/75 */;
            font-weight: bold;
            margin: .4rem /* 30/75 */;
          }
          p{
            font-weight: blod;
            margin: .4rem /* 30/75 */;
          }
        }
      }
      .dingdan{
        width: 15%;
        button{
          width: 1.333333rem /* 100/75 */;
          height: .8rem /* 45/75 */;
          border-radius: 5px;
          background: #fecb24;
          color: #fff;
          border: 1px solid #ccc;
        }
      }
    }
  }
</style>
