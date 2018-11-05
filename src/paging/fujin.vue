<template>
  <div class="shouye">
    <weibu></weibu>
    <header>
      <h2>附近</h2>
      <!-- <img src="../assets/images/" alt=""> -->
    </header>
  <div class="modal">
    <p>将为您打开定位?</p>
    <div>
     
        <button @click="btn(0)" :class="{active:btnIndex == 0}">确定</button>
      
        <button @click="btnIndex = 1" :class="{active:btnIndex == 1}">取消</button>
    </div>
  </div>
  </div>
</template>

<script>
import weibu from "@/components/weibu.vue";
export default {
  name: "shouye",
  components: { weibu },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      btnIndex: 0
    };
  },
  methods: {
    btn(num) {
      console.log(11);
      this.btnIndex = num;
      this.$router.push({ path: "/ditu" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.px2rem(@name, @px) {
  @{name}: @px / 75 * 1rem;
}
.modal {
  .px2rem(width, 600);
  .px2rem(height, 400);
  background: rgb(226, 225, 225);
  border-radius: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
    text-align: center;
    padding: 20px 0;
  }
  div {
    button {
      margin: 0 10px;
      background: linear-gradient(rgb(233, 233, 233), rgb(190, 190, 190));
      color: #fff;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    .active {
      background: linear-gradient(rgb(235, 0, 0), rgb(190, 0, 0));
    }
  }
}
header {
  .px2rem(height, 100);
  // height: 50px;
  background: rgb(168, 0, 0);
  color: #fff;
  position: relative;
  h2 {
    font-weight: bolder;
    font-size: 25px;
    text-align: center;
    .px2rem(line-height, 100);
  }
  img {
    width: 100%;
    position: absolute;
    .px2rem(bottom, -10);
    // bottom: -6px;
    left: 0;
  }
}
</style>
