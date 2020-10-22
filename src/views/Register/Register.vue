<!-- 注册 -->
<template>
  <div class="register">
    <div class="login-box">
      <div class="goBack">
        <i class="iconfont icon-zuojiantou" @click="toLogin"></i>
      </div>
      <div class="title">新用户注册</div>
      <form action="">
        <div class="user">
          <i class="iconfont icon-tupian"></i>
          <input type="text" placeholder="请输入图片验证码" />
        </div>
        <div class="password">
          <i class="iconfont icon-shouji"></i>
          <input placeholder="请输入手机号" />
        </div>
        <div class="password">
          <i class="iconfont icon-ico"></i>
          <input placeholder="请输入短信验证码" />
        </div>
        <div class="password">
          <i class="iconfont icon-icon-test"></i>
          <input placeholder="请输入登录密码" />
        </div>
        <button>立即注册</button>
      </form>
      <p>
        若您输入的手机号未注册，将会进入注册流程。注册即视为同意
        <a href="javascript:;">《用户协议》</a>
      </p>
    </div>
    <div class="verify">
      <span @click="toLogin">账号密码登录 ></span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toLogin() {
      this.$router.push("/Login");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.register {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  .login-box {
    padding: 1.1rem;
    .goBack {
      width: 100%;
      height: 5rem;
      i {
        color: #bdbdbd;
        font-size: 3rem;
      }
    }
    .title {
      font-size: 3rem;
      color: #333333;
    }
    form {
      width: 100%;
      margin-top: 2rem;
      color: #c0c4cc;
      input::-webkit-input-placeholder {
        color: #c0c4cc;
        font-size: 1.6rem;
      }
      .user,
      .password {
        width: 100%;
        height: 4rem;
        border-bottom: 1px solid #ddd;
        line-height: 4rem;
        position: relative;
        i {
          font-size: 1.8rem;
        }
        input {
          width: 80%;
          height: 3rem;
          margin-left: 0.5rem;
          color: #999;
        }
      }
      button {
        width: 100%;
        margin: 1rem auto;
        height: 4rem;
        background-color: #f92028;
        color: #fff;
        border-radius: 0.5rem;
      }
    }
    p {
      color: #888;
      font-size: 1.4rem;
      a {
        color: #4b89dc;
      }
    }
  }
  .verify {
    width: 100%;
    text-align: center;
    color: #f92028;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.6rem;
  }
}
</style>