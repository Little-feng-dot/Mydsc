<!-- 公共尾部 -->
<template>
  <div class="footer">
    <ul>
      <router-link to="/Home" tag="li">
        <div class="nav-img">
          <i
            class="iconfont icon-shouye"
            v-if="this.$route.path.includes('/Home')"
          ></i>
          <i class="iconfont icon-shouye1" v-else></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/Category/858" tag="li">
        <div class="nav-img">
          <i
            :class="[
              'iconfont',
              'icon-class',
              { 'router-link-active': this.$route.path.includes('/Category') },
            ]"
            v-if="this.$route.path.includes('/Category')"
          ></i>
          <i class="iconfont icon-fenleishouye" v-else></i>
        </div>
        <span
          :class="{
            'router-link-active': this.$route.path.includes('/Category'),
          }"
          >分类</span
        >
      </router-link>
      <router-link to="/Discover" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-faxian1" v-if="active == 'Discover'"></i>
          <i class="iconfont icon-faxian" v-else></i>
        </div>
        <span>发现</span>
      </router-link>
      <router-link to="/Cart" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-gouwucheman" v-if="active == 'Cart'"></i>
          <i class="iconfont icon-gouwuchekong" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/Mine" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-wodedangxuan" v-if="active == 'Mine'"></i>
          <i class="iconfont icon-wode" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
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
    return {
      active: "Home",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.active = this.$route.name;
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  height: 4.9rem;
  border-top: 1px solid #ccc;
  background-color: #fff;
  ul {
    height: 4.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 20%;
      text-align: center;
      .nav-img {
        i {
          font-size: 2.2rem;
        }
      }
    }
  }
}
</style>