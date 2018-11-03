<template>
<div class="pinpaicaiyao">
  <weibu></weibu>
  <header>
    <router-link tag="span" to="/">
      &lt;
    </router-link>
    <p>热门菜肴</p>
  </header>
  <div class="tu">
    <img src="../assets/images/首页_02.png" alt="">
  </div>
  <div class="body">
    <div class="sousuo">
      <input type="text" placeholder="请输入菜品名称">
      <button>搜索</button>
    </div>
    <div class="meishi">
      <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/美食搜索2_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/美食搜索3_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/美食搜索4_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/美食搜索5_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
      <dl>
        <dt><img src="../assets/images/美食搜索6_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
       <dl>
        <dt><img src="../assets/images/美食搜索1_03.png" alt=""></dt>
        <dd>香菇炖肉</dd>
      </dl>
    </div>
  </div>
  <div class="k"></div>
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
  margin-top: .133333rem /* 10/75 */;
  .sousuo{
    justify-content: center;
    display: flex;
    align-items: center;
    input{
      width: 60%;
      border-radius:.133333rem /* 10/75 */;
      border: 1px solid #ccc;
      height: 19px;
    }
    button{
      background: #ccc;
      border: 1px solid #ccc;
      border-radius: .066667rem /* 5/75 */;
    }
  }
  .meishi{
    display:flex;
    flex-wrap: wrap;
    dl{
      display: flex;
      flex-direction:column;
      align-items: center;
      width: 33%;
      margin-top:.266667rem /* 20/75 */;
      dt{
        img{
          width: 100%;
        }
      }
      dd{
        font-size: .4rem /* 30/75 */;
        font-weight: bold;
      }
    }
  }
}
.k{
  height: 2.266667rem;
}

</style>
