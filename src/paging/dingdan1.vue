<template>
  <div class="shouye">
    <weibu></weibu>

        <div class="head">
            <h1><span class="span" @click="back()"><</span><span>订单</span><span></span></h1>
            <p><img src="../../src/assets/images/首页_02.png" alt=""></p>
        </div>

        <div class="bo">
          <ul>
            <li>我的账户</li>
            <li>我的收藏</li>
            <li>我的订单</li>
          </ul>
        </div>

        <div class="first">
          <form action=""><label class="lab">账户</label>：<input type="text" placeholder="请输入你的账号"></form>
          <form action=""><label class="lab">密码</label>：<input type="password" placeholder="请输入你的密码"></form>
          <form action="">确认密码：<input type="password" placeholder="请输入你的密码"></form>
        </div>

        <div class="second">
         <div class="secondOne">
            <button>登录并注册</button>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }  
  ,methods:{
    back(){
        this.$router.back()
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.head h1{
  height: 50px;
  line-height: 50px;
  width: 100%;
  color: #fff;
  font-size: 27px;
  text-align: center;
  background: #aa0202;
  display: flex;
  justify-content: space-around;
}
.head p{
  img{
    width: 100%;
  }
}
.span{
    

}
.bo{
  width: 100%;
  margin-top: 10px;
}
.bo ul{
  list-style: none;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content:space-around;
  li{
    width: 100px;
    font-size: 20px;
    border:solid 1px #ccc;
    text-align: center;
    border-radius: 5px;   
  }
  li:hover{
    background:#df1d1d;
    color: #fff;
  }
  .active{
      background:#df1d1d;
      color: #fff;
    }
}

.first{
  padding-top: 15px;
}

.first form{ 
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  margin-top: 15px;
  text-align: center;
  input{
    font-size: 18px;
    border-radius: 8px;
    border:solid 1px #ccc;
    display: inline-block;
    height: 40px;
    text-indent: 0.5em;
    outline: none;
  }
}
#form3{
  font-size: 16px;
  margin-top: 0px;
}
a{
  margin-left: 30px;
  font-size: 16px;
}
.second{
  width: 100%;
  text-align: center;
  margin-top: 20px;
  p{
    font-size: 16px;
    color: #aa0202;
    text-align: right;
    margin-top: 15px;
    cursor: pointer;
  }
  .secondOne{
    width: 50%;
    height: 50px;
    margin:0 auto;
    button{
      width: 200px;
      height: 50px;
      text-align: center;
      background: #aa0202;
      color: #fff;
      font-size: 25px;
      border:solid 1px #aa0202;
      border-radius: 8px;
    }
  }
}
.lab{
  letter-spacing: 1.1em;
  
}




</style>
