<template>
  <div class="pinpaicaiyao">
    <weibu></weibu>
    <header>
      <router-link tag="span" to="/">
        &lt;
      </router-link>
      <p>菜品分类</p>
    </header>
    <div class="tu">
      <img src="../assets/images/首页_02.png" alt="">
    </div>
    <div class="body">
      <div class="list">
        <h1>孕妇食谱</h1>
        <router-link tag="p" to="/yunfushipu">
          &gt;
        </router-link>
      </div>
      <div class="list">
        <h1>帅哥食谱</h1>
        <router-link tag="p" to="/shuaigeshipu">
          &gt;
        </router-link>
      </div>
      <div class="list">
        <h1>减肥食谱</h1>
        <router-link tag="p" to="/yunfushipu">
          &gt;
        </router-link>
      </div>
      <div class="list">
        <h1>儿童食谱</h1>
        <router-link tag="p" to="/yunfushipu">
          &gt;
        </router-link>
      </div>
      <div class="list">
        <h1>营养食谱</h1>
        <router-link tag="p" to="/yunfushipu">
          &gt;
        </router-link>
      </div>
      <div class="list">
        <h1>美容食谱</h1>
        <router-link tag="p" to="/yunfushipu">
          &gt;
        </router-link>
      </div>
      <div class="list">
        <h1>考生食谱</h1>
        <router-link tag="p" to="/yunfushipu">
          &gt;
        </router-link>
      </div>
      <div class="list">
        <h1>其他</h1>
        <router-link tag="p" to="/yunfushipu">
          &gt;
        </router-link>
      </div>
    </div>

      <!-- <div class="kuang">
        <label for="" v-for='(v,i) in arr' :key="i">
          <input type="checkbox" :value='v' v-model='quanxuan'>{{v}}
        </label>
        <label for="">
          <input type="checkbox" v-model="s" @click='btn'>全选
        </label>
        <label for="">
          <input type="checkbox" @click='fanxuan'>反选
        </label>
      </div> -->
  </div>
</template>

<script>
import weibu from '@/components/weibu.vue';
export default {
  name: 'pinpaicaiyao',
  components:{weibu},
  data () {
    return {
      // arr:['吃','喝','玩','乐'],
      // s:false,
      // quanxuan:[],
    }
  },
  // watch:{
  //   quanxuan(){
  //     this.s= this.quanxuan.length==this.arr.length;
  //     console.log(this.quanxuan)
  //   }
  // },
  // methods:{
  //   btn(){
  //     this.quanxuan= this.s ? [] : this.arr;
  //   },
  //   fanxuan(){
  //     let newArr=[];
  //     this.arr.forEach(v => {
  //       if(this.quanxuan.indexOf(v) == -1){
  //         newArr.push(v);
  //       }
  //     })
  //     this.quanxuan=newArr;
  //   }
  // }
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
      padding: .4rem /* 30/75 */;
      justify-content: space-between;
      border-bottom:1px solid #000;
      h1{
        font-size: .533333rem /* 40/75 */;
        font-weight:bold;
      }
      p{
        font-size: .533333rem /* 40/75 */;
        font-weight:bold;
        color: #ccc;
      }
    }
  }
  
</style>
