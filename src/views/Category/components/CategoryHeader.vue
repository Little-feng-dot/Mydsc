<!-- 分类头部 -->
<template>
  <div class="category-header">
    <header>
      <a href="javascript:;" @click="toback"
        ><i class="iconfont icon-zuojiantou"></i
      ></a>
      <form>
        <input type="search" @click="toSearcg" />
        <i class="iconfont icon-sousuo"></i>
      </form>
    </header>
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
    toSearcg() {
      this.$router.push("/Search");
    },
    toback() {
      this.$router.push("/Home/index");
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
.category-header {
  width: 100%;
  height: 4.4rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  header {
    width: 100%;
    display: flex;
    a {
      display: block;
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      i {
        text-align: center;
        font-size: 2.6rem;
        color: #999;
      }
    }
    form {
      width: 85%;
      position: relative;
      margin-top: 0.7rem;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #ccc;
        border-radius: 1.5rem;
      }
      i {
        position: absolute;
        width: 4.4rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        right: 0;
        top: 0;
        font-size: 2.4rem;
        color: #ccc;
      }
    }
  }
}
</style>