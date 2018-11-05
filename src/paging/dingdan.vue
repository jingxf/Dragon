<template>
  <div class="shouye">
    <weibu></weibu>



    <div class="box">

      <div class="head">
        <h1>订单</h1>
        <p><img src="../../src/assets/images/首页_02.png" alt=""></p>
      </div>

      <div class="bo">
        <ul>
          <li @click ="tabIndex = 1" :class="{active:tabIndex == 1}">我的账户</li>
          <li @click ="tabIndex = 2" :class="{active:tabIndex == 2}">我的收藏</li>
          <li @click ="tabIndex = 3" :class="{active:tabIndex == 3}">我的订单</li>
        </ul>

        <div class="main"  v-if="tabIndex == 1">
        <div class="first">
          <form action="">账户：<input type="text" placeholder="请输入你的账号"></form>
          <form action="">密码：<input type="password" placeholder="请输入你的密码"></form>
          <form action="" id="form3"><input type="checkbox">记住密码 <a>忘记密码？</a></form>
        </div>
        <div class="second">
          <div class="secondOne">
            <button>登录</button>
            <p @click="godingdan1"><a>没有账户，去注册</a></p>
          </div>          
        </div>
        </div>

        <div class="main" v-if="tabIndex == 2">
          <div class="main1">
            <p class="p1"></p>
            <div class="main12">
              <img src="../assets/images/热门菜肴1_03.png" alt="">
              <div class="main11">
                <h2>菠萝古老肉</h2>
                <p>此菜采用优质上等鸡肉，经过慢炖而成，口感美味，肉质鲜美...</p>
              </div>
            </div>
          </div>
           <div class="main1">
            <p class="p1"></p>
            <div class="main12">
              <img src="../assets/images/热门菜肴2_03.png" alt="">
              <div class="main11">
                <h2>凉拌笋丝</h2>
                <p>此菜采用自然竹笋，上等调料调上等调料调制，口感美味...制，口感美味</p>
              </div>
            </div>
          </div>
          <div class="main1">
            <p class="p1"></p>
            <div class="main12">
              <img src="../assets/images/热门菜肴3_03.png" alt="">
              <div class="main11">
                <h2>香辣鸡翅</h2>
                <p>此菜采用优质上等鸡肉，经过慢炖而成，口感美味，肉质鲜美...</p>
              </div>
            </div>
          </div>
        </div>

          <div class="main" v-if=" tabIndex == 3">
          <div class="main1">
            <p class="p1"></p>
            <div class="main3">
              <div class="main31">
                <img src="../assets/images/热门菜肴4_03.png" alt="">
                <div class="main33">
                <h1>香辣鸭舌</h1>
                <p>单价：<span>56元/例</span></p>
                </div>
              </div>
              <div class="main32">
                <button>删除</button>
              </div>
            </div>
          </div>

           <div class="main1">
            <p class="p1"></p>
            
              <div class="main3" v-show="height">
              <div class="main31">
                <img src="../assets/images/热门菜肴2_03.png" alt="">
                <div class="main33">
                <h1>凉拌笋丝</h1>
                <p>单价：<span>16元/例</span></p>
                </div>
              </div>
              <div class="main32">
                <button @click="del">删除</button>
              </div>
            </div>

          </div>
          <div class="main1">
            <p class="p1"></p>
              
          </div>
        </div>
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
      msg: 'Welcome to Your Vue.js App',
      tabIndex:1,
      height:true
    }
  },
  methods:{
    del(){
      this.height=false;
    },
    godingdan1(){
      this.$router.push('./dingdan1')
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
}
.head p{
  img{
    width: 100%;
  }
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
    font-size: 20px;
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

.main{
  width: 100%;
  margin-top: 20px;
}

.main1{
  border-top:solid 1px #ccc;
}
.p1{
  height: 18px;
}
.main12{
  display: flex;
  justify-content:space-around;
  h2{
    font-size: 20px;
    height: 25px;
    line-height: 25px;
  }
  p{
    font-size: 15px;
    line-height: 30px;
  }
}
.main11{
  margin-left: 8px;
}

.main3{
  display: flex;
  justify-content: space-between;  
  position: relative;
  .main31{
    display: flex;
    justify-content: space-around;
    .main33{
      font-size: 18px;
      line-height: 50px;
      span{
        color: #ffb63f;
      }
    }
  }
  .main32 button{
    position: absolute;
    top:30%;
    right: 10px;
    width: 80px;
    height:35px;
    line-height: 35px;
    font-size: 15px;
  }
}
.main32{
  position: absolute;
  right: 0px;
  bottom: 40%;
}



</style>
