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
      <input type="text" placeholder="请输入菜品名称" v-model='sousuozhi'>
      <button>搜索</button>
    </div>
    <div class="meishi">
      <dl v-for="(v,i) in arr1" :key=i>
        <dt><img :src="v.imgs" alt=""></dt>
        <dd>{{v.name}}</dd>
      </dl>
    </div>
  </div>
   <div class="meishi" v-if='show'>
    <dl v-for="(v,i) in arr" :key=i>
      <dt><img :src="v.imgs" alt=""></dt>
      <dd>{{v.name}}</dd>
    </dl>
  </div>
  <div class="mengceng" v-show="istrue" @click="btn">
    <p>没找到你要的商品~~</p>
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
    show:true,
    istrue:false,
    arr:[{
      imgs:'../static/images/美食搜索1_03.png',
      name:'香菇炖肉',
      },
      {
      imgs:'../static/images/美食搜索2_03.png',
      name:'土豆鸡块',
      },
      {
      imgs:'../static/images/美食搜索3_03.png',
      name:'莲子羹',
      },
      {
      imgs:'../static/images/美食搜索4_03.png',
      name:'红烧鸡翅',
      }
      ,
      {
      imgs:'../static/images/美食搜索5_03.png',
      name:'丝瓜辣条',
      }
      ,
      {
      imgs:'../static/images/美食搜索6_03.png',
      name:'豆芽炒菜',
      },
      {
      imgs:'../static/images/美食搜索1_03.png',
      name:'香菇炖肉',
      },
      {
      imgs:'../static/images/美食搜索2_03.png',
      name:'土豆鸡块',
      },
      {
      imgs:'../static/images/美食搜索3_03.png',
      name:'莲子羹',
      },
      {
      imgs:'../static/images/美食搜索4_03.png',
      name:'红烧鸡翅',
      }
      ,
      {
      imgs:'../static/images/美食搜索5_03.png',
      name:'丝瓜辣条',
      }
      ,
      {
      imgs:'../static/images/美食搜索6_03.png',
      name:'豆芽炒菜',
      },
      {
      imgs:'../static/images/美食搜索1_03.png',
      name:'香菇炖肉',
      },
      {
      imgs:'../static/images/美食搜索2_03.png',
      name:'大盘鸡',
      },
      {
      imgs:'../static/images/美食搜索3_03.png',
      name:'莲子羹',
      },
      {
      imgs:'../static/images/美食搜索4_03.png',
      name:'可乐鸡翅',
      }
      ,
      {
      imgs:'../static/images/美食搜索5_03.png',
      name:'老干妈',
      }
      ,
      {
      imgs:'../static/images/美食搜索6_03.png',
      name:'豆豆豆芽',
      }
      ],
    sousuozhi:'',
    arr1:[],
  }
},
methods:{
  btn(){
   console.log(1);
    this.istrue=false;
  }
},
mounted() {
  this.mengceng=document.querySelector('.mengceng');
},
watch:{
  sousuozhi(){
    var ipt=this.sousuozhi; 
    this.isshow=false;
    this.arr1=[];
    if(ipt==""){ 
    this.show=true;
    this.istrue = false;
    }else{
      this.arr1=this.arr.filter(v => {
      return v.name.indexOf(ipt) > -1;
      })
        if(this.arr1.length==0){
        this.istrue = true;
        }else {
          this.show = false;
        }
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
  .mengceng{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    justify-content: center;
    align-items: center;
    // display: none;
    p{
      color: #fff;
      font-size: 1.066667rem /* 80/75 */;
    }
  }
.k{
  height: 2.266667rem;
}

</style>
