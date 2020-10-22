<!-- 登录 -->
<template>
  <div class="login">
    <div class="login-box">
      <div class="goBack">
        <i class="iconfont icon-zuojiantou" @click="toHome"></i>
      </div>
      <div class="title">用户登录</div>
      <form action="">
        <div class="user">
          <i class="iconfont icon-yonghu"></i>
          <input
            type="text"
            placeholder="请输入您的用户名/手机号"
            v-model="user"
          />
        </div>
        <div class="password">
          <i class="iconfont icon-mima"></i>
          <input :type="type" placeholder="请输入登录密码" v-model="pass" />
          <i
            class="iconfont icon-yanjing"
            @click="showPassword"
            :style="{ color: color }"
          ></i>
        </div>
        <p>
          <router-link tag="span" to="/Register">新用户注册</router-link>
          <span>忘记密码?</span>
        </p>
        <button @click.prevent="loginFn">登录</button>
      </form>
    </div>
    <div class="verify">
      <span>短信验证码登录 ></span>
    </div>
    <div class="more">
      <div class="title">
        <p></p>
        <span>使用以下登录方式</span>
        <p></p>
      </div>
      <img src="@/assets/login.png" alt="" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { login } from "@/api/index.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      type: "password",
      color: "",
      user: "",
      pass: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
        this.color = "red";
      } else {
        this.type = "password";
        this.color = "";
      }
    },
    toHome() {
      this.$router.push("/Home/index");
    },
    async loginFn() {
      if (!this.user) {
        Toast("账号不能为空");
        return;
      } else if (!this.pass) {
        Toast("密码不能为空");
        return;
      }

      //  user_name, login_password,
      let params = {
        user_name: this.user,
        login_password: this.pass,
      };
      let result = await login(params);
      this.pass = "";
      if (result.status != 200) {
        let err = result.msg;
        Toast(err);
      } else if (result.msg == "登录成功") {
        if (!sessionStorage.getItem("token")) {
          sessionStorage.setItem("token", result.token);
          sessionStorage.setItem("user", this.user);
        }
        this.$router.push("/Home/index");
      }
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
.login {
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
        .icon-yanjing {
          font-size: 2.2rem;
          position: absolute;
          top: 15%;
          right: 1rem;
          display: block;
        }
      }
      p {
        display: flex;
        justify-content: space-between;
        height: 4rem;
        line-height: 4rem;
        span {
          color: #4b89dc;
          font-size: 1.4rem;
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
  }
  .verify {
    width: 100%;
    text-align: center;
    color: #f92028;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.6rem;
  }
  .more {
    width: 100%;
    height: 11.3rem;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    .title {
      width: 30rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin: 0 1rem;
        font-size: 1.6rem;
        color: #888888;
      }
      p {
        width: 7rem;
        border-top: 1px solid #f1f1f1;
      }
    }
    img {
      display: block;
      width: 4.5rem;
      height: 4.5rem;
      margin: 2rem auto;
    }
  }
}
</style>